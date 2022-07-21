import React from 'react'
import './myStyle.css'
import img2 from './pic/next arrow.png'

function TombolSemuaQuotes({author, genre, handleClick2, styleTombol, stylePenulis2, handleMouseEnter, handleMouseLeave}) {
  return (
    <div className={styleTombol} onClick={handleClick2} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className={stylePenulis2}>{author}</div>
        <div className='jenis'>{genre}</div>
        <img src={img2} alt="next arrow" className='gambar2'/>
    </div>
  )
}

export default TombolSemuaQuotes