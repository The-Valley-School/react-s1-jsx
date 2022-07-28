import './App.css';

function App() {
  const name = "Perico el de los palotes";
  const hour = 9;

  return (
    <>
      <h1>Hola!</h1>
      <p className="sample">Esto es un ejemplo</p>
      <p>Mi nombre es: {name}</p>
      <p>La suma de 100 y 371 es: {100 + 371}</p>
      { hour > 12 ? <p>Buenas tardes!</p> : <p>Buenos días!</p> }
    </>
  );
}

export default App;
