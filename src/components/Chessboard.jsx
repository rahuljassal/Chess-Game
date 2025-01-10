import React from "react";
import { getValidMoves } from "../utils/moveValidation";

function Chessboard({ board, setBoard, gameState, setGameState, onCapture }) {
  const [validMoves, setValidMoves] = React.useState([]);
  const boardRef = React.useRef(null);

  const handleSquareClick = (row, col) => {
    const piece = board[row][col];

    if (
      !gameState.selectedPiece &&
      piece &&
      piece.color === (gameState.isWhiteTurn ? "white" : "black")
    ) {
      const moves = getValidMoves(board, row, col, piece);
      setValidMoves(moves);
      setGameState((gameState) => ({
        ...gameState,
        selectedPiece: { row, col },
      }));
      return;
    }

    if (gameState.selectedPiece) {
      const isValidMove = validMoves.some(
        (move) => move.row === row && move.col === col
      );

      if (isValidMove) {
        const newBoard = [...board];
        const { row: fromRow, col: fromCol } = gameState.selectedPiece;
        const movingPiece = newBoard[fromRow][fromCol];
        const targetPiece = newBoard[row][col];

        // Handle capture
        if (targetPiece) {
          onCapture(
            {
              type: targetPiece.type,
              color: targetPiece.color,
            },
            gameState.isWhiteTurn ? "white" : "black"
          );
        }

        // Move piece
        newBoard[row][col] = movingPiece;
        newBoard[fromRow][fromCol] = null;

        setBoard(newBoard);
        setValidMoves([]);
        setGameState((gameState) => ({
          ...gameState,
          isWhiteTurn: !gameState.isWhiteTurn,
          selectedPiece: null,
        }));
      } else {
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
                    ${isValidMove ? "ring-2 ring-green-500" : ""}
                    cursor-pointer
                  `}
                  onClick={() => handleSquareClick(rowIndex, colIndex)}
                >
                  {piece && (
                    <div
                      className={`text-2xl sm:text-3xl md:text-4xl ${
                        piece.color === "white" ? "text-white" : "text-black"
                      }`}
                    >
                      {getPieceSymbol(piece.type)}
                    </div>
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

function getPieceSymbol(type) {
  const symbols = {
    king: "♔",
    queen: "♕",
    rook: "♖",
    bishop: "♗",
    knight: "♘",
    pawn: "♙",
  };
  return symbols[type];
}

export default Chessboard;
