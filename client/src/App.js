
import './App.css';
import Navbar from './components/Navbar/Navbar';
import About from "./components/About/About"
import { Services } from './components/services/Services';
import Newsletter from './components/Newsletter/Newsletter';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      < Navbar />
      < About />
      < Services />
      < Footer />

    </div>
          
  );
}

export default App;
