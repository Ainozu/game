import React from 'react'
import Score from './Score'

const Scores = () => {
   
  return (
    <div>
      <div className="grid grid-cols-4 gap-4 p-0">
       <Score set='set1'/>
       <Score set='set2'/>
       <Score set='set3'/>
       <Score set='set4'/>
      </div>
    </div>
  )
}

export default Scores