import { NavLink } from 'react-router-dom'

 function Item (props) {

    return (
        <div className='card md:mx-5 my-5'>
            <div className="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 ">
                    <img src={props.img} alt="product image" />
                <div className="px-5 pb-5">
             
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{props.nombre}</h5>
        
                    <div className="flex justify-between items-center">
                        <span >{props.valor}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <NavLink to = {`/${props.categoria}/${props.id}`} >Mas Detalles!</NavLink> 
                    </div>
                </div>
            </div>

        </div>

    )

}
export default Item;