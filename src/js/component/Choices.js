import React from 'react';
import trans from '../lib/Trans';
import Random from '../lib/Random';

export default class Choices extends React.Component {

  render(){
    const randoms = [0,4].map((e)=>Random.random(12));
    return (
        <ul className={"choices"}>
          {randoms.map((c, i)=>{
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