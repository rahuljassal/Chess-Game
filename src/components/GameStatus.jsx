import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getPieceSymbol } from "../utils/getPieceSymbol";
import {
  calculateMaterialAdvantage,
  calculateTotalValue,
} from "../utils/gameStatusHelperFunctions";

function GameStatus({ gameState }) {
  return (
    <Card className="w-full h-full">
      <CardHeader className="p-4 sm:p-6">
        <CardTitle className="text-lg sm:text-xl">Game Status</CardTitle>
      </CardHeader>
      <CardContent className="p-4 sm:p-6">
        <div className="space-y-4">
          {/* Current turn indicator */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
            <span className="font-medium">Current Turn:</span>
            <span
              className={`px-3 py-1 rounded-full text-sm sm:text-base ${
                gameState.isWhiteTurn
                  ? "bg-white text-black border border-gray-300"
                  : "bg-black text-white"
              }`}
            >
              {gameState.isWhiteTurn ? "White" : "Black"}
            </span>
          </div>

          {/* Game status indicator (shows only when game is not in progress) */}
          {/* {gameState.status !== "playing" && (
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
              <span className="font-medium">Status:</span>
              <span className="px-3 py-1 rounded-full bg-red-100 text-red-800 text-sm sm:text-base">
                {gameState.status.charAt(0).toUpperCase() +
                  gameState.status.slice(1)}
              </span>
            </div>
          )} */}

          {gameState.status === "check" && (
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0 mt-4">
              <span className="font-medium">Status:</span>
              <span className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 text-sm sm:text-base">
                Check!
              </span>
            </div>
          )}

          {gameState.status === "checkmate" && (
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0 mt-4">
              <span className="font-medium">Status:</span>
              <span className="px-3 py-1 rounded-full bg-red-100 text-red-800 text-sm sm:text-base">
                Checkmate! {gameState.isWhiteTurn ? "Black" : "White"} wins!
              </span>
            </div>
          )}

          {/* Captured pieces section */}
          <div className="mt-6">
            <h3 className="font-medium mb-3">Captured Pieces</h3>
            <div className="grid grid-cols-1 gap-4">
              {/* White's captured pieces display */}
              <div className="bg-white rounded-lg p-4 border">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-sm text-gray-600">White's Captures:</h4>
                  {/* Show total value of white's captures */}
                  {gameState.capturedPieces.white.length > 0 && (
                    <span className="text-sm text-gray-600">
                      +{calculateTotalValue(gameState.capturedPieces.white)}
                    </span>
                  )}
                </div>
                <div className="min-h-12 flex flex-wrap gap-2">
                  {/* Display white's captured pieces as symbols */}
                  {gameState.capturedPieces.white.map((piece, index) => (
                    <img
                      key={index}
                      src={getPieceSymbol(piece)}
                      alt={`${piece.color} ${piece.type}`}
                      className="w-[30px] object-contain"
                    />
                  ))}
                  {/* Show placeholder when no captures */}
                  {gameState.capturedPieces.white.length === 0 && (
                    <span className="text-gray-400 text-sm">
                      No captures yet
                    </span>
                  )}
                </div>
              </div>

              {/* Black's captured pieces display */}
              <div className="bg-white rounded-lg p-4 border">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-sm text-gray-600">Black's Captures:</h4>
                  {/* Show total value of black's captures */}
                  {gameState.capturedPieces.black.length > 0 && (
                    <span className="text-sm text-gray-600">
                      +{calculateTotalValue(gameState.capturedPieces.black)}
                    </span>
                  )}
                </div>
                <div className="min-h-12 flex flex-wrap gap-2">
                  {/* Display black's captured pieces as symbols */}
                  {gameState.capturedPieces.black.map((piece, index) => (
                    <img
                      key={index}
                      src={getPieceSymbol(piece)}
                      alt={`${piece.color} ${piece.type}`}
                      className="w-[30px] object-contain"
                    />
                  ))}
                  {/* Show placeholder when no captures */}
                  {gameState.capturedPieces.black.length === 0 && (
                    <span className="text-gray-400 text-sm">
                      No captures yet
                    </span>
                  )}
                </div>
              </div>

              {/* Material advantage indicator */}
              {(gameState.capturedPieces.white.length > 0 ||
                gameState.capturedPieces.black.length > 0) && (
                <div className="text-center text-sm text-gray-600">
                  {calculateMaterialAdvantage(gameState) !== 0 && (
                    <span>
                      Material advantage:{" "}
                      {calculateMaterialAdvantage(gameState) > 0
                        ? "White"
                        : "Black"}
                      (+{Math.abs(calculateMaterialAdvantage(gameState))})
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default GameStatus;
