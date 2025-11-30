import React, { useState, useEffect } from 'react';
import { triviaService } from './services/api';


import LoadingScreen from './components/LoadingScreen';
import MenuScreen from './components/MenuScreen';
import GameScreen from './components/GameScreen';
import ResultsScreen from './components/ResultsScreen';

export default function App() {

  const [view, setView] = useState('MENU');
  const [loading, setLoading] = useState(false);

  const [difficulties, setDifficulties] = useState([]);
  const [questions, setQuestions] = useState([]);
  
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState(null);

  useEffect(() => {
    triviaService.getDifficulties().then(setDifficulties);
  }, []);

  const handleStartGame = async (difficulty) => {
    setLoading(true);
    const data = await triviaService.getQuestions(difficulty);
    
    if (!data || data.length === 0) {
      alert("La API no tiene preguntas disponibles. Intenta más tarde.");
      setLoading(false);
      return; 
    }

    setQuestions(data);
    setCurrentQIndex(0);
    setScore(0);
    setFeedback(null);
    setView('PLAYING');
    setLoading(false);
  };

  const handleAnswer = async (optionKey) => {
    if (feedback) return; 
    
    const currentQ = questions[currentQIndex];
    
    try {
      const isCorrect = await triviaService.postAnswer(currentQ.id, optionKey);
      setFeedback({ selected: optionKey, isCorrect });
      if (isCorrect) setScore(s => s + 1);
    } catch (e) {
      setFeedback({ selected: optionKey, isCorrect: false });
    }

    //esperamos 2 segundos para mostrar el resultado visual antes de avanzar
    setTimeout(() => {
      if (currentQIndex + 1 < questions.length) {
        setCurrentQIndex(prev => prev + 1);
        setFeedback(null);
      } else {
        setView('RESULTS');
      }
    }, 2000);
  };

  const handleReset = () => {
    setView('MENU');
    setQuestions([]);
    setFeedback(null);
  };

  //renderizado condicional segun el estado view
  if (view === 'MENU') {
    return (
      <MenuScreen 
        difficulties={difficulties} 
        onStart={handleStartGame} 
        loading={loading} 
      />
    );
  }
  
  if (view === 'PLAYING') {
    if (!questions || questions.length === 0) return <LoadingScreen />;
    
    return (
      <GameScreen 
        question={questions[currentQIndex]} 
        total={questions.length} 
        current={currentQIndex} 
        onAnswer={handleAnswer} 
        feedback={feedback} 
        isChecking={!!feedback} 
      />
    );
  }

  if (view === 'RESULTS') {
    return (
      <ResultsScreen 
        score={score} 
        total={questions.length} 
        onReset={handleReset} 
      />
    );
  }

  return <LoadingScreen />;
}