
import './App.css';
import Button from './Button';
import Game from './Game';
import Rando from './Rando';
function App() {
  return (
    <div className="App">
     <Rando maxNum={28} />
      <Game />
      <Button />
    </div>
   
  );
}

export default App;
