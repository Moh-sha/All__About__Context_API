import React, { useContext, useState } from 'react';
import { Context_Category, ContextApi } from '../../../App';

const Header = (props) => {
    
    const [count,setcount] = useContext(Context_Category);
   


  return (
        <div>
             
            <h1>This is Header {count} </h1>
        
            <button onClick={() => setcount('Laptop')}>Laptop</button>
            <button onClick={() => setcount('Mobile')}>Mobile</button>
            <button onClick={() => setcount('Camera')}>PC</button>
        </div>
    );
};

export default Header;