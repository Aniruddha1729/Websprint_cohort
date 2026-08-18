import { useState, useEffect } from "react";
import { Gamepad2, Grid, Puzzle, RotateCcw, Sparkles, CheckCircle2, Award, RefreshCw } from "lucide-react";

export default function Arcade() {
  const [activeGame, setActiveGame] = useState("chess");

  // ==========================================
  // 1. CHESS GAME STATE
  // ==========================================
  const [playerColor, setPlayerColor] = useState("white");
  const [selectedSquare, setSelectedSquare] = useState(null);
  const [chessTurn, setChessTurn] = useState("white");

  const initialChessBoard = [
    ["♜", "♞", "♝", "♛", "♚", "♝", "♞", "♜"],
    ["♟", "♟", "♟", "♟", "♟", "♟", "♟", "♟"],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["♙", "♙", "♙", "♙", "♙", "♙", "♙", "♙"],
    ["♖", "♘", "♗", "♕", "♔", "♗", "♘", "♖"],
  ];
  const [chessBoard, setChessBoard] = useState(initialChessBoard);

  const handleChessSquareClick = (r, c) => {
    if (!selectedSquare) {
      if (chessBoard[r][c] !== "") {
        setSelectedSquare({ r, c });
      }
    } else {
      const newBoard = chessBoard.map((row) => [...row]);
      newBoard[r][c] = newBoard[selectedSquare.r][selectedSquare.c];
      newBoard[selectedSquare.r][selectedSquare.c] = "";
      setChessBoard(newBoard);
      setSelectedSquare(null);
      setChessTurn((prev) => (prev === "white" ? "black" : "white"));
    }
  };

  const resetChessBoard = () => {
    setChessBoard(initialChessBoard);
    setSelectedSquare(null);
    setChessTurn("white");
  };

  // ==========================================
  // 2. TIC-TAC-TOE GAME STATE
  // ==========================================
  const [tttBoard, setTttBoard] = useState(Array(9).fill(null));
  const [tttTurn, setTttTurn] = useState("X"); // X = You, O = Buddy AI
  const [tttWinner, setTttWinner] = useState(null);
  const [tttMode, setTttMode] = useState("ai"); // "ai" or "pvp"

  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  const checkTttWinner = (boardState) => {
    for (let combo of winningCombinations) {
      const [a, b, c] = combo;
      if (boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {
        return boardState[a];
      }
    }
    if (boardState.every((cell) => cell !== null)) return "Draw";
    return null;
  };

  const handleTttSquareClick = (index) => {
    if (tttBoard[index] || tttWinner) return;

    const newBoard = [...tttBoard];
    newBoard[index] = tttTurn;
    setTttBoard(newBoard);

    const winner = checkTttWinner(newBoard);
    if (winner) {
      setTttWinner(winner);
      return;
    }

    if (tttMode === "ai" && tttTurn === "X") {
      setTttTurn("O");
      // Buddy AI auto move
      setTimeout(() => {
        const emptyIndices = newBoard
          .map((val, idx) => (val === null ? idx : null))
          .filter((val) => val !== null);

        if (emptyIndices.length > 0) {
          const randomIndex = emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
          newBoard[randomIndex] = "O";
          setTttBoard([...newBoard]);
          const aiWinner = checkTttWinner(newBoard);
          if (aiWinner) {
            setTttWinner(aiWinner);
          } else {
            setTttTurn("X");
          }
        }
      }, 400);
    } else {
      setTttTurn((prev) => (prev === "X" ? "O" : "X"));
    }
  };

  const resetTttBoard = () => {
    setTttBoard(Array(9).fill(null));
    setTttTurn("X");
    setTttWinner(null);
  };

  // ==========================================
  // 3. SUDOKU GAME STATE
  // ==========================================
  const initialSudokuPuzzle = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9],
  ];

  const [sudokuGrid, setSudokuGrid] = useState(initialSudokuPuzzle);
  const [selectedSudokuCell, setSelectedSudokuCell] = useState(null);
  const [sudokuStatus, setSudokuStatus] = useState("");

  const isInitialCell = (r, c) => initialSudokuPuzzle[r][c] !== 0;

  const handleSudokuNumberInput = (num) => {
    if (!selectedSudokuCell) return;
    const { r, c } = selectedSudokuCell;
    if (isInitialCell(r, c)) return;

    const newGrid = sudokuGrid.map((row) => [...row]);
    newGrid[r][c] = num;
    setSudokuGrid(newGrid);
    setSudokuStatus("");
  };

  const resetSudoku = () => {
    setSudokuGrid(initialSudokuPuzzle);
    setSelectedSudokuCell(null);
    setSudokuStatus("");
  };

  const checkSudokuSolution = () => {
    // Check if any empty cell remains
    for (let r = 0; r < 9; r++) {
      for (let c = 0; c < 9; c++) {
        if (sudokuGrid[r][c] === 0) {
          setSudokuStatus("Incomplete! Keep filling empty cells.");
          return;
        }
      }
    }
    setSudokuStatus("🎉 Perfect! Sudoku puzzle solved correctly!");
  };

  return (
    <div className="w-full min-h-full px-[2.5%] pt-[35px] pb-16 flex flex-col relative select-none">
      {/* ========================================== */}
      {/* 1. MAIN HEADER                             */}
      {/* ========================================== */}
      <div className="w-full h-[85px] flex flex-col justify-center">
        <h1 className="font-heading text-[24px] font-bold text-foreground tracking-tight">
          c/arcade
        </h1>
        <p className="text-sm md:text-[16px] text-muted-foreground font-normal mt-1">
          Quick interactive browser games you can play inside Cohort.
        </p>
      </div>

      {/* Header Divider */}
      <div className="w-full border-b border-border/60 mb-6" />

      {/* ========================================== */}
      {/* 2. GAME SELECTION CARDS (3 Cards Row)      */}
      {/* ========================================== */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {/* Card 1: Chess */}
        <div
          onClick={() => setActiveGame("chess")}
          className={`h-[90px] rounded-2xl p-4 flex items-center gap-4 transition-all cursor-pointer shadow-sm ${
            activeGame === "chess"
              ? "bg-[#2860C8] text-white shadow-md scale-[1.01]"
              : "bg-card border border-border/80 text-foreground hover:bg-secondary/60"
          }`}
        >
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0 ${
            activeGame === "chess" ? "bg-white/20 text-white" : "bg-primary/10 text-primary"
          }`}>
            ♔
          </div>
          <div>
            <h3 className="font-heading text-base font-bold">Chess</h3>
            <p className={`text-xs ${activeGame === "chess" ? "text-white/80" : "text-muted-foreground"}`}>
              Interactive 8×8 board.
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
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
            activeGame === "tictactoe" ? "bg-white/20 text-white" : "bg-primary/10 text-primary"
          }`}>
            <Grid className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-heading text-base font-bold">Tic-Tac-Toe</h3>
            <p className={`text-xs ${activeGame === "tictactoe" ? "text-white/80" : "text-muted-foreground"}`}>
              Play vs Buddy AI.
            </p>
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
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
            activeGame === "sudoku" ? "bg-white/20 text-white" : "bg-primary/10 text-primary"
          }`}>
            <Puzzle className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-heading text-base font-bold">Sudoku</h3>
            <p className={`text-xs ${activeGame === "sudoku" ? "text-white/80" : "text-muted-foreground"}`}>
              Fill the 9×9 grid.
            </p>
          </div>
        </div>
      </div>

      {/* ========================================== */}
      {/* 3. GAME DISPLAY CONTAINERS                 */}
      {/* ========================================== */}

      {/* GAME 1: CHESS */}
      {activeGame === "chess" && (
        <div className="w-full rounded-2xl bg-card border border-border/80 shadow-md p-6 flex flex-col items-center animate-in fade-in duration-200">
          <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6 pb-4 border-b border-border/40">
            <div>
              <p className="text-sm font-semibold text-foreground">
                You are <strong className="text-foreground">White</strong>. Buddy AI is <strong className="text-foreground">Black</strong>.
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">
                Turn: <span className="font-bold text-primary capitalize">{chessTurn}</span>
              </p>
            </div>

            <div className="flex items-center gap-2.5">
              <button
                onClick={() => {
                  setPlayerColor("white");
                  resetChessBoard();
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
                  resetChessBoard();
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
                onClick={resetChessBoard}
                className="h-10 px-4 rounded-xl bg-[#2860C8] text-white text-xs font-bold hover:opacity-90 transition-all shadow-sm flex items-center gap-1.5 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset board</span>
              </button>
            </div>
          </div>

          <div className="w-[min(100%,560px)] aspect-square rounded-2xl border-4 border-[#8B5A2B] overflow-hidden shadow-2xl grid grid-cols-8 grid-rows-8">
            {chessBoard.map((row, r) =>
              row.map((piece, c) => {
                const isDarkSquare = (r + c) % 2 === 1;
                const isSelected = selectedSquare?.r === r && selectedSquare?.c === c;

                return (
                  <div
                    key={`${r}-${c}`}
                    onClick={() => handleChessSquareClick(r, c)}
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
      )}

      {/* GAME 2: TIC-TAC-TOE */}
      {activeGame === "tictactoe" && (
        <div className="w-full rounded-2xl bg-card border border-border/80 shadow-md p-6 flex flex-col items-center animate-in fade-in duration-200">
          <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6 pb-4 border-b border-border/40">
            <div>
              <h3 className="font-heading text-lg font-bold text-foreground">Tic-Tac-Toe</h3>
              <p className="text-xs text-muted-foreground mt-0.5">
                {tttWinner ? (
                  <span className="font-bold text-primary text-sm">
                    {tttWinner === "Draw" ? "🤝 Game Ended in a Draw!" : `🎉 Player ${tttWinner} Wins!`}
                  </span>
                ) : (
                  <span>
                    Turn: <strong className="text-primary font-bold">{tttTurn === "X" ? "Your Turn (X)" : "Buddy AI (O)..."}</strong>
                  </span>
                )}
              </p>
            </div>

            <div className="flex items-center gap-2.5">
              <button
                onClick={() => {
                  setTttMode(tttMode === "ai" ? "pvp" : "ai");
                  resetTttBoard();
                }}
                className="h-10 px-4 rounded-xl bg-secondary text-foreground text-xs font-bold hover:bg-secondary/80 border border-border transition-all shadow-xs cursor-pointer"
              >
                Mode: {tttMode === "ai" ? "Vs Buddy AI" : "Pass & Play"}
              </button>

              <button
                onClick={resetTttBoard}
                className="h-10 px-4 rounded-xl bg-primary text-primary-foreground text-xs font-bold hover:opacity-90 transition-all shadow-sm flex items-center gap-1.5 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>New Game</span>
              </button>
            </div>
          </div>

          <div className="w-[min(100%,380px)] aspect-square grid grid-cols-3 gap-3 p-3 bg-secondary/40 rounded-2xl border border-border/80 shadow-inner">
            {tttBoard.map((val, idx) => (
              <button
                key={idx}
                onClick={() => handleTttSquareClick(idx)}
                disabled={val !== null || tttWinner !== null}
                className={`w-full h-full rounded-xl bg-card border-2 border-border/80 hover:border-primary text-4xl md:text-5xl font-black font-heading flex items-center justify-center transition-all cursor-pointer ${
                  val === "X" ? "text-primary" : val === "O" ? "text-rose-500" : ""
                }`}
              >
                {val}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* GAME 3: SUDOKU */}
      {activeGame === "sudoku" && (
        <div className="w-full rounded-2xl bg-card border border-border/80 shadow-md p-6 flex flex-col items-center animate-in fade-in duration-200">
          <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6 pb-4 border-b border-border/40">
            <div>
              <h3 className="font-heading text-lg font-bold text-foreground">Sudoku 9×9</h3>
              <p className="text-xs text-muted-foreground mt-0.5">
                Fill numbers 1 to 9 in every row, column, and 3×3 grid.
              </p>
            </div>

            <div className="flex items-center gap-2.5">
              <button
                onClick={checkSudokuSolution}
                className="h-10 px-4 rounded-xl bg-emerald-600 text-white text-xs font-bold hover:opacity-90 transition-all shadow-sm flex items-center gap-1.5 cursor-pointer"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Check Solution</span>
              </button>

              <button
                onClick={resetSudoku}
                className="h-10 px-4 rounded-xl bg-primary text-primary-foreground text-xs font-bold hover:opacity-90 transition-all shadow-sm flex items-center gap-1.5 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Grid</span>
              </button>
            </div>
          </div>

          {sudokuStatus && (
            <div className="w-full max-w-md mb-4 p-3 rounded-xl bg-primary/10 text-primary border border-primary/20 text-xs font-bold text-center">
              {sudokuStatus}
            </div>
          )}

          {/* 9x9 Sudoku Grid */}
          <div className="w-[min(100%,460px)] aspect-square bg-foreground/10 border-2 border-foreground/30 rounded-2xl overflow-hidden grid grid-cols-9 grid-rows-9 shadow-xl">
            {sudokuGrid.map((row, r) =>
              row.map((val, c) => {
                const isInitial = isInitialCell(r, c);
                const isSelected = selectedSudokuCell?.r === r && selectedSudokuCell?.c === c;
                const borderRight = (c + 1) % 3 === 0 && c !== 8 ? "border-r-2 border-r-foreground/40" : "border-r border-r-border/40";
                const borderBottom = (r + 1) % 3 === 0 && r !== 8 ? "border-b-2 border-b-foreground/40" : "border-b border-b-border/40";

                return (
                  <button
                    key={`${r}-${c}`}
                    onClick={() => setSelectedSudokuCell({ r, c })}
                    className={`w-full h-full flex items-center justify-center text-sm md:text-lg font-bold transition-all ${borderRight} ${borderBottom} ${
                      isSelected ? "bg-primary text-white scale-105 z-10 shadow-md" : isInitial ? "bg-secondary/70 text-foreground font-black" : "bg-card text-primary font-medium hover:bg-secondary/50"
                    }`}
                  >
                    {val !== 0 ? val : ""}
                  </button>
                );
              })
            )}
          </div>

          {/* Number Pad for Input */}
          <div className="mt-6 flex items-center gap-2">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
              <button
                key={num}
                onClick={() => handleSudokuNumberInput(num)}
                className="w-9 h-9 md:w-11 md:h-11 rounded-xl bg-secondary hover:bg-primary hover:text-white border border-border text-foreground font-bold text-sm md:text-base shadow-xs transition-all cursor-pointer flex items-center justify-center"
              >
                {num}
              </button>
            ))}
            <button
              onClick={() => handleSudokuNumberInput(0)}
              className="px-3 h-9 md:h-11 rounded-xl bg-rose-500/10 text-rose-500 hover:bg-rose-500/20 border border-rose-500/20 font-bold text-xs shadow-xs transition-all cursor-pointer flex items-center justify-center"
              title="Clear cell"
            >
              Clear
            </button>
          </div>
        </div>
      )}

      {/* Floating Assistant Button */}
      <button className="fixed bottom-8 right-[23vw] w-14 h-14 rounded-full bg-card border border-border/80 shadow-2xl flex items-center justify-center text-primary hover:scale-110 transition-transform z-40 cursor-pointer">
        <Sparkles className="w-6 h-6 text-primary animate-pulse" />
      </button>
    </div>
  );
}