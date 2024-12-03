import { useEffect } from "react";
import { useState } from "react";
import Item from "../Item/Item";

 
const Items = () => {

    const[items,setItems] =useState([])
    useEffect(()=>
        {
            fetch('items.json')
            .then(res=>res.json())
            .then(data=> setItems(data))
        },[])
    return (
        <div className='md:w-2/3'>
            <h1>item : {items.length}</h1>
            <div className='grid grid-cols-2 gap-5'>
            {
                items.map(item => <Item  key={item.recipe_id}item={item}></Item>)
            }
            </div>
        </div>
    );
};

export default Items;