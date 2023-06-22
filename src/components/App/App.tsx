import { Icon } from '@iconify-icon/react';
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
    </div>
  );
}

export default App;
