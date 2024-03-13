import React from 'react'
import './Foodinfopage.css'
function Foodinfopage() {
  return (
    <div className='outerContainer'>
        <div className='imgContainer' style={{display:'flex'}}>
            <img src='https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'></img>
        </div>
        <div className='foodInfo'>
            <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum, distinctio.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, accusamus repellat sit facere quos autem consequuntur optio dolorem similique eveniet voluptatibus pariatur illo soluta culpa!</p>
            <br/>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae, aut?</p>
        </div>
    </div>
  )
}

export default Foodinfopage