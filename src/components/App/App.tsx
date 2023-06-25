import './App.scss';
import Header from './Header/Header';
import Acceuil from './Acceuil/Acceuil';
import About from './about/about';
import Contact from './Contact/Contact';
import Experiences from './Experiences/Experiences';
import MesProjets from './MesProjets/MesProjets';

function App() {
  return (
    <div className="app">
      <Header />
      <Acceuil />
      <About />
      <Experiences />
      <MesProjets />
      <Contact />
    </div>
  );
}

export default App;
