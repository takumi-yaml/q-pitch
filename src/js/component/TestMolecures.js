"use strict";
import React from 'react';
import ButtonNext from './ButtonNext';
import { ActionCreater } from "../ActionCreater"
import { Store } from "../Store"
import { EventEmitter } from "../EventEmitter"
import trans from '../lib/Trans';

const eventEmitter = new EventEmitter();
const action = new ActionCreater(eventEmitter);
const store = new Store(eventEmitter);

export class TestMolecures extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contents: store.getContents(),
      answer: store.getAnswer(),
      result: '',
      choices: store.getChoices()
    };

    store.on("RESULT", () => {
      this._onAnswer();
    });

    store.on("CHANGE", () => {
      this._onChange();
    });
  }

  componentDidMount() {
    action.changeContents();
  }

  _onChange() {
    this.setState({
      contents: store.getContents(),
      answer: store.getAnswer(),
      choices: store.getChoices(),
      result: '',
    });
  }

  _onAnswer() {
    this.setState({ result: store.getResult() });
  }

  select(event){
   action.answer(event.target.value);
  }

  render(){
    return(
        <div>
          {this.state.contents.map((content, i) => {
            return (
                <div className={"question"} key={`id${i.toString()}`}>
                  <p className={"question__item"}>
                    <span className={"question__item-sub"}>string:</span>
                    <span className={"question__item-main"}>{ content.string }</span>
                  </p>
                  <p className={"question__item"}>
                    <span className={"question__item-sub"}>flet:</span>
                    <span className={"question__item-main"}>{ content.flet }</span>
                  </p>
                </div>
            );
          })}
          <ul className={"choices"}>
          {this.state.choices.map((c, i)=>{
            return (
                <li className={"choices__item"}
                    onClick={this.select.bind(this) }
                    value={c}
                    key={`answer${i.toString()}`}>{trans(c)}</li>
            );
          })}
          </ul>
          <p className={'result'}>{ this.state.result }</p>
          <ButtonNext action={action} />
        </div>
    );
  }
}
