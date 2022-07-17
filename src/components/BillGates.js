import React, {useState} from 'react'
import './myStyle.css'
import FirstRandom from './FirstRandom'
import SecondRandom from './SecondRandom'
import ThirdRandom from './ThirdRandom'
import CreatedBy from './CreatedBy'
import img2 from './pic/next arrow.png'
import './font/nunito-bold-webfont.woff2'

function BillGates() {
    const [billG, setBillG] = useState('')
    const [tombol, setTombol] = useState('tombol')
    const [random2n3, setRandom2n3] = useState('none')
    const [nama, setNama] = useState('none')
    const [created, setCreated] = useState('created')

    const handleClick = () => {
        setTombol('tombol2')
        setRandom2n3('utama')
        setNama('bill3')
        setCreated('created2')
    }

    const handleMouseEnter = () => {
        setBillG('bill2')
    }

    const handleMouseLeave = () => {
        setBillG('bill')
    }

  return (
    <div>
        <h2 className={nama}>Bill Gates</h2>
        <FirstRandom />
        <div className={tombol} onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <h3 className={billG}>Bill Gates</h3>
            <h6 className='bsns'>business</h6>
            <img src={img2} alt="next arrow" className='gambar2'/>
        </div>
        <SecondRandom random2n3={random2n3}/>
        <ThirdRandom random2n3={random2n3}/>
        <CreatedBy created={created}/>
    </div>
  )
}

export default BillGates