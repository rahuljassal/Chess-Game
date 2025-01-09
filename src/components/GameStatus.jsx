import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function GameStatus({ gameState }) {
  return (
    <Card className="w-full h-full">
      <CardHeader className="p-4 sm:p-6">
        <CardTitle className="text-lg sm:text-xl">Game Status</CardTitle>
      </CardHeader>
      <CardContent className="p-4 sm:p-6">
        <div className="space-y-4">
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

          {gameState.status !== "playing" && (
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
              <span className="font-medium">Status:</span>
              <span className="px-3 py-1 rounded-full bg-red-100 text-red-800 text-sm sm:text-base">
                {gameState.status.charAt(0).toUpperCase() +
                  gameState.status.slice(1)}
              </span>
            </div>
          )}

          <div className="mt-6 sm:mt-8 lg:mt-12">
            <h3 className="font-medium mb-3">Captured Pieces</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-sm text-gray-600 mb-2">White</h4>
                <div className="min-h-12 bg-gray-50 rounded p-2"></div>
              </div>
              <div>
                <h4 className="text-sm text-gray-600 mb-2">Black</h4>
                <div className="min-h-12 bg-gray-50 rounded p-2"></div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default GameStatus;
