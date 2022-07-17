import React, {useEffect, useState} from 'react'
import axios from 'axios'

function ThirdRandom({random2n3}) {
  const [Quotes, setQuotes] = useState('')
  useEffect(() => {
    axios
        .get(`https://jsonplaceholder.typicode.com/posts/3`)
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

export default ThirdRandom