import React from 'react';
import styles from '../../scss/atomic/Label.scss';
import Random from '../lib/Random'

export class List01 extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    const style = styles[this.props.className];
    return(
    <ul>
      <li className={style}>{ Random.random(6) }</li>
      <li className={style}>{ Random.random(24) }</li>
    </ul>
    );
  }
}
