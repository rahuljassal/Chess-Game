import React from "react";
import { getValidMoves } from "../utils/moveValidation";
import { getPieceSymbol } from "../utils/getPieceSymbol";

function Chessboard({ board, setBoard, gameState, setGameState, onCapture }) {
  // State for tracking valid moves for selected piece
  const [validMoves, setValidMoves] = React.useState([]);
  // Ref for the chessboard element
  const boardRef = React.useRef(null);

  // Handler for clicking on a square
  const handleSquareClick = (row, col) => {
    const piece = board[row][col];

    // Case 1: Selecting a piece to move
    if (
      !gameState.selectedPiece &&
      piece &&
      piece.color === (gameState.isWhiteTurn ? "white" : "black")
    ) {
      // Calculate and show valid moves for selected piece
      const moves = getValidMoves(board, row, col, piece);
      setValidMoves(moves);
      setGameState((gameState) => ({
        ...gameState,
        selectedPiece: { row, col },
      }));
      return;
    }

    // Case 2: Moving a selected piece
    if (gameState.selectedPiece) {
      // Check if the target square is a valid move
      const isValidMove = validMoves.some(
        (move) => move.row === row && move.col === col
      );

      if (isValidMove) {
        const newBoard = [...board];
        const { row: fromRow, col: fromCol } = gameState.selectedPiece;
        const movingPiece = newBoard[fromRow][fromCol];
        const targetPiece = newBoard[row][col];

        // Handle capture if there's a piece on the target square
        if (targetPiece) {
          onCapture(
            {
              type: targetPiece.type,
              color: targetPiece.color,
            },
            gameState.isWhiteTurn ? "white" : "black"
          );
        }

        // Update board with the move
        newBoard[row][col] = movingPiece;
        newBoard[fromRow][fromCol] = null;

        // Update game state after move
        setBoard(newBoard);
        setValidMoves([]);
        setGameState((gameState) => ({
          ...gameState,
          isWhiteTurn: !gameState.isWhiteTurn,
          selectedPiece: null,
        }));
      } else {
        // Deselect piece if clicking on invalid square
        setValidMoves([]);
        setGameState((gameState) => ({ ...gameState, selectedPiece: null }));
      }
    }
  };

  return (
    <div className="w-full max-w-[80vh] mx-auto">
      <div className="aspect-square bg-white rounded-lg shadow-lg p-4">
        <div className="grid grid-cols-8 gap-1 h-full">
          {board.map((row, rowIndex) =>
            row.map((piece, colIndex) => {
              const isLight = (rowIndex + colIndex) % 2 === 0;
              const isSelected =
                gameState.selectedPiece?.row === rowIndex &&
                gameState.selectedPiece?.col === colIndex;
              const isValidMove = validMoves.some(
                (move) => move.row === rowIndex && move.col === colIndex
              );

              return (
                <div
                  key={`${rowIndex}-${colIndex}`}
                  className={`
                    aspect-square flex items-center justify-center
                    ${isLight ? "bg-amber-100" : "bg-amber-800"}
                    ${isSelected ? "ring-2 ring-blue-500" : ""}
                    ${isValidMove ? "ring-2 ring-green-500 bg-green-200" : ""}
                    cursor-pointer
                  `}
                  onClick={() => handleSquareClick(rowIndex, colIndex)}
                >
                  {piece && (
                    <img
                      src={getPieceSymbol(piece)}
                      alt={`${piece.color} ${piece.type}`}
                      className="w-full h-full object-contain"
                    />
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default Chessboard;
