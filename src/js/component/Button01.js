import React from 'react';


export class Button01 extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
        <button>{this.props.text}</button>
    );
  }
}
