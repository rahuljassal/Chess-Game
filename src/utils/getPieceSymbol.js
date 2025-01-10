import blackBishop from "../assets/black-bishop.png";
import blackKing from "../assets/black-king.png";
import blackKnight from "../assets/black-knight.png";
import blackQueen from "../assets/black-queen.png";
import blackPawn from "../assets/black-pawn.png";
import blackRook from "../assets/black-rook.png";
import whiteRook from "../assets/white-rook.png";
import whiteBishop from "../assets/white-bishop.png";
import whiteKing from "../assets/white-king.png";
import whiteKnight from "../assets/white-knight.png";
import whiteQueen from "../assets/white-queen.png";
import whitePawn from "../assets/white-pawn.png";
export function getPieceSymbol({ type, color }) {
  const symbols = {
    white: {
      king: whiteKing,
      queen: whiteQueen,
      rook: whiteRook,
      bishop: whiteBishop,
      knight: whiteKnight,
      pawn: whitePawn,
    },
    black: {
      king: blackKing,
      queen: blackQueen,
      rook: blackRook,
      bishop: blackBishop,
      knight: blackKnight,
      pawn: blackPawn,
    },
  };
  return symbols[color][type];
}
