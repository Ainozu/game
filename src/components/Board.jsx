import React from 'react'
import Card from './common/Card'
const Board = ({set}) => {
  const array=[1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12]
  const shuffledArray = array.sort((a, b) => 0.5 - Math.random());
  return (
    <div>
      <div className="grid grid-cols-6 gap-4 p-1" >
      <div><Card img={"../imgs/"+set+"/"+shuffledArray[0]+".png"} hover="hover:border-red-600 "/></div>
      <div><Card img={"../imgs/"+set+"/"+shuffledArray[1]+".png"} hover="hover:border-red-600 "/></div>
      <div><Card img={"../imgs/"+set+"/"+shuffledArray[2]+".png"} hover="hover:border-red-600 "/></div>
      <div><Card img={"../imgs/"+set+"/"+shuffledArray[3]+".png"} hover="hover:border-red-600 "/></div>
      <div><Card img={"../imgs/"+set+"/"+shuffledArray[4]+".png"} hover="hover:border-red-600 "/></div>
      <div><Card img={"../imgs/"+set+"/"+shuffledArray[5]+".png"} hover="hover:border-red-600 "/></div>
      <div><Card img={"../imgs/"+set+"/"+shuffledArray[6]+".png"} hover="hover:border-red-600 "/></div>
      <div><Card img={"../imgs/"+set+"/"+shuffledArray[7]+".png"} hover="hover:border-red-600 "/></div>
      <div><Card img={"../imgs/"+set+"/"+shuffledArray[8]+".png"} hover="hover:border-red-600 "/></div>
      <div><Card img={"../imgs/"+set+"/"+shuffledArray[9]+".png"} hover="hover:border-red-600 "/></div>
      <div><Card img={"../imgs/"+set+"/"+shuffledArray[10]+".png"} hover="hover:border-red-600 "/></div>
      <div><Card img={"../imgs/"+set+"/"+shuffledArray[11]+".png"} hover="hover:border-red-600 "/></div>
      <div><Card img={"../imgs/"+set+"/"+shuffledArray[12]+".png"} hover="hover:border-red-600 "/></div>
      <div><Card img={"../imgs/"+set+"/"+shuffledArray[13]+".png"} hover="hover:border-red-600 "/></div>
      <div><Card img={"../imgs/"+set+"/"+shuffledArray[14]+".png"} hover="hover:border-red-600 "/></div>
      <div><Card img={"../imgs/"+set+"/"+shuffledArray[15]+".png"} hover="hover:border-red-600 "/></div>
      <div><Card img={"../imgs/"+set+"/"+shuffledArray[16]+".png"} hover="hover:border-red-600 "/></div>
      <div><Card img={"../imgs/"+set+"/"+shuffledArray[17]+".png"} hover="hover:border-red-600 "/></div>
      <div><Card img={"../imgs/"+set+"/"+shuffledArray[18]+".png"} hover="hover:border-red-600 "/></div>
      <div><Card img={"../imgs/"+set+"/"+shuffledArray[19]+".png"} hover="hover:border-red-600 "/></div>
      <div><Card img={"../imgs/"+set+"/"+shuffledArray[20]+".png"} hover="hover:border-red-600 "/></div>
      <div><Card img={"../imgs/"+set+"/"+shuffledArray[21]+".png"} hover="hover:border-red-600 "/></div>
      <div><Card img={"../imgs/"+set+"/"+shuffledArray[22]+".png"} hover="hover:border-red-600 "/></div>
      <div><Card img={"../imgs/"+set+"/"+shuffledArray[23]+".png"} hover="hover:border-red-600 "/></div>
      

      
      </div>
    </div>
  )
}

export default Board