import React, {useState} from 'react'
import PropTypes from "prop-types";

export const AddCategory = ({setCategories})=>{
     
     const [inputValue,setInputValue] = useState('')

     const handleInputChange = (e) =>{
          setInputValue(e.target.value)
     }

     const handleSubmit = (e)=>{
          e.preventDefault()

          if(inputValue.trim().length > 2){
               setCategories( cat => [inputValue, ...cat])
               setInputValue('')
          }
          
     }

     return (
          <form onSubmit = {handleSubmit}>
             
               <input 
               className='input'
               type = 'text'
               value = {inputValue}
               onChange={ handleInputChange}/>
          </form>
     )
}

 
AddCategory.propTypes = {
     setCategories: PropTypes.func.isRequired
}
