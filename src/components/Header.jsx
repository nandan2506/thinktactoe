import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="w-full bg-[#0f2027] text-white shadow-lg p-4 flex justify-between items-center sticky top-0 z-50 border-b border-white/10">
      <h1 className="text-2xl font-extrabold tracking-wide drop-shadow-md">
        🎮 Tic Tac Toe
      </h1>

      <div className="space-x-3 flex items-center">
        <button
          onClick={() => navigate("/")}
          className="bg-white text-[#0f2027] px-4 py-1.5 rounded-full font-semibold shadow-md hover:bg-gray-100 hover:scale-105 transition"
        >
          Home
        </button>

        <button
          onClick={() => navigate("/about")}
          className="bg-white text-[#0f2027] px-4 py-1.5 rounded-full font-semibold shadow-md hover:bg-gray-100 hover:scale-105 transition"
        >
          About
        </button>
      </div>
    </header>
  );
}
