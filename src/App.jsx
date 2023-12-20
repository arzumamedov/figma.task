import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import MainLayout from './layout/MainLayout';
import Home from "./pages/Home";
import Basket from "./pages/Basket";
function App() {

  return (
    <>
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/basket" element={<Basket />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
