import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './Components/Home';
import Portfolio from './Components/Portfolio/Portfolio';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
      </Routes>
  </BrowserRouter>
  );
}

export default App;
