
import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Home from './components/Home';
import Nav from "./components/Nav"
import Service from './components/Service';

function App() {
  return (
    <div className='App'>
      <Nav/>
      <Home/>
      <About/>
      <Service/>
      <Footer/>
    </div>
  );
}

export default App;
