import React from "react";
import { getValidMoves } from "../utils/moveValidation";

function Chessboard({ gameState, setGameState }) {
  const [board, setBoard] = React.useState(initializeBoard());
  const [validMoves, setValidMoves] = React.useState([]);
  const [boardSize, setBoardSize] = React.useState(0);
  const boardRef = React.useRef(null);

  React.useEffect(() => {
    const updateBoardSize = () => {
      if (boardRef.current) {
        const containerWidth = boardRef.current.offsetWidth;
        setBoardSize(containerWidth);
      }
    };

    updateBoardSize();
    window.addEventListener("resize", updateBoardSize);
    return () => window.removeEventListener("resize", updateBoardSize);
  }, []);

  function initializeBoard() {
    const initialBoard = Array(8)
      .fill()
      .map(() => Array(8).fill(null));

    // Set up pawns
    for (let i = 0; i < 8; i++) {
      initialBoard[1][i] = { type: "pawn", color: "black" };
      initialBoard[6][i] = { type: "pawn", color: "white" };
    }

    // Set up other pieces
    const backRankPieces = [
      "rook",
      "knight",
      "bishop",
      "queen",
      "king",
      "bishop",
      "knight",
      "rook",
    ];
    for (let i = 0; i < 8; i++) {
      initialBoard[0][i] = { type: backRankPieces[i], color: "black" };
      initialBoard[7][i] = { type: backRankPieces[i], color: "white" };
    }

    return initialBoard;
  }

  const handleSquareClick = (row, col) => {
    const piece = board[row][col];

    if (
      !gameState.selectedPiece &&
      piece &&
      piece.color === (gameState.isWhiteTurn ? "white" : "black")
    ) {
      const moves = getValidMoves(board, row, col, piece);
      setValidMoves(moves);
      setGameState({ ...gameState, selectedPiece: { row, col } });
      return;
    }

    if (gameState.selectedPiece) {
      const isValidMove = validMoves.some(
        (move) => move.row === row && move.col === col
      );

      if (isValidMove) {
        const newBoard = [...board];
        const { row: fromRow, col: fromCol } = gameState.selectedPiece;

        newBoard[row][col] = newBoard[fromRow][fromCol];
        newBoard[fromRow][fromCol] = null;

        setBoard(newBoard);
        setValidMoves([]);
        setGameState({
          ...gameState,
          isWhiteTurn: !gameState.isWhiteTurn,
          selectedPiece: null,
        });
      } else {
        setValidMoves([]);
        setGameState({ ...gameState, selectedPiece: null });
      }
    }
  };

  const getPieceSize = () => {
    if (boardSize <= 350) return "text-2xl";
    if (boardSize <= 500) return "text-3xl";
    return "text-4xl";
  };

  return (
    <div
      ref={boardRef}
      className="w-full bg-white rounded-lg shadow-lg p-2 sm:p-4"
    >
      <div className="grid grid-cols-8 gap-0.5 sm:gap-1 aspect-square">
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
                  transition-colors duration-200
                  hover:opacity-90
                `}
                onClick={() => handleSquareClick(rowIndex, colIndex)}
              >
                {piece && (
                  <div
                    className={`${getPieceSize()} ${
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
