import React from 'react';

export default class ButtonNext extends React.Component {
  constructor(props) {
    super(props);
  }

  onClick(){
    this.props.onClick()
  }

  render(){
    return(
        <button className={'button__next'}
                onClick={ this.onClick.bind(this) }>{'next'}</button>
    );
  }
}
