import React from 'react'

const Cardfront = ({img,hover,click}) => {
  return (
    <div className="">
        <img src={img} alt="card" className= {hover + "object-contain h-100 w-100 border "} onClick={click} />
    </div>
  )
}

export default Cardfront