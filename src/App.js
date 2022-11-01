
import Navbarra from "./componentes/NavBar/navComponente";
import  "./componentes/NavBar/nav.css";
import ItemList from  "./componentes/ItemListContainer/ItemListContainer";
import './componentes/ItemListContainer/Item.css';
import "./componentes/CartWidget/carrito.css"
import Carrousell from "./componentes/Carrousell"
import Bienvenida from  "./componentes/Bienvenida/Bienvenida";
import './componentes/Bienvenida/bienvenida.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ItemDetailContainer from "./componentes/Items/ItemDetailContainer";
import Footer from "./componentes/footer/Footer";

function App() {
  return (

    <>
    <BrowserRouter>
           <div className="bienvenida">
          <Bienvenida  bienvenida="Bienvenidos A NoMercy!" description="seccion0"/> 
            </div>

            <Navbarra/><Carrousell/>
      <Routes>
      <Route path="/" element={<ItemList/>} />
      <Route path="/categoria/:productoid" element={<ItemDetailContainer/>}/>
      </Routes>
    
<Footer/>
    </BrowserRouter>

    </>

  );
}
export default App;