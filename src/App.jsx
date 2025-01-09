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
  });

  const handleNewGame = () => {
    setGameState({
      isWhiteTurn: true,
      status: "playing",
      selectedPiece: null,
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-4 sm:mb-6 md:mb-8 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Chess Game
          </h1>
          <div className="flex gap-2 sm:gap-4">
            <Button onClick={handleNewGame}>New Game</Button>
            <RulesModal />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          <div className="lg:col-span-2">
            <Chessboard gameState={gameState} setGameState={setGameState} />
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
