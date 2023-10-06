
import './App.css';
import Button from './Button';
import Game from './Game';
import Rando from './Rando';
import BrokenClick from './BrokenClick';
function App() {
  return (
    <div className="App">
     <Rando maxNum={28} />
      <Game />
      <Button />
      <BrokenClick />
    </div>
   
  );
}

export default App;
