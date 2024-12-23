import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './components/pages/Home';
import { Login } from './components/pages/Login';
import { QuizGameTranslate } from './components/pages/QuizGameTranslate';
import { CompletePhrase } from './components/pages/CompletePhrase';
import { ChooseImage } from './components/pages/ChooseImage';
import { TrueOrFalse } from './components/pages/TrueOrFalse';
import { TimerGame } from './components/pages/TimerGame';
import { TranslaterGame } from './components/pages/TranslaterGame';
import Class1Beginner from './components/pages/Class1Beginner';

import Storie1 from './components/pages/StoriesStudent/Storie1';


function App() {

  // App.js (ou outro arquivo JSX)
  // Detecta se o usuário está em iOS
  const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

  // Usa a variável correspondente dependendo do sistema operacional
  const systemConfig = isIOS ? import.meta.env.VITE_SYSTEM_IOS : import.meta.env.VITE_SYSTEM_ANDROID;

  console.log("Configuração do sistema:", systemConfig);


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/login' element={<Login />} />
          <Route path='/quizgametranslate' element={<QuizGameTranslate />} />
          <Route path='/CompletePhrase' element={<CompletePhrase />} />
          <Route path='/ChooseImage' element={<ChooseImage />} />
          <Route path='/TrueOrFalse' element={<TrueOrFalse />} />
          <Route path='/timergame' element={<TimerGame />} />
          <Route path='/translatergame' element={<TranslaterGame />} />
          <Route path='/Class1Beginner' element={<Class1Beginner />} />
          <Route path='/Storie1' element={<Storie1 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
