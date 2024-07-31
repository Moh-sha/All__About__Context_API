import React, { useContext } from 'react';
import { Context_Category, ContextApi } from '../../App';

const Shipment = (props) => {
    
     const [catergory,setCategory] = useContext(Context_Category);
     
    return (
        <div>
             <h1>this is : {catergory}</h1>
             <button onClick={() => setCategory(catergory + 1)}>Increment</button>
        </div>
    );
};

export default Shipment;