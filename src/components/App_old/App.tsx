import './App.scss';
import Header from './Header/Header';
import Acceuil from './Acceuil/Acceuil';
import Experiences from './Experiences/Experiences';
import Contact from './Contact/Contact';

function App() {
  return (
    <div className="app">
      <Header />
      <Acceuil />
      <Experiences />
      <Contact />
    </div>
  );
}

export default App;
