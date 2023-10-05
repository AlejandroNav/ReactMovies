import { useState } from 'react';
import './App.css';
import Menu from './Menu';
import Movies from './Movies';
import Options from './Options';
//App está actuando como el controlador central de los datos, y está pasando funciones
// y estados a sus componentes hijos para que puedan interactuar entre ellos.
function App() {
  const [movies, setMovies] = useState([{ title: 'Vertigo', date: '1958' }, { title: 'Batman', date: '1999' }]);

  return (
    <div className="App" >
      <header className="App-header" >
        <Menu />
      </header>
      <section className="App-section" >
        <Options onSetMovies={setMovies} />
      </section>
      <main className="App-main" >
        <Movies titles={movies} />
      </main>
    </div>
  );
}

export default App;