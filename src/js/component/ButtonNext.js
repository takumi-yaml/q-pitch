import React from 'react';
import { ActionCreater } from '../ActionCreater';
import { EventEmitter } from '../EventEmitter';
import { Store } from '../Store';

const emitter = new EventEmitter();

export default class ButtonNext extends React.Component {
  constructor(props) {
    super(props);
  }

  next(){
    this.props.action.changeContents();
  }

  render(){
    return(
        <button className={'button__next'}
                onClick={ this.next.bind(this) }>{'next'}</button>
    );
  }
}
