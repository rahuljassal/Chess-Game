import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function RulesModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Rules</Button>
      </DialogTrigger>
      <DialogContent className="w-[95vw] max-w-2xl h-[90vh]">
        <DialogHeader>
          <DialogTitle className="text-xl sm:text-2xl">Chess Rules</DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="basics" className="w-full h-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="basics">Basics</TabsTrigger>
            <TabsTrigger value="pieces">Pieces</TabsTrigger>
            <TabsTrigger value="special">Special Rules</TabsTrigger>
            <TabsTrigger value="conditions">Game Conditions</TabsTrigger>
          </TabsList>

          <ScrollArea className="h-[calc(90vh-8rem)] mt-2">
            <TabsContent value="conditions" className="p-4">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Check</h3>
                  <p>
                    A king is in check when it's under attack by one or more
                    enemy pieces. When in check, you must:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Move the king to a safe square</li>
                    <li>Block the attacking piece with another piece</li>
                    <li>Capture the attacking piece</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Checkmate</h3>
                  <p>Checkmate occurs when:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>The king is in check</li>
                    <li>There are no legal moves to escape check</li>
                    <li>The attacking piece cannot be captured</li>
                    <li>The check cannot be blocked</li>
                  </ul>
                  <p className="mt-2">Common checkmate patterns:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>
                      Back Rank Mate: Using a rook or queen to checkmate along
                      the back rank
                    </li>
                    <li>
                      Scholar's Mate: Quick checkmate using queen and bishop
                    </li>
                    <li>
                      Smothered Mate: Using a knight when the king is surrounded
                      by its own pieces
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Stalemate</h3>
                  <p>A stalemate occurs when:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>The player to move has no legal moves</li>
                    <li>Their king is NOT in check</li>
                    <li>Results in a draw</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Insufficient Material
                  </h3>
                  <p>
                    The game is a draw when there's insufficient material to
                    checkmate:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>King vs. King</li>
                    <li>King and Bishop vs. King</li>
                    <li>King and Knight vs. King</li>
                    <li>
                      King and Bishop vs. King and Bishop (same colored squares)
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Threefold Repetition
                  </h3>
                  <p>
                    The game is a draw when the same position occurs three
                    times:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Same pieces in the same positions</li>
                    <li>Same player to move</li>
                    <li>Same possible moves available</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Fifty-Move Rule
                  </h3>
                  <p>The game is a draw if within the last 50 moves:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>No pawn has been moved</li>
                    <li>No piece has been captured</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="basics" className="p-4">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Game Overview</h3>
                  <p>
                    Chess is a strategic board game played between two players
                    on a checkered board with 64 squares (8×8). Each player
                    starts with 16 pieces: one king, one queen, two rooks, two
                    knights, two bishops, and eight pawns.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Objective</h3>
                  <p>
                    The goal is to checkmate your opponent's king. This happens
                    when the king is in check (under attack) and there is no
                    legal way to remove the threat.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Basic Rules</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>White always moves first</li>
                    <li>Players take turns moving one piece at a time</li>
                    <li>
                      A piece cannot move through other pieces (except for the
                      knight)
                    </li>
                    <li>
                      A piece can capture an opponent's piece by moving to its
                      square
                    </li>
                    <li>The game ends when there is a checkmate or a draw</li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="pieces" className="p-4">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">King (♔)</h3>
                  <p>
                    Moves one square in any direction (horizontally, vertically,
                    or diagonally).
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Queen (♕)</h3>
                  <p>
                    Moves any number of squares in any direction (horizontally,
                    vertically, or diagonally).
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Rook (♖)</h3>
                  <p>Moves any number of squares horizontally or vertically.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Bishop (♗)</h3>
                  <p>Moves any number of squares diagonally.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Knight (♘)</h3>
                  <p>
                    Moves in an L-shape: two squares in one direction and then
                    one square perpendicular. Can jump over other pieces.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Pawn (♙)</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Moves forward one square at a time</li>
                    <li>Can move two squares forward on its first move</li>
                    <li>Captures diagonally one square forward</li>
                    <li>
                      Can be promoted when reaching the opposite end of the
                      board
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="special" className="p-4">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Castling</h3>
                  <p>
                    A special move involving the king and a rook. The king moves
                    two squares toward the rook, and the rook moves to the
                    square the king crossed. Conditions:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Neither the king nor the rook has moved</li>
                    <li>No pieces between the king and rook</li>
                    <li>King is not in check</li>
                    <li>King doesn't pass through a square under attack</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">En Passant</h3>
                  <p>
                    When a pawn moves two squares forward and lands beside an
                    enemy pawn, the enemy pawn can capture it as if it had moved
                    only one square.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Pawn Promotion</h3>
                  <p>
                    When a pawn reaches the opposite end of the board, it can be
                    promoted to any other piece (usually a queen).
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Draw Conditions
                  </h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Stalemate: No legal moves and king is not in check</li>
                    <li>Mutual agreement between players</li>
                    <li>Threefold repetition of position</li>
                    <li>Fifty moves without a pawn move or capture</li>
                    <li>Insufficient material to checkmate</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </ScrollArea>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}

export default RulesModal;
