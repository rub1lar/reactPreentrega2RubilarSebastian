
import Navbarra from "./componentes/NavBar/navComponente";
import  "./componentes/NavBar/nav.css";
import ItemList from  "./componentes/ItemListContainer/ItemListContainer";
import './componentes/ItemListContainer/Item.css';
import "./componentes/CartWidget/carrito.css"
import Carrousell from "./componentes/Carrousell"
import Bienvenida from  "./componentes/Bienvenida/Bienvenida";
import './componentes/Bienvenida/bienvenida.css';

function App() {
  return (
    <div>
      <div className="bienvenida">
     <Bienvenida  bienvenida="Bienvenidos A NoMercy!" description="seccion0"/> 
      </div>
    <div>
    <Navbarra/>
    </div>

    <div>
<Carrousell/>
    </div>
    <ItemList title="seccion item" description="seccion"/> 
    </div>
  );
}
export default App;