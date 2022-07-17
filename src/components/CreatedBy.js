import React from 'react'
import './myStyle.css'

function CreatedBy({created}) {
  return (
    <h5 className={created}>created by <a href="http://github.com/hasanaimroatun" className='name'>hasanaimroatun</a> - devChallenges.io</h5>
  )
}

export default CreatedBy