import React from 'react'
import './Navbar.css'
// import './output.css'
function Navbar() {
  return (
    <div className='navBar'>       
        <input className='searchBar rounded border-solid border-slate-400'>        
        </input>
        <span class="searchButton material-symbols-outlined">search</span>
        <button className='signup-button'>Sign Up</button>
    </div>
  )
}

export default Navbar