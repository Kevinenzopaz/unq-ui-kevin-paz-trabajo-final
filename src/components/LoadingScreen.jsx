import React from 'react';
import { Loader2 } from 'lucide-react';

export default function LoadingScreen() {
  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center text-white gap-4">
      <Loader2 className="h-16 w-16 animate-spin text-green-400" />
      <p className="text-white font-bold text-xl animate-pulse">Cargando Preguntados...</p>
    </div>
  );
}