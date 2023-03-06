
import Carrito from './Navbar/CartWidget';
import Listado from './Navbar/ItemListContainer';
import './App.css';

import Barra from './Navbar/Navbar';

function App() {
  return (
    <div className="App">
      
      <Barra><h1><Carrito Cantidad ='3'/></h1></Barra>
      <hr></hr>
      <Listado Mensaje='No hay elemento para mostrar '/>
    </div>
  );
}

export default App;
