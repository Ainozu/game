import React from 'react'
import Cardfront from './Cardfront'
import Cardback from './Cardback'
import ReactCardFlip from 'react-card-flip'
import { click } from '@testing-library/user-event/dist/click';

class Card extends React.Component {
    constructor(props) {
      super();
        this.state = {
        img:props.img,
        isFlipped: true,
        isFounded:false    
      }
      
      this.updateState = this.updateState.bind(this)
      this.handleClick = this.handleClick.bind(this)
      
    }
    updateState(){ 
      // Changing state 
      console.log('ápdét')
      this.setState({isFlipped : true}) 
    } 
    
   
    unflip(one,two) {
      one.updateState()
      two.updateState()

    }
    handleClick(e) {
      e.preventDefault();
      this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
      const array=this.props.cards
      if((array.length != 2)==true)
      {
        console.log("nem 2")

        array.push(this)
      }
      //console.log(array.length==2)
      if((array.length == 2)==true)
        {
          console.log("2")
          
          console.log(this.props.cards)
          console.log(this.props.cards[0])
          console.log(this.props.cards[1])
          var one=this.props.cards[0]
          var two=this.props.cards[1]
          //console.log(one)
          if(one.state['img']===two.state['img'])
          {
            console.log("ugyanaz")
          }
          else
          {
            console.log('nem ugyanaz')
            setTimeout(() => {  this.unflip(one,two); }, 500);
            
          }
          this.props.cards.pop()
          this.props.cards.pop()
        }
        
      
        //console.log(this.props.cards.length)
      //console.log(this.props.cards)
    }
    
  
    render() {

      return (
        <ReactCardFlip key={this.props.id} isFlipped={this.state.isFlipped} flipDirection="horizontal">
            <Cardfront img={this.props.img} hover={this.props.hover} click={this.handleClick}>
            </Cardfront>
        
        <Cardback back={this.props.back} hover={this.props.hover} click={this.handleClick}/>
        
        </ReactCardFlip>
      )
    }
  }
export default Card