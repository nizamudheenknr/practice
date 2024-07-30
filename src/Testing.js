import React from 'react'

const Testing = () => {

    const handleClick = function(){
        console.log('button clicked');
    }
  return (
    <div>
         <button onClick={handleClick} > click me</button>
    </div>
  )
}

export default Testing