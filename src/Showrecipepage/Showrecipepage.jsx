import React from 'react'

function Showrecipepage() {
  let index=10;  
  return (
    <div className='recipeCardsContainer'>
      <div className='recipeCard' style={{display:'flex', flexDirection:'column',
       alignItems:'center', height:'15rem', width:'13rem', border:'2px solid'}}>
        <img src='http://forkify-api.herokuapp.com/images/best_pizza_dough_recipe1b20.jpg' style={{height:'80%', width:'100%'}}></img>
        <a href="http://www.101cookbooks.com/archives/001199.html" style={{textDecoration:'none'}}>Best Pizza Dough Ever</a>
      </div> 
    </div>
  )
}

export default Showrecipepage