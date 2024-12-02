import { useEffect } from "react";
import { useState } from "react";

 
const Items = () => {

    const[items,setItems] =useState([])
    useEffect(()=>
        {
            fetch('item.json')
            .then(res=>res.json())
            .then(data=> setItems(data))
        },[])
    return (
        <div className='md:w-2/3'>
            <h1>item : {items.length}</h1>
        </div>
    );
};

export default Items;