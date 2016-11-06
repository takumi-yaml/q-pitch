import React from 'react';

export default class List01 extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div className={"question"}>
        <p className={"question__item"}>
          <span className={"question__item-sub"}>string:</span>
          <span className={"question__item-main"}>{ this.props.string }</span>
        </p>
        <p className={"question__item"}>
          <span className={"question__item-sub"}>flet:</span>
          <span className={"question__item-main"}>{ this.props.flet }</span>
        </p>
      </div>
    );
  }
}
