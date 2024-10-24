import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './components/pages/Home';
import { Login } from './components/pages/Login';
import { QuizGameTranslate } from './components/pages/QuizGameTranslate';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/login/' element={<Login />} />
          <Route path='/quizgametranslate' element={<QuizGameTranslate />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
