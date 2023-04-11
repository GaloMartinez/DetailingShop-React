

import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import NavBar from './Components/NavBar/NavBar';
import './index.css';
import ItemCount from './Components/ItemCount/ItemCount';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={'Bienvenido a nuestro shop online'} />
      <ItemCount initial={1} stock={10} onAdd={(quantity) => 
        console.log('Cantidad agregada', quantity)
        }/>
    </div>
  );
}

export default App;
