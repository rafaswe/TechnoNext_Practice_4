import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './Component/Navbar';
import Cart from './pages/Cart/Cart';
import Home from './pages/home/Home';


function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
