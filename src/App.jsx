import React from "react";
import { Button } from "@/components/ui/button";
import Chessboard from "./components/Chessboard";
import GameStatus from "./components/GameStatus";
import RulesModal from "./components/RulesModal";

function App() {
  const initializeBoard = () => {
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
  };

  const [board, setBoard] = React.useState(initializeBoard());
  const [gameState, setGameState] = React.useState({
    isWhiteTurn: true,
    status: "playing",
    selectedPiece: null,
    capturedPieces: {
      white: [],
      black: [],
    },
  });

  const handleNewGame = () => {
    setBoard(initializeBoard());
    setGameState({
      isWhiteTurn: true,
      status: "playing",
      selectedPiece: null,
      capturedPieces: {
        white: [],
        black: [],
      },
    });
  };

  const handleCapture = (capturedPiece, capturedBy) => {
    setGameState((prevState) => ({
      ...prevState,
      capturedPieces: {
        ...prevState.capturedPieces,
        [capturedBy]: [...prevState.capturedPieces[capturedBy], capturedPiece],
      },
    }));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-4 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Chess Game
          </h1>
          <div className="flex gap-2">
            <Button onClick={handleNewGame}>New Game</Button>
            <RulesModal />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2">
            <Chessboard
              board={board}
              setBoard={setBoard}
              gameState={gameState}
              setGameState={setGameState}
              onCapture={handleCapture}
            />
          </div>
          <div className="w-full">
            <GameStatus gameState={gameState} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
