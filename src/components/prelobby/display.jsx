import React from 'react'
import Card from 'common/Cardfront'

const Display = ({set}) => {
    console.log(set)
  return (
    <div>
        
      <div className="grid grid-cols-4 gap-4 p-20">
      <div><Card img={"../imgs/"+set+"/2.png"} hover="hover:border-red-600 "/></div>
      <div><Card img={"../imgs/"+set+"/3.png"} hover="hover:border-red-600 "/></div>
      <div><Card img={"../imgs/"+set+"/4.png"} hover="hover:border-red-600 "/></div>
      <div><Card img={"../imgs/"+set+"/5.png"} hover="hover:border-red-600 "/></div>
      </div>
    </div>
  )
}

export default Display