import React from 'react'
import Card from './common/card'

class Board extends React.Component {
   render() {
    var cards=[];
    var match;
    const array=[1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12]
    const shuffledArray = array.sort((a, b) => 0.5 - Math.random());
    const hover="hover:border-red-600 "
    const path="../imgs/"+this.props.set+"/"
    const back="../imgs/"+this.props.set+"/bg.png"


      let items = []
    var tmp="";
      for(let i = 0; i < 24; i++)
      {
        tmp+=shuffledArray[i]+"  ";
        if((i+1)%6==0)
        {
          console.log(tmp)
          tmp=""
        }
      }
      for (let i = 0; i < 24; i++) {
        items.push(<Card img={path+shuffledArray[i]+".png"} hover={hover} back={back} id={i} cards={cards} match={match}/>)
      }

    return (
    <div>
      <div className="grid grid-cols-6 gap-4 p-1" > 
        {items}     
      </div>
    </div>
    )
  }
}
export default Board