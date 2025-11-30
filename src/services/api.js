const API_BASE = "https://preguntados-api.vercel.app/api";

export const triviaService = {

  getDifficulties: async () => {
    try {
      const res = await fetch(`${API_BASE}/difficulty`);
      if (!res.ok) throw new Error("Error al obtener dificultades");
      return await res.json();
    } catch (error) {
      console.error("Service Error:", error);
      return ["easy", "medium", "hard"];
    }
  },

  getQuestions: async (difficulty) => {
    try {
      const res = await fetch(`${API_BASE}/questions?difficulty=${difficulty}`);
      if (!res.ok) throw new Error("Error al obtener preguntas");
      
      const rawData = await res.json();
      
      return rawData.map(item => ({
        id: item.id, 
        question: item.question,
        category: difficulty,
        options: [
          { key: 'option1', text: item.option1 },
          { key: 'option2', text: item.option2 },
          { key: 'option3', text: item.option3 },
          { key: 'option4', text: item.option4 }
        ].filter(opt => opt.text) 
      }));
    } catch (error) {
      console.error("Service Error:", error);
      return []; 
    }
  },

  postAnswer: async (questionId, optionKey) => {
    try {
      const res = await fetch(`${API_BASE}/answer`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          questionId: questionId, 
          option: optionKey 
        })
      });

      const data = await res.json();

      if (!res.ok) throw new Error("Error en la respuesta de la API");

      if (typeof data.answer === 'boolean') return data.answer;
      
      return false;
    } catch (error) {
      console.error("Service Error (postAnswer):", error);
      return false;
    }
  }
};