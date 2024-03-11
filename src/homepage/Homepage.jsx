import React, { useState } from 'react'
import './Homepage.css'
import { useEffect } from 'react';
function Homepage() {

    let imgUrlList = ['https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=512&h=512&dpr=2']

    const [imgUrl, setImgUrl] = useState(imgUrlList[0]);
    const [headerText, setHeaderText] = useState('');
    const [bodeyTextl, setBodyText] = useState('');
    let [index, setIndex] = useState(0);   
    
    useEffect(() => {
        const interval = setInterval(() => {            
            if (index < imgUrlList.length - 1) {
                setIndex(index + 1);
                console.log('increase');
              } else {
                setIndex(0);
              }
              
            console.log('change', index);
        }, 3000);
    
        // Cleanup function to clear the interval when the component unmounts or when index changes
        return () => clearInterval(interval);
      }, []);

      useEffect(() => {
        // Update the image URL when the index changes
        setImgUrl(imgUrlList[index]);
        console.log(imgUrl);
      }, [index,imgUrlList]);
    return (
        <div className='outerContainer' style={{ display: 'flex', marginTop: '2rem', justifyContent: 'center', alignItems: 'center' }}>
            <div className='biggerCard'>
                <img src={imgUrl}
                    style={{ borderRadius: '10px', height: '300px', width: '400px', margin: '20px 0px 0px 20px' }} />
                <span className='factsSpan'><h2>Pancake facts !!</h2>
                    <h3>The world's biggest pancake measured 49+ feet in diameter and weighed 6,614 pounds.</h3>
                </span>
                <div className='smallerCards'>
                    <div id='card1'>
                        <img src='https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                            style={{ height: '12rem', width: '10rem' }} />
                        <br />
                        <a href='#' style={{
                            textDecoration: 'none', border: '2px solid', borderRadius: '5px',
                            background: 'beige'
                        }}>Dumlings</a>
                    </div>
                    <div id='card2'>
                        <img src='https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                            style={{ height: '12rem', width: '10rem' }} />
                        <br />
                        <a href='#' style={{
                            textDecoration: 'none', border: '2px solid', borderRadius: '5px',
                            background: 'beige'
                        }}>Dumlings</a>
                    </div>
                    <div id='card3'>
                        <img src='https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                            style={{ height: '12rem', width: '10rem' }} />
                        <br />
                        <a href='#' style={{
                            textDecoration: 'none', border: '2px solid', borderRadius: '5px',
                            background: 'beige'
                        }}>Dumlings</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage