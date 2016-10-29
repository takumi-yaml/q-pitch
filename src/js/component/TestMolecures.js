"use strict";
import React from 'react';
import Button01 from './Button01';
import { ActionCreater } from "../ActionCreater"
import { Store } from "../Store"
import { EventEmitter } from "../EventEmitter"
import Choices from '../lib/Choices';

const eventEmitter = new EventEmitter();
const action = new ActionCreater(eventEmitter);
const store = new Store(eventEmitter);

export class TestMolecures extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contents: store.getContents(),
      answer: store.getAnswer()
    };
    store.on("CHANGE", () => {
      this._onChange();
    });
  }

  componentDidMount() {
    action.changeContents();
  }

  _onChange() {
    this.setState({contents: store.getContents(), answer: store.getAnswer()});
  }

  next(){
    action.changeContents();
  }

  select(){
    console.log(0);
    // action.select();
  }

  render(){
    const choices = Choices.getChoices(this.state.answer);
    console.log(choices);
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
          {choices.map((c, i)=>{
            return (
                <li onClick={this.select.bind(this)} key={`answer${i.toString()}`}>{c}</li>
            );
          })}
          </ul>
          <Button01 onClick={ this.next.bind(this) } text={'next'} />
        </div>
    );
  }
}
