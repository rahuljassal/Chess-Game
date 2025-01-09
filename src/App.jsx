import React from "react";
import { Button } from "@/components/ui/button";
import Chessboard from "./components/Chessboard";
import GameStatus from "./components/GameStatus";
import RulesModal from "./components/RulesModal";

function App() {
  const [gameState, setGameState] = React.useState({
    isWhiteTurn: true,
    status: "playing", // 'playing', 'check', 'checkmate', 'stalemate'
    selectedPiece: null,
    capturedPieces: {
      white: [], // pieces captured by white
      black: [], // pieces captured by black
    },
  });

  const handleNewGame = () => {
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
