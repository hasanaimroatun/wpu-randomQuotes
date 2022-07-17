import React,{useState, useEffect} from 'react'
import axios from 'axios'

function FirstRandom() {
    const [firstQuotes, setFirstQuotes] = useState('')
    useEffect(() => {
        axios
        .get('https://jsonplaceholder.typicode.com/posts/1')
        .then(res => {
            setFirstQuotes(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    
    }, [])
    
  return (
    <h3 className='utama'>"{firstQuotes.body}"</h3>
  )
}

export default FirstRandom