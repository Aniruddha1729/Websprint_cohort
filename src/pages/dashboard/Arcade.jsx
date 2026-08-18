import { useState } from "react";
import { Gamepad2, Grid, Puzzle, RotateCcw, Sparkles } from "lucide-react";

export default function Arcade() {
  const [activeGame, setActiveGame] = useState("chess");
  const [playerColor, setPlayerColor] = useState("white");
  const [selectedSquare, setSelectedSquare] = useState(null);
  const [turn, setTurn] = useState("white");

  // Standard Initial 8x8 Chessboard Matrix
  const initialBoard = [
    ["♜", "♞", "♝", "♛", "♚", "♝", "♞", "♜"],
    ["♟", "♟", "♟", "♟", "♟", "♟", "♟", "♟"],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["♙", "♙", "♙", "♙", "♙", "♙", "♙", "♙"],
    ["♖", "♘", "♗", "♕", "♔", "♗", "♘", "♖"],
  ];

  const [board, setBoard] = useState(initialBoard);

  const handleSquareClick = (r, c) => {
    if (!selectedSquare) {
      if (board[r][c] !== "") {
        setSelectedSquare({ r, c });
      }
    } else {
      const newBoard = board.map((row) => [...row]);
      newBoard[r][c] = newBoard[selectedSquare.r][selectedSquare.c];
      newBoard[selectedSquare.r][selectedSquare.c] = "";
      setBoard(newBoard);
      setSelectedSquare(null);
      setTurn((prev) => (prev === "white" ? "black" : "white"));
    }
  };

  const resetBoard = () => {
    setBoard(initialBoard);
    setSelectedSquare(null);
    setTurn("white");
  };

  return (
    <div className="w-full min-h-full px-[2.5%] pt-[35px] pb-16 flex flex-col relative select-none">
      {/* ========================================== */}
      {/* 1. MAIN HEADER (~116px Height)             */}
      {/* ========================================== */}
      <div className="w-full h-[85px] flex flex-col justify-center">
        <h1 className="font-heading text-[24px] font-bold text-foreground tracking-tight">
          c/arcade
        </h1>
        <p className="text-sm md:text-[16px] text-muted-foreground font-normal mt-1">
          Quick browser games you can play inside cohort.
        </p>
      </div>

      {/* Header Divider */}
      <div className="w-full border-b border-border/60 mb-6" />

      {/* ========================================== */}
      {/* 2. GAME SELECTION CARDS (3 Cards Row)      */}
      {/* ========================================== */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {/* Card 1: Chess (ACTIVE CARD) */}
        <div
          onClick={() => setActiveGame("chess")}
          className={`h-[90px] rounded-2xl p-4 flex items-center gap-4 transition-all cursor-pointer shadow-sm ${
            activeGame === "chess"
              ? "bg-[#2860C8] text-white shadow-md scale-[1.01]"
              : "bg-card border border-border/80 text-foreground hover:bg-secondary/60"
          }`}
        >
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl shrink-0 ${
            activeGame === "chess" ? "bg-white/20 text-white" : "bg-primary/10 text-primary"
          }`}>
            ♔
          </div>
          <div>
            <h3 className="font-heading text-base font-bold">Chess</h3>
            <p className={`text-xs ${activeGame === "chess" ? "text-white/80" : "text-muted-foreground"}`}>
              You vs Buddy AI.
            </p>
          </div>
        </div>

        {/* Card 2: Tic-Tac-Toe */}
        <div
          onClick={() => setActiveGame("tictactoe")}
          className={`h-[90px] rounded-2xl p-4 flex items-center gap-4 transition-all cursor-pointer shadow-sm ${
            activeGame === "tictactoe"
              ? "bg-[#2860C8] text-white shadow-md scale-[1.01]"
              : "bg-card border border-border/80 text-foreground hover:bg-secondary/60"
          }`}
        >
          <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
            <Grid className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-heading text-base font-bold">Tic-Tac-Toe</h3>
            <p className="text-xs text-muted-foreground">Play against Buddy AI.</p>
          </div>
        </div>

        {/* Card 3: Sudoku */}
        <div
          onClick={() => setActiveGame("sudoku")}
          className={`h-[90px] rounded-2xl p-4 flex items-center gap-4 transition-all cursor-pointer shadow-sm ${
            activeGame === "sudoku"
              ? "bg-[#2860C8] text-white shadow-md scale-[1.01]"
              : "bg-card border border-border/80 text-foreground hover:bg-secondary/60"
          }`}
        >
          <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
            <Puzzle className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-heading text-base font-bold">Sudoku</h3>
            <p className="text-xs text-muted-foreground">Fill the 9×9 grid.</p>
          </div>
        </div>
      </div>

      {/* ========================================== */}
      {/* 3. MORE GAMES BUTTON                       */}
      {/* ========================================== */}
      <div className="w-full flex justify-center mb-8">
        <div className="h-11 px-8 rounded-xl bg-secondary/60 border border-border/70 text-foreground text-xs font-semibold flex items-center justify-center shadow-sm">
          More games coming soon!
        </div>
      </div>

      {/* ========================================== */}
      {/* 4. CHESS GAME PANEL CONTAINER               */}
      {/* ========================================== */}
      <div className="w-full rounded-2xl bg-card border border-border/80 shadow-md p-6 flex flex-col items-center">
        {/* Upper Controls Row */}
        <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6 pb-4 border-b border-border/40">
          <div>
            <p className="text-sm font-semibold text-foreground">
              You are <strong className="text-foreground">White</strong>. Buddy AI is <strong className="text-foreground">Black</strong>.
            </p>
            <p className="text-xs text-muted-foreground mt-0.5">
              Turn: <span className="font-bold text-primary capitalize">{turn}</span>
            </p>
          </div>

          {/* Buttons: Play White | Play Black | Reset board */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => {
                setPlayerColor("white");
                resetBoard();
              }}
              className={`h-10 px-4 rounded-xl text-xs font-bold transition-all shadow-sm cursor-pointer ${
                playerColor === "white"
                  ? "bg-[#2860C8] text-white"
                  : "bg-secondary text-foreground hover:bg-secondary/80"
              }`}
            >
              Play White
            </button>

            <button
              onClick={() => {
                setPlayerColor("black");
                resetBoard();
              }}
              className={`h-10 px-4 rounded-xl text-xs font-bold transition-all shadow-sm cursor-pointer ${
                playerColor === "black"
                  ? "bg-[#2860C8] text-white"
                  : "bg-secondary text-foreground hover:bg-secondary/80"
              }`}
            >
              Play Black
            </button>

            <button
              onClick={resetBoard}
              className="h-10 px-4 rounded-xl bg-[#2860C8] text-white text-xs font-bold hover:opacity-90 transition-all shadow-sm flex items-center gap-1.5 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset board</span>
            </button>
          </div>
        </div>

        {/* ========================================== */}
        {/* CHESS BOARD (8x8 Grid, Warm Brown & Yellow) */}
        {/* ========================================== */}
        <div className="w-[min(100%,600px)] aspect-square rounded-2xl border-4 border-[#8B5A2B] overflow-hidden shadow-2xl grid grid-cols-8 grid-rows-8">
          {board.map((row, r) =>
            row.map((piece, c) => {
              const isDarkSquare = (r + c) % 2 === 1;
              const isSelected = selectedSquare?.r === r && selectedSquare?.c === c;

              return (
                <div
                  key={`${r}-${c}`}
                  onClick={() => handleSquareClick(r, c)}
                  className={`w-full h-full flex items-center justify-center text-3xl md:text-4xl font-bold cursor-pointer transition-all ${
                    isDarkSquare ? "bg-[#C98952]" : "bg-[#FFE68A]"
                  } ${isSelected ? "ring-4 ring-blue-500 z-10 scale-95" : ""}`}
                >
                  <span className="drop-shadow-sm select-none">{piece}</span>
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* ========================================== */}
      {/* 5. FLOATING CHAT BOT BUTTON                */}
      {/* ========================================== */}
      <button className="fixed bottom-8 right-[23vw] w-14 h-14 rounded-full bg-card border border-border/80 shadow-2xl flex items-center justify-center text-primary hover:scale-110 transition-transform z-40 cursor-pointer">
        <Sparkles className="w-6 h-6 text-primary animate-pulse" />
      </button>
    </div>
  );
}