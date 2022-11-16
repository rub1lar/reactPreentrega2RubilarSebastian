import React from 'react'
import { useState, useEffect } from 'react'


export default function ItemCount({ stock, initial, funcion, producto}) {
    const [value, setValue] = useState(initial);

    function onAdd() {
        (stock) > value ? setValue(value + 1) : setValue(value + 0);
    }

    function onSubstract() {
        value > 1 ? setValue(value - 1) : setValue(value + 0);
    }

    useEffect(() => {
        funcion(value, producto);
      
    }, [value])
    
    
    return (
        <div className="invert">
            <div className='flex justify-center my-4'>
                <button className="fill-white h-8 w-7 p-1 hover:bg-slate-700 rounded-full mx-3" onClick={onSubstract}>sustraer</button>
                <h1 >{value}</h1>
                <button onClick={onAdd}>adderir</button>
            </div>

        </div>
    );

}