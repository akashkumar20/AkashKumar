import React from 'react';

import Container from './Screens';
import './scss/mixins.scss'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={};
  }
  render(){
    return(
      <div>
          <Container />
      </div>
    )
  }
}

export default App;