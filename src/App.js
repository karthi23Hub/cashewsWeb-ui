import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './navBar/NavBar';
import Home from './modules/Home';
import CashewProduct from './modules/CashewProduct';
import About from './modules/About';
import Contact from './modules/Contact';
import Footer from './footer/Footer';




function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <CashewProduct/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
