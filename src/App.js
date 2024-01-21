import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './navBar/NavBar';
import Home from './modules/Home';
import Product from './modules/Product';
import About from './modules/About';
import Contact from './modules/Contact';
import Footer from './footer/Footer';
import Process from './modules/Process';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/product' element={<Product />} />
          <Route exact path='/Process' element={<Process/>} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/contact' element={<Contact />} />
        </Routes>
        <Footer/>
      </BrowserRouter>

    </div>
  );
}

export default App;
