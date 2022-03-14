import React from 'react'

const card = ({img,hover}) => {
  return (
    <div className="bg-slate-200">
        <img src={img} alt="card" className= {hover + "object-contain h-100 w-100 border "}/>
    </div>
  )
}

export default card