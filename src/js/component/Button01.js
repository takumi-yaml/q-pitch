import React from 'react';


export default class Button01 extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
        <button onClick={ this.props.onClick }>{this.props.text}</button>
    );
  }
}
