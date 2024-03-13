import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import './output.css'
function Navbar() {
  const navigate = useNavigate();

  const searchRecipe= () => {
    navigate('/findRecipe');
  };
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