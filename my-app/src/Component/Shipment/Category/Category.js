import React, { useContext, useEffect, useState } from 'react';
import CategoriesDetails from '../../CategoriesDetails/CategoriesDetails';
import { Context_Category } from '../../../App';

const All_Product = [{name : 'Asus ', category : 'Laptop'} ,{name : 'HP ', category : 'Laptop'},{name : 'MSI ', category : 'Laptop'}
    ,{name : 'Iphone ', category : 'Mobile'},{name : 'Samsung ', category : 'Mobile'},{name : 'Nokia ', category : 'Mobile'} , 
    {name : 'Nikon', category : 'Camera'} , {name : 'Canon ', category : 'Camera'},{name : 'fluji', category : 'Camera'}   

]

const Category = (props) => {
 
     const [catergory] = useContext(Context_Category);
    const [Product, SetProduct] =useState([]);

    useEffect(()=>
   {

     const matchproducts = All_Product.filter(pd => pd.category === catergory && catergory.toLowerCase());
     SetProduct(matchproducts);
   },[catergory])
    return (
        <div>
             <h1>This is Category </h1>
             {

                 Product.map(pd=> <CategoriesDetails product={pd}></CategoriesDetails>)
             }
        </div>
    );
};

export default Category; 