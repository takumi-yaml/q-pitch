import React from 'react';
import styles from '../../scss/atomic/Label.scss';


export default class Label01 extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    const style = styles[this.props.className];
    return(
        <h1 className={style}>{this.props.text}</h1>
    );
  }
}
