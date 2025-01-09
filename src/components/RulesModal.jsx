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
            {/* Previous tabs content remains the same */}

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
          </ScrollArea>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}

export default RulesModal;
