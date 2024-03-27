import React from 'react'
import './Showrecipepage.css';
import { useContext } from 'react';
import {FoodlistContext} from '../context/Foodlistcontext'

function Showrecipepage() {
  let index=10; 
  let recipeList = ['pizza','burger', 'coke','pizza','burger', 'coke','pizza','burger', 'coke','pizza','burger', 'coke']
  
  let fetchedData = useContext(FoodlistContext).fetchedData.results;
  console.log('fetched data', fetchedData);

  https://api.spoonacular.com/recipes/{id}/information
  
  return (
    <div className='recipeCardsContainer'>
      {fetchedData.map((recipe, index) => (
      <div className='recipeCard' style={{display:'flex', flexDirection:'column',
       alignItems:'center', height:'15rem', width:'13rem', border:'2px solid', marginTop:'2rem'}}>
        <img src={recipe.image} style={{height:'80%', width:'100%'}}></img>
        <a href="http://www.101cookbooks.com/archives/001199.html" style={{textDecoration:'none'}}>{recipe.title}</a>
      </div> 
      ))}
    </div>
  )
}

export default Showrecipepage