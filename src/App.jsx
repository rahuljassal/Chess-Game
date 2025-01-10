import React from "react";
import { Button } from "@/components/ui/button";
import Chessboard from "./components/Chessboard";
import GameStatus from "./components/GameStatus";
import RulesModal from "./components/RulesModal";

function App() {
  // Function to create and return the initial chess board setup
  const initializeBoard = () => {
    // Create an 8x8 empty board
    const initialBoard = Array(8)
      .fill()
      .map(() => Array(8).fill(null));

    // Set up pawns for both black (row 1) and white (row 6)
    for (let i = 0; i < 8; i++) {
      initialBoard[1][i] = { type: "pawn", color: "black" };
      initialBoard[6][i] = { type: "pawn", color: "white" };
    }

    // Define the order of pieces in the back rank
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

    // Set up back rank pieces for both black (row 0) and white (row 7)
    for (let i = 0; i < 8; i++) {
      initialBoard[0][i] = { type: backRankPieces[i], color: "black" };
      initialBoard[7][i] = { type: backRankPieces[i], color: "white" };
    }

    return initialBoard;
  };

  // State management for the board and game state
  const [board, setBoard] = React.useState(initializeBoard());
  const [gameState, setGameState] = React.useState({
    isWhiteTurn: true, // Track current turn
    status: "playing", // Game status (playing, checkmate, stalemate, etc.)
    selectedPiece: null, // Currently selected piece for movement
    capturedPieces: {
      // Track captured pieces for both sides
      white: [],
      black: [],
    },
  });

  // Handler for starting a new game
  const handleNewGame = () => {
    // Reset the board to initial position
    setBoard(initializeBoard());
    // Reset game state to default values
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

  // Handler for piece captures
  const handleCapture = (capturedPiece, capturedBy) => {
    // Update the captured pieces array for the capturing side
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
