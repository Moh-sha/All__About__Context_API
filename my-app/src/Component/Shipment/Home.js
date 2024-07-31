import React, { useContext } from 'react';
import Category from './Category/Category';
import { Context_Category } from '../../App';


const Home = (props) => {
      
    
        const catergory = useContext(Context_Category);    

    return (
        <div style={{border:'1px solid black'}}>
            <h1>This is Home {catergory}  </h1>
            <Category ></Category>
          
        </div>
    );
};

export default Home;