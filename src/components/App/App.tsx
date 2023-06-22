import './App.scss';
import Header from './Header/Header';
import Acceuil from './Acceuil/Acceuil';
import Experiences from './Experiences/Experiences';

function App() {
  return (
    <div className="app">
      <Header />
      <Acceuil />
      <Experiences />
    </div>
  );
}

export default App;
