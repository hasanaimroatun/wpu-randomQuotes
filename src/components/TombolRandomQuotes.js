import React from 'react'
import img1 from './pic/loop arrow.png'
import './myStyle.css'

function TombolRandomQuotes({handleClick}) {
  return (
    <div onClick={handleClick}>
        <div className='random'>random</div>
        <img src={img1} alt="loop arrow" className='gambar'/>
    </div>
  )
}

export default TombolRandomQuotes