"use strict";
import React from 'react';
import Button01 from './Button01';
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
    this.setState({contents: store.getContents(), answer: store.getAnswer(), choices: store.getChoices()});
  }

  _onAnswer() {
    this.setState({ result: store.getResult() });
  }

  next(){
    this.setState({
      result: ''
    });
    action.changeContents();
  }

  select(event){
    action.answer(event.target.value);
  }

  render(){
    return(
        <div>
          {this.state.contents.map((content, i) => {
            return (
                <div key={`id${i.toString()}`}>
                  <p>string: { content.string }</p>
                  <p>flet: { content.flet }</p>
                </div>
            );
          })}
          <ul>
          {this.state.choices.map((c, i)=>{
            return (
                <li onClick={this.select.bind(this) } value={c} key={`answer${i.toString()}`}>{trans(c)}</li>
            );
          })}
          </ul>
          <p>{ this.state.result }</p>
          <Button01 onClick={ this.next.bind(this) } text={'next'} />
        </div>
    );
  }
}
