import React from 'react';
import trans from '../lib/Trans';

export default class Choices extends React.Component {

  render(){
    console.log(this.props._choices);
    return (
        <ul className={"choices"}>
          {this.props._choices.map((c, i)=>{
            return (
                <li className={"choices__item"}
                    onClick={this.props.onClick.bind(this) }
                    value={c}
                    key={`answer${i.toString()}`}>{trans(c)}</li>
            );
          })}
        </ul>
    );
  }
}