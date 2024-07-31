/* eslint-disable react/jsx-pascal-case */
import React, { createContext } from 'react';
import './App.css';
import Home from './Component/Shipment/Home';
import Shipment from './Component/Shipment/Shipment';
import Header from './Component/Shipment/Header/Header';
import { useState } from 'react';
import Category from './Component/Shipment/Category/Category';


export const Context_Category = createContext();
export const ContextApi = createContext();


function App() {
  const [count , setCount] = useState('Laptop');
  
  //Common state app js 
  return (
    
          <Context_Category.Provider value={[count,setCount]}>

               <Header></Header>
               <Home></Home>
               <Shipment>This is shipment : </Shipment>
               

          </Context_Category.Provider>
      
           
  );
}

export default App;
