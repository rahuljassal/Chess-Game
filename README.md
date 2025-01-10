# Chess Game

A fully-featured chess game built with React, featuring a complete implementation of chess rules, piece movement validation, and game state management.

## Features

- Complete chess rules implementation
- Interactive board with valid move highlighting
- Piece movement and capture tracking
- Game state management (turns, check, checkmate)
- Material advantage calculation
- Comprehensive rules reference
- Responsive design for both desktop and mobile
- Dark/light theme support

## Tech Stack

- React 18
- Vite
- TypeScript
- Tailwind CSS
- Radix UI Components
- shadcn/ui

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
   bash
   git clone https://github.com/yourusername/chess-game.git
   cd chess-game

2. Install dependencies
   bash
   npm install
3. Start the development server
   bash
   npm run dev

The application will be available at `http://localhost:5173`

## Game Rules

### Basic Rules

- White moves first
- Players take turns moving one piece at a time
- A piece cannot move through other pieces (except for knights)
- A piece can capture an opponent's piece by moving to its square
- The game ends when there is a checkmate or a draw

### Special Moves

- Castling
- En Passant
- Pawn Promotion

### Win Conditions

- Checkmate
- Resignation
- Draw by agreement
- Stalemate
- Insufficient material
- Threefold repetition
- Fifty-move rule

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Chess piece images from [source]
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Radix UI for accessible component primitives
