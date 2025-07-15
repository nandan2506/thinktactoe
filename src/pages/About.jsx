import React from "react";
import {
  FaGamepad,
  FaUserFriends,
  FaBrain,
  FaCode,
  FaGithub,
  FaEnvelope,
  FaLinkedinIn,
} from "react-icons/fa";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] flex items-center justify-center px-6 py-10 text-white">
      <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl shadow-xl max-w-4xl w-full text-center space-y-10">
        {/* Title */}
        <h1 className="text-4xl font-extrabold drop-shadow-md text-yellow-400">
          About This Game
        </h1>

        {/* Description */}
        <p className="text-lg text-white/90 leading-relaxed">
          🎮 Welcome to the ultimate browser-based{" "}
          <span className="font-bold text-yellow-300">Tic Tac Toe</span> game!
          Built with <span className="font-semibold text-pink-300">React</span>{" "}
          and styled using{" "}
          <span className="font-semibold text-teal-300">Tailwind CSS</span>,
          this game delivers a clean, responsive, and fun user experience.
        </p>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/20 p-4 rounded-xl space-y-2 shadow-lg hover:scale-105 transition">
            <FaGamepad size={32} className="mx-auto text-yellow-300" />
            <h3 className="font-bold text-xl text-white">Simple & Fun</h3>
            <p className="text-sm text-white/80">
              Classic 3x3 gameplay with a modern UI and real-time interaction.
            </p>
          </div>
          <div className="bg-white/20 p-4 rounded-xl space-y-2 shadow-lg hover:scale-105 transition">
            <FaUserFriends size={32} className="mx-auto text-pink-300" />
            <h3 className="font-bold text-xl text-white">2-Player Mode</h3>
            <p className="text-sm text-white/80">
              Enter names and challenge a friend  score is tracked
              automatically.
            </p>
          </div>
          <div className="bg-white/20 p-4 rounded-xl space-y-2 shadow-lg hover:scale-105 transition">
            <FaBrain size={32} className="mx-auto text-teal-300" />
            <h3 className="font-bold text-xl text-white">
              Smart Play (Coming Soon)
            </h3>
            <p className="text-sm text-white/80">
              Compete against an AI powered by the Minimax algorithm.
            </p>
          </div>
        </div>

        {/* Developer Section */}
        <div className="mt-10 text-left bg-white/20 p-6 rounded-2xl space-y-4 shadow-lg">
          <div className="flex items-center space-x-3">
            <FaCode size={24} className="text-yellow-300" />
            <h2 className="text-2xl font-bold text-white drop-shadow-sm">
              About the Developer
            </h2>
          </div>
          <p className="text-white/90">
            👋 Hi, I'm <span className="font-semibold text-white">Nandan</span>,
            a passionate MERN developer who loves building clean, interactive,
            and scalable web experiences. This Tic Tac Toe app was built using
            React, Tailwind CSS, and React Router to practice both UI/UX and
            game logic.
          </p>
          <p className="text-white/70">
            🚀 I'm currently exploring AI integrations and plan to add real
            intelligent opponents using Minimax and more.
          </p>

          {/* Contact */}
          <div className="flex items-center justify-center gap-6 mt-6 text-white text-base">
            <a
              href="mailto:thenandansingh1999@email.com"
              className="hover:text-yellow-300 flex items-center gap-2 transition"
            >
              <FaEnvelope /> <span>Email</span>
            </a>
            <a
              href="https://github.com/nandan2506"
              target="_blank"
              rel="noreferrer"
              className="hover:text-yellow-300 flex items-center gap-2 transition"
            >
              <FaGithub /> <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/nandan-singh-danu-125363343/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-yellow-300 flex items-center gap-2 transition"
            >
              <FaLinkedinIn /> <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Footer */}
        <p className="text-sm text-white/60 pt-6">
          © {new Date().getFullYear()} Nandan • Made with 💙 using React &
          Tailwind CSS
        </p>
      </div>
    </div>
  );
}
