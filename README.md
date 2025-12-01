# Trabajo Final Integrador - Interfaces de Usuario (UNQ)

Este proyecto es una implementacion del juego Preguntados desarrollado en React como parte del Trabajo Final Integrador de la materia Interfaces de Usuario.


## Descripcion

El objetivo de la aplicacion es responder preguntas de trivia seleccionando previamente una dificultad. El juego consume una API externa proporcionada por la catedra para obtener las preguntas y validar las respuestas.

## Tecnologias Utilizadas

React (Vite): Libreria principal de UI.

Tailwind CSS: Para los estilos y diseño responsive.

Lucide React: Para los iconos de la interfaz.

Canvas Confetti: Efecto visual de celebracion.

Fetch API: Para la comunicacion con el backend.

## Instalacion y Ejecucion

Sigue estos pasos para correr el proyecto en tu entorno local.

Prerrequisitos

Tener instalado Node.js (version 16 o superior).
Tener instalado Git.

Paso 1: Clonar el repositorio

Abre tu terminal y ejecuta:

git clone [https://github.com/Kevinenzopaz/unq-ui-kevin-paz-trabajo-final.git](https://github.com/Kevinenzopaz/unq-ui-kevin-paz-trabajo-final.git)
cd unq-ui-kevin-paz-trabajo-final

Paso 2: Instalar dependencias

Instala las librerías necesarias (React, Tailwind, etc.) ejecutando:
npm install

Nota importante sobre versiones: Este proyecto utiliza especificamente TailwindCSS v3.4.17 para garantizar la compatibilidad con PostCSS. El comando npm install descargara automaticamente esta version correcta definida en el package.json, evitando conflictos conocidos con versiones posteriores (v4.0+).

Paso 3: Ejecutar el proyecto

Levanta el servidor de desarrollo con:
npm run dev


La consola te mostrara una URL (usualmente http://localhost:5173/). Abrela en tu navegador para comenzar a jugar.

## Estructura del Proyecto

El codigo fuente se encuentra en la carpeta /src y esta organizado de la siguiente manera:

/assets: Recursos estaticos (imagenes).

/components: Componentes de React reutilizables (Pantallas del juego).

/services: Logica de conexion con la API externa.

App.jsx: Orquestador principal de la aplicacion.

## Autor

Kevin Paz
Materia: Interfaces de Usuario - UNQ