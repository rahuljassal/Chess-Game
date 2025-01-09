import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

function RulesModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Rules</Button>
      </DialogTrigger>
      <DialogContent className="w-[95vw] max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl sm:text-2xl">Chess Rules</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 p-2 sm:p-4">
          <p className="text-sm sm:text-base">
            Chess is a game played between two players on a board of 64 squares.
          </p>

          <div>
            <h3 className="font-bold mb-2 text-base sm:text-lg">
              Piece Movements:
            </h3>
            <ul className="list-disc pl-4 sm:pl-6 space-y-2 text-sm sm:text-base">
              <li>
                <strong>Pawn:</strong> Moves forward one square at a time,
                captures diagonally
              </li>
              <li>
                <strong>Rook:</strong> Moves any number of squares horizontally
                or vertically
              </li>
              <li>
                <strong>Knight:</strong> Moves in an L-shape (two squares in one
                direction, then one square perpendicular)
              </li>
              <li>
                <strong>Bishop:</strong> Moves any number of squares diagonally
              </li>
              <li>
                <strong>Queen:</strong> Moves any number of squares in any
                direction
              </li>
              <li>
                <strong>King:</strong> Moves one square in any direction
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-2 text-base sm:text-lg">
              Special Rules:
            </h3>
            <ul className="list-disc pl-4 sm:pl-6 space-y-2 text-sm sm:text-base">
              <li>
                <strong>Castling:</strong> A special king and rook move
              </li>
              <li>
                <strong>En Passant:</strong> Special pawn capture
              </li>
              <li>
                <strong>Pawn Promotion:</strong> Pawns reaching the opposite end
                can be promoted
              </li>
              <li>
                <strong>Check:</strong> When the king is under threat
              </li>
              <li>
                <strong>Checkmate:</strong> When the king is in check and cannot
                escape
              </li>
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default RulesModal;
