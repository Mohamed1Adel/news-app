
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Button from '@mui/material/Button';
import Home from './components/homeComponent/home';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={<Home />}

      />

    </Routes>
  </BrowserRouter>


  );
}

export default App;
