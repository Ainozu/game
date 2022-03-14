import React, { Component } from 'react'
class Notfound extends Component {
  constructor(props) {
    super(props);
  }
  state = {  }
  render() { 
    return ( 
      <div class="flex h-screen justify-center items-center">
        <div class="text-center">
          <img src={"../imgs/notfound.png"}/>
        </div>
      </div>
     );
  }
}
 
export default Notfound;