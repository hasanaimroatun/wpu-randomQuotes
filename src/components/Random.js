import React from 'react'
import './myStyle.css'
import img1 from './pic/loop arrow.png'

function Random() {
  return (
    <div>
      <h5 className='random'>random</h5>
      <img src={img1} alt="loop arrow" className='gambar'/>
    </div>
  )
}

export default Random