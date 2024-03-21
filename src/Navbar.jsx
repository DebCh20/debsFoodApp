import React, { useEffect } from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useContext } from 'react';
import recipeDataContext from './context/recipedatacontext'

// import './output.css'
function Navbar() {
  const navigate = useNavigate();
  let [query, setQuery]= useState('')
  
  let contextData = useContext(recipeDataContext)

  const searchRecipe= () => {    
    setQuery(document.querySelector('.searchBar').value);
    navigate(`/findRecipe/${query}`);
  };  
 
  useEffect(()=>{
     const fetchRecipe = async ()=>{
      const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=6b734143b21846be87a110e3e8931c8f&query=${query}`);
      const data2= await response.json();
      contextData.seData(data2);
     }
     fetchRecipe();
  },[query])

  return (
    <div className='navBar'>
        <Link className='homepagelink' to='/' style={{textDecoration:"none"}}>Home</Link>       
        <input className='searchBar rounded border-solid border-slate-400'>        
        </input>
        <span class="searchButton material-symbols-outlined" onClick={searchRecipe}>search</span>
        <button className='signup-button'>Sign Up</button>
    </div>
  )
}

export default Navbar