import React from 'react';
import { Trophy, RefreshCw } from 'lucide-react';

export default function ResultsScreen({ score, total, onReset }) {
  const percentage = total > 0 ? Math.round((score / total) * 100) : 0;
  const isWin = percentage >= 60; // responder el 60% de las preguntas te hace ganar

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-[2.5rem] shadow-2xl max-w-sm w-full text-center relative overflow-hidden">
        
        {/*confeti de fondo*/}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle,_rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[length:20px_20px] opacity-50"></div>

        <div className="relative z-10">
          <div className="flex justify-center mb-6 transform hover:scale-110 transition-transform duration-500">
            <Trophy 
              size={80} 
              className={isWin ? "text-yellow-400 drop-shadow-[0_0_15px_rgba(250,204,21,0.5)]" : "text-gray-400"} 
              fill={isWin ? "currentColor" : "none"} 
            />
          </div>
          
          <h2 className="text-4xl font-black text-white mb-2 tracking-tight">
            {isWin ? "¡GANASTE!" : "INTÉNTALO DE NUEVO"}
          </h2>
          
          <div className="bg-slate-800/80 rounded-2xl p-6 mb-8 mt-6 border border-white/10 shadow-inner">
            <div className="text-xs text-blue-300 uppercase tracking-widest mb-2 font-bold">Tu Puntaje</div>
            <div className="flex items-baseline justify-center gap-2">
              <span className={`text-6xl font-black ${isWin ? 'text-green-400' : 'text-white'}`}>{score}</span>
              <span className="text-2xl text-slate-500 font-bold">/ {total}</span>
            </div>
          </div>

          <button 
            onClick={onReset} 
            className="w-full bg-blue-600 hover:bg-blue-500 border-b-4 border-blue-800 hover:border-blue-700 text-white font-black py-4 px-6 rounded-2xl transition-all active:border-b-0 active:translate-y-1 flex items-center justify-center gap-3"
          >
            <RefreshCw size={24} className="animate-spin-slow" /> 
            JUGAR OTRA VEZ
          </button>
        </div>
      </div>
    </div>
  );
}