import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './components/pages/Home';
import { Login } from './components/pages/Login';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/login/' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
