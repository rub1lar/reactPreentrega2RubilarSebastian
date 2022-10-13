
import Navbarra from "./componentes/NavBar/navComponente";
import  "./componentes/NavBar/nav.css";
import ItemList from  "./componentes/ItemListContainer/ItemListContainer";
import './componentes/ItemListContainer/Item.css';



function App() {
  return (
    <div>
    <div>
    <Navbarra/>
    </div>
    <ItemList title="seccion item" bienvenida="Bienvenidos A NoMercy!" description="seccion"/> 
    </div>
  );
}
export default App;