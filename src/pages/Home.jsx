import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";

export default function Home() {
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [err, setErr] = useState(false);
  const [errMessage, setErrMessage] = useState("");

  const navigate = useNavigate();

  const handleStart = () => {
    if (!player1 || !player2) {
      setErrMessage("Please enter both player names.");
      setErr(true);
      return;
    } else if (player1.toLowerCase() === player2.toLowerCase()) {
      setErrMessage("Both the names can't be same");
      setErr(true);
      return;
    }

    localStorage.setItem("p1", player1);
    localStorage.setItem("p2", player2);
    setErr(false);
    navigate("/play");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] px-4">
      <div className="bg-white p-8 rounded-3xl shadow-2xl text-center max-w-md w-full space-y-6">
        <h1 className="text-4xl drop-shadow-md font-extrabold text-[#0f2027]">Tic Tac Toe</h1>
        <p className="text-gray-600 text-base">
          Challenge a friend and see who wins! Enter your names and start playing.
        </p>

        <div className="space-y-4">
          <div className="flex items-center border-2 border-gray-300 rounded-full px-4 py-2 focus-within:ring-2 focus-within:ring-indigo-400 transition">
            <FaUser className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Player 1 Name"
              className="w-full outline-none bg-transparent text-gray-800 placeholder-gray-400"
              onChange={(e) => setPlayer1(e.target.value)}
            />
          </div>

          <div className="flex items-center border-2 border-gray-300 rounded-full px-4 py-2 focus-within:ring-2 focus-within:ring-pink-400 transition">
            <FaUser className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Player 2 Name"
              className="w-full outline-none bg-transparent text-gray-800 placeholder-gray-400"
              onChange={(e) => setPlayer2(e.target.value)}
            />
          </div>

          {err && (
            <p className="text-sm text-red-600 font-medium text-left">
              {errMessage}
            </p>
          )}
        </div>

        <button
          className="bg-teal-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-teal-700 transition active:scale-95 w-full"
          onClick={handleStart}
        >
          Start Game
        </button>
      </div>
    </div>
  );
}
