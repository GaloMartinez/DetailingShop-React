import './index.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
 
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<ItemListContainer greeting={'Bienvenidos a nuestro shop online'}/>}/>
        <Route exact path="/category/:categoryId" element={<ItemListContainer/>}/>
        <Route exact path="/item/:itemId" element={<ItemDetailContainer/>}/>
        <Route exact path="*" element={<h1>NOT FOUND</h1>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
