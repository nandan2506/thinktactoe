import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Board() {
  const initialState = () => Array(9).fill(null);
  const navigate = useNavigate();

  const p1 = localStorage.getItem("p1");
  const p2 = localStorage.getItem("p2");

  const [isXturn, setXturn] = useState(true);
  const [board, setBoard] = useState(initialState);
  const [winner, setWinner] = useState("");
  const [score1, setscore1] = useState(0);
  const [score2, setscore2] = useState(0);

  useEffect(() => {
    if (!p1 || !p2) {
      navigate("/");
    }
  }, [p1, p2, navigate]);

  const winning_pairs = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkWinner = (board) => {
    for (let [a, b, c] of winning_pairs) {
      if (board[a] && board[a] === board[b] && board[c] === board[b]) {
        if (board[a] === "X") {
          setWinner("X");
          setscore1((prev) => prev + 1);
        } else {
          setWinner("O");
          setscore2((prev) => prev + 1);
        }
        return true;
      }
    }
    if (!board.includes(null)) {
      setWinner("Draw");
      return true;
    }
    return null;
  };

  const handleClick = (i) => {
    if (!p1 || !p2) navigate("/");
    if (winner || board[i]) return;

    const newBoard = [...board];
    newBoard[i] = isXturn ? "X" : "O";
    setBoard(newBoard);
    setXturn(!isXturn);

    const gotWinner = checkWinner(newBoard);
    if (gotWinner) {
      setTimeout(() => {
        setBoard(initialState());
        setWinner("");
        setXturn(true);
      }, 1500);
    }
  };

  const resetGame = () => {
    setBoard(initialState());
    setWinner("");
    setXturn(true);
  };

  const startOver = () => {
    setBoard(initialState());
    setWinner("");
    setscore1(0);
    setscore1(0);
    setXturn(true);
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] p-4">
      <div className="w-full max-w-4xl space-y-6">
        
        {/* Game & Control Panel */}
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 justify-center items-center">
          {/* Control Panel */}
          <div className="bg-white p-6 rounded-2xl shadow-xl w-full md:max-w-sm space-y-4 text-center">
            <button
              onClick={resetGame}
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 rounded-full transition"
            >
              🔄 Reset Game
            </button>

            <div className="bg-gray-100 p-3 rounded-full flex justify-center items-center space-x-2">
              <p className="text-gray-700 font-medium">🏆 Current Winner:</p>
              <span className="text-green-600 text-xl font-bold">{winner}</span>
            </div>

            <button
              onClick={startOver}
              className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 rounded-full transition"
            >
              ♻️ Start Over
            </button>
          </div>

          {/* Game Board */}
          <div className="grid grid-cols-3 gap-3">
            {board.map((e, index) => (
              <button
                key={index}
                onClick={() => handleClick(index)}
                disabled={e !== null || winner}
                className={`w-24 h-24 md:w-32 md:h-32 text-4xl font-bold rounded-xl shadow-md bg-white hover:scale-105 transition-transform duration-200
                ${
                  e === "X"
                    ? "text-indigo-600"
                    : e === "O"
                    ? "text-pink-600"
                    : ""
                }
                ${e ? "cursor-not-allowed opacity-70" : ""}`}
              >
                {e}
              </button>
            ))}
          </div>
        </div>

        {/* Scoreboard */}
        <div className="flex justify-between items-center space-x-6">
          <div
            className={`flex-1 bg-white p-4 rounded-xl shadow-lg text-center ${
              isXturn ? "ring-4 ring-green-400" : ""
            }`}
          >
            <h2 className="text-xl font-bold text-indigo-700">{p1} (❌)</h2>
            <p className="text-3xl font-extrabold text-gray-800">{score1}</p>
          </div>

          <div
            className={`flex-1 bg-white p-4 rounded-xl shadow-lg text-center ${
              !isXturn ? "ring-4 ring-green-400" : ""
            }`}
          >
            <h2 className="text-xl font-bold text-pink-600">{p2} (⭕)</h2>
            <p className="text-3xl font-extrabold text-gray-800">{score2}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
