export function getValidMoves(board, row, col, piece) {
  switch (piece.type) {
    case "pawn":
      return getPawnMoves(board, row, col, piece.color);
    case "rook":
      return getRookMoves(board, row, col, piece.color);
    case "knight":
      return getKnightMoves(board, row, col, piece.color);
    case "bishop":
      return getBishopMoves(board, row, col, piece.color);
    case "queen":
      return getQueenMoves(board, row, col, piece.color);
    case "king":
      return getKingMoves(board, row, col, piece.color);
    default:
      return [];
  }
}

function getPawnMoves(board, row, col, color) {
  const moves = [];
  const direction = color === "white" ? -1 : 1;
  const startRow = color === "white" ? 6 : 1;

  // Forward move
  if (isInBounds(row + direction, col) && !board[row + direction][col]) {
    moves.push({ row: row + direction, col });

    // Initial two-square move
    if (row === startRow && !board[row + 2 * direction][col]) {
      moves.push({ row: row + 2 * direction, col });
    }
  }

  // Captures
  const captureSquares = [
    { row: row + direction, col: col - 1 },
    { row: row + direction, col: col + 1 },
  ];

  captureSquares.forEach((square) => {
    if (isInBounds(square.row, square.col)) {
      const targetPiece = board[square.row][square.col];
      if (targetPiece && targetPiece.color !== color) {
        moves.push(square);
      }
    }
  });

  return moves;
}

// Get all valid moves for a rook piece
function getRookMoves(board, row, col, color) {
  const moves = [];
  // Define possible directions: right, left, down, up
  const directions = [
    [0, 1], // right
    [0, -1], // left
    [1, 0], // down
    [-1, 0], // up
  ];

  // Check each direction
  directions.forEach(([dx, dy]) => {
    let x = row + dx;
    let y = col + dy;

    // Continue in direction until hitting board edge or piece
    while (isInBounds(x, y)) {
      const piece = board[x][y];
      if (!piece) {
        // Empty square - valid move
        moves.push({ row: x, col: y });
      } else {
        // Hit a piece - if enemy piece, can capture
        if (piece.color !== color) {
          moves.push({ row: x, col: y });
        }
        break; // Stop checking this direction
      }
      x += dx;
      y += dy;
    }
  });

  return moves;
}

// Get all valid moves for a knight piece
function getKnightMoves(board, row, col, color) {
  const moves = [];
  // All possible L-shaped moves for knight
  const knightMoves = [
    [-2, -1],
    [-2, 1], // Up 2, left/right 1
    [-1, -2],
    [-1, 2], // Up 1, left/right 2
    [1, -2],
    [1, 2], // Down 1, left/right 2
    [2, -1],
    [2, 1], // Down 2, left/right 1
  ];

  knightMoves.forEach(([dx, dy]) => {
    const newRow = row + dx;
    const newCol = col + dy;

    // Check if move is on board and either empty or enemy piece
    if (isInBounds(newRow, newCol)) {
      const piece = board[newRow][newCol];
      if (!piece || piece.color !== color) {
        moves.push({ row: newRow, col: newCol });
      }
    }
  });

  return moves;
}

// Get all valid moves for a bishop piece
function getBishopMoves(board, row, col, color) {
  const moves = [];
  // Define diagonal directions
  const directions = [
    [1, 1], // down-right
    [1, -1], // down-left
    [-1, 1], // up-right
    [-1, -1], // up-left
  ];

  // Check each diagonal direction
  directions.forEach(([dx, dy]) => {
    let x = row + dx;
    let y = col + dy;

    // Continue in diagonal until hitting board edge or piece
    while (isInBounds(x, y)) {
      const piece = board[x][y];
      if (!piece) {
        moves.push({ row: x, col: y });
      } else {
        if (piece.color !== color) {
          moves.push({ row: x, col: y });
        }
        break;
      }
      x += dx;
      y += dy;
    }
  });

  return moves;
}

function getQueenMoves(board, row, col, color) {
  return [
    ...getRookMoves(board, row, col, color),
    ...getBishopMoves(board, row, col, color),
  ];
}

function getKingMoves(board, row, col, color) {
  const moves = [];
  const directions = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  directions.forEach(([dx, dy]) => {
    const newRow = row + dx;
    const newCol = col + dy;

    if (isInBounds(newRow, newCol)) {
      const piece = board[newRow][newCol];
      if (!piece || piece.color !== color) {
        moves.push({ row: newRow, col: newCol });
      }
    }
  });

  return moves;
}

function isInBounds(row, col) {
  return row >= 0 && row < 8 && col >= 0 && col < 8;
}
