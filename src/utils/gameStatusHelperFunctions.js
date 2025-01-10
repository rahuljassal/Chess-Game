// Get standard chess piece values for material advantage calculation
export const getCaptureValue = (piece) => {
  const values = {
    pawn: 1,
    knight: 3,
    bishop: 3,
    rook: 5,
    queen: 9,
    king: 0, // King's value not counted in material advantage
  };
  return values[piece.type];
};

// Calculate the overall material advantage between players
export const calculateMaterialAdvantage = (gameState) => {
  // Sum up the value of white's captures
  const whiteCaptureValue = gameState.capturedPieces.white.reduce(
    (sum, piece) => sum + getCaptureValue(piece),
    0
  );
  // Sum up the value of black's captures
  const blackCaptureValue = gameState.capturedPieces.black.reduce(
    (sum, piece) => sum + getCaptureValue(piece),
    0
  );
  // Return the difference (positive means white advantage)
  return whiteCaptureValue - blackCaptureValue;
};

// Calculate total material value for a set of captured pieces
export const calculateTotalValue = (pieces) => {
  return pieces.reduce((sum, piece) => sum + getCaptureValue(piece), 0);
};
