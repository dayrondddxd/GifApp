import React, { useState } from "react";
// import React from "react-dom/client"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = ()=>{

     const [categories,setCategories] = useState (['One Punch'])
     
     // const handleAdd=()=>{
     //      // setCategories([...categories,'HunterXHunter'])
     //      setCategories( cat => [...cat,'HunterXHunter'])
// }   
     

     return (
          <>
               <h2 className="h2">GifApp</h2>
               <AddCategory setCategories={ setCategories }/>
               <hr/>
               {/* <button onClick={handleAdd}>Add</button> */}
              
                   {/* {
                    categories.map(category => {
                         return <li key= { category } > { category } </li>
                    }) } */}
               <ol>
               { categories.map(category => 
              <GifGrid 
              key={category}
              category={category}/> 
              
               )}
                              
               </ol>
          </>
     )
} 