import React from "react"
import imagenfoo from "./footer.png"
import imagenfoo2 from "./666.webp"

const Footer = () => <footer className="page-footer font-small  ">

  
    <div className="container-fluid text-center text-md-left bg-dark text-white ">
            <img className="w-90" src ={imagenfoo2} alt=""></img>
        <div className="row">
            <div className="col-md-6 mt-md-0">
                <h5 className="text-uppercase pt-3">NoMercy</h5>
                <p>La Mejor Ropa Dark Gothic Esta Aca!</p>
            <img className="w-20" src ={imagenfoo} alt=""></img>
            </div>
 
            <hr className="clearfix w-100 d-md-none pb-0"/>
            <div className="col-md-3 mb-md-0">
                <h5 className="text-uppercase  pt-3">Que Buscas?</h5>
                <ul className="list-unstyled text-decoration-none ">
                    <li><a className=" text-decoration-none text-white" href="#!">ROPA</a></li>
                    <li><a className=" text-decoration-none text-white" href="#!">ZAPATILLAS</a></li>
                    <li><a className=" text-decoration-none text-white" href="#!">ACCESORIOS</a></li>
                    <li><a className=" text-decoration-none text-white" href="#!">CONTACTO</a></li>
                </ul>

            </div>
       

        </div>
    </div>

    <div className=" text-center py-3 bg-dark text-white">© 2022 Copyright:
        <p >   Desarrollado Por: Sebastian Ariel </p>
    </div>

</footer>

export default Footer