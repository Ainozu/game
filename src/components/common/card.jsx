import React from 'react'
import Cardfront from './Cardfront'
import Cardback from './Cardback'
import ReactCardFlip from 'react-card-flip'

class Card extends React.Component {
    constructor(props) {
      super();
        this.state = {
        isFlipped: true
      };
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick(e) {
      e.preventDefault();
      this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }
  
    render() {
      return (
        <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
            <Cardfront img={this.props.img} hover={this.props.hover} click={this.handleClick}>
            </Cardfront>
        
        <Cardback back={this.props.back} hover={this.props.hover} click={this.handleClick}/>
        
        </ReactCardFlip>
      )
    }
  }
export default Card