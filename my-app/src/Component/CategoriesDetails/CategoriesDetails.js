import React, { useContext } from 'react';
import { Context_Category } from '../../App';
 



const CategoriesDetails = (props) => {
       
    const {name} = props.product;
    return (
        <div>
             <h1>This is catergories Details : {name} </h1>
        </div>
    );
};

export default CategoriesDetails;