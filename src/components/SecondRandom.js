import React, {useState, useEffect} from 'react'
import axios from 'axios'

function SecondRandom({random2n3}) {
    const [Quotes, setQuotes] = useState('')
  useEffect(() => {
    axios
        .get(`https://jsonplaceholder.typicode.com/posts/2`)
        .then(res => {
            setQuotes(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    
    }, [])
  return (
    <h3 className={random2n3}>"{Quotes.body}"</h3>
  )
}

export default SecondRandom