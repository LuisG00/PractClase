import logo from './logo.svg';
import './App.css';
import Greetings from './components/Greetings';

function App() {
  const objeto ={
    grupo: ' 8vo A Informática',
    day: ' Viernes'
  }
  const saludo = (g) => {
    alert('Excelente día' + g)
}
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Greetings grupoInf={objeto} funcion = {saludo} />
      </header>
    </div>
  );
}

export default App;
