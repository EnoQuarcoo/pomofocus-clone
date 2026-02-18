import React from 'react'
import {useState} from 'react'

const Pomocounter = () => {
    const [sessionCounts, setSessionCounts ] = useState(1);
  return (
    <div className="pomo-counter">
        <h6> #{sessionCounts} </h6>
    </div>
  )
}

export default Pomocounter