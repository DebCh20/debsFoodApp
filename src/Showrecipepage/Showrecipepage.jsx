import React from 'react'
import './Showrecipepage.css';
function Showrecipepage() {
  let index=10; 
  let recipeList = ['pizza','burger', 'coke','pizza','burger', 'coke','pizza','burger', 'coke','pizza','burger', 'coke']
  
  
  return (
    <div className='recipeCardsContainer'>
      {recipeList.map((recipe, index) => (
      <div className='recipeCard' style={{display:'flex', flexDirection:'column',
       alignItems:'center', height:'15rem', width:'13rem', border:'2px solid', marginTop:'2rem'}}>
        <img src='https://spoonacular.com/recipeImages/642539-312x231.png' style={{height:'80%', width:'100%'}}></img>
        <a href="http://www.101cookbooks.com/archives/001199.html" style={{textDecoration:'none'}}>Best Pizza Dough Ever</a>
      </div> 
      ))}
    </div>
  )
}

export default Showrecipepage