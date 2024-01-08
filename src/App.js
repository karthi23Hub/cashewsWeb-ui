import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './navBar/NavBar';
import Home from './modules/Home';
import Product from './modules/Product';
import Services from './modules/Services';
import About from './modules/About';
import Contact from './modules/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/product' element={<Product />} />
          <Route exact path='/services' element={<Services />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
