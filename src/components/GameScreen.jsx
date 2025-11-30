import React from 'react';
import { CheckCircle, XCircle, Loader2 } from 'lucide-react';

export default function GameScreen({ question, total, current, onAnswer, feedback, isChecking }) {
  if (!question) return <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">Cargando...</div>;
  
  const progress = ((current) / total) * 100;

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center p-4">
      {/*header progreso*/}
      <div className="w-full max-w-xl mt-6 mb-8">
        <div className="flex justify-between text-white text-sm font-black mb-3 uppercase tracking-wider">
          <span>Ronda {current + 1} / {total}</span>
          <span className="bg-blue-600 px-3 py-1 rounded-full text-xs">{question.category || "General"}</span>
        </div>
        <div className="h-6 w-full bg-slate-800 rounded-full overflow-hidden p-1 border border-slate-700">
          <div 
            className="h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full transition-all duration-500 shadow-[0_0_10px_rgba(74,222,128,0.5)]" 
            style={{ width: `${progress}%` }} 
          />
        </div>
      </div>

      {/*tarjeta de pregunta*/}
      <div className="w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col border-4 border-gray-200">
        <div className="bg-blue-500 p-8 text-center border-b-4 border-blue-600">
          <h2 className="text-2xl md:text-3xl font-black text-white leading-tight drop-shadow-md">
            {question.question}
          </h2>
        </div>

        <div className="p-6 flex flex-col gap-3 bg-slate-50">
          {question.options.map((optObj) => {
            let statusClass = "bg-white border-gray-300 text-gray-700 hover:bg-blue-50 hover:border-blue-400";
            let icon = <div className="w-6 h-6 rounded-full border-2 border-gray-300"></div>; 

            //visualizacion de respuesta correcta/incorrecta
            if (feedback) {
              if (feedback.selected === optObj.key) {
                if (feedback.isCorrect) {
                  statusClass = "bg-green-100 border-green-500 text-green-800 ring-2 ring-green-400";
                  icon = <CheckCircle className="text-green-600 fill-green-100" size={28} />;
                } else {
                  statusClass = "bg-red-100 border-red-500 text-red-800 ring-2 ring-red-400";
                  icon = <XCircle className="text-red-600 fill-red-100" size={28} />;
                }
              } else {
                statusClass = "opacity-40 grayscale border-gray-200";
              }
            }

            return (
              <button
                key={optObj.key}
                disabled={!!feedback || isChecking}
                onClick={() => onAnswer(optObj.key)}
                className={`group w-full p-4 rounded-2xl text-lg font-bold text-left transition-all duration-200 border-b-4 active:border-b-0 active:translate-y-1 flex justify-between items-center ${statusClass}`}
              >
                <span>{optObj.text}</span> 
                {icon}
              </button>
            );
          })}
        </div>
        
        {/*footer de feedback */}
        <div className="bg-gray-100 p-4 text-center h-20 border-t border-gray-200 flex items-center justify-center">
          {isChecking && <span className="text-blue-500 font-bold flex gap-2 items-center"><Loader2 className="animate-spin"/> Validando...</span>}
          
          {feedback?.isCorrect === true && (
            <div className="animate-bounce bg-green-500 text-white px-6 py-2 rounded-full font-black shadow-lg flex items-center gap-2">
              <CheckCircle fill="white" className="text-green-500" /> ¡CORRECTO!
            </div>
          )}
          
          {feedback?.isCorrect === false && (
            <div className="bg-red-500 text-white px-6 py-2 rounded-full font-black shadow-lg flex items-center gap-2">
              <XCircle fill="white" className="text-red-500" /> INCORRECTO
            </div>
          )}
        </div>
      </div>
    </div>
  );
}