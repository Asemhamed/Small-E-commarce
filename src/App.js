import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar';
import Slider from './components/Slider';
import ProductList from './components/ProductList';
import About from './components/About';
import { Route, Routes } from 'react-router';
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/about" element={<About />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product/:id" element={<ProductDetails />}></Route>
      </Routes>
    </div>
  );
}

export default App;
