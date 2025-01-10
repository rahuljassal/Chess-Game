import { getRawValidMoves, getValidMoves } from "./moveValidation";

function isKingInCheck(board, kingColor, skipMoveValidation = false) {
  // Find the king's position
  let kingPosition = null;
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const piece = board[row][col];
      if (piece && piece.type === "king" && piece.color === kingColor) {
        kingPosition = { row, col };
        break;
      }
    }
    if (kingPosition) break;
  }

  // Check if any opponent piece can attack the king
  const opponentColor = kingColor === "white" ? "black" : "white";
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const piece = board[row][col];
      if (piece && piece.color === opponentColor) {
        // Use getRawValidMoves to avoid recursive check validation
        const moves = getRawValidMoves(board, row, col, piece);
        if (
          moves.some(
            (move) =>
              move.row === kingPosition.row && move.col === kingPosition.col
          )
        ) {
          return true;
        }
      }
    }
  }
  return false;
}

function isCheckmate(board, kingColor) {
  // If king is not in check, it's not checkmate
  if (!isKingInCheck(board, kingColor)) {
    return false;
  }

  // Try all possible moves for all pieces of the king's color
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const piece = board[row][col];
      if (piece && piece.color === kingColor) {
        const moves = getValidMoves(board, row, col, piece);

        // If any valid move exists, it's not checkmate
        if (moves.length > 0) {
          return false;
        }
      }
    }
  }

  // If no valid moves exist, it's checkmate
  return true;
}

export { isKingInCheck, isCheckmate };
