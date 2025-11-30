import React from 'react';
import { Play, Loader2 } from 'lucide-react';
import logoImg from '../assets/logo.png';

export default function MenuScreen({ difficulties, onStart, loading }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-purple-600 flex flex-col items-center justify-center p-4">
      <div className="bg-white/20 backdrop-blur-md p-8 rounded-[3rem] shadow-2xl max-w-md w-full border-4 border-white/30">
        
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img 
            src={logoImg} 
            alt="Logo Preguntados"
            className="w-64 drop-shadow-2xl hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="bg-white/10 rounded-xl p-4 mb-6 text-center">
          <h2 className="text-white font-bold text-lg tracking-widest uppercase">PREGUNTADOS</h2>
          <p className="text-blue-100 text-sm">Selecciona una dificultad</p>
        </div>

        <div className="space-y-4">
          {loading ? (
            <div className="flex justify-center p-4">
              <Loader2 className="animate-spin text-white h-8 w-8" />
            </div>
          ) : (
            difficulties.map((diff) => (
              <button
                key={diff}
                onClick={() => onStart(diff)}
                className="group w-full bg-white hover:bg-green-400 border-b-4 border-gray-200 hover:border-green-600 text-gray-700 hover:text-white font-black text-xl py-4 px-6 rounded-2xl transition-all active:border-b-0 active:translate-y-1 flex items-center justify-between capitalize"
              >
                <span>{diff}</span>
                <Play size={28} className="text-gray-400 group-hover:text-white" fill="currentColor" />
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
}