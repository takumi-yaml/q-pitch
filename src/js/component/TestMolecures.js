"use strict";
import React from 'react';
import Button01 from './Button01';
import { ActionCreater } from "../ActionCreater"
import { Store } from "../Store"
import { EventEmitter } from "../EventEmitter"

const eventEmitter = new EventEmitter();
const action = new ActionCreater(eventEmitter);
const store = new Store(eventEmitter);

export class TestMolecures extends React.Component {
  constructor(props) {
    super(props);
    this.state = {contents: store.getContents()};
    store.on("CHANGE", () => {
      this._onChange();
    });
    action.changeContents();
  }

  componentDidMount() {
    action.changeContents();
  }

  _onChange() {
    this.setState({contents: store.getContents()});
  }

  next(){
    action.changeContents();
  }

  render(){
    return(
        <div>
          {this.state.contents.map((content) => {
            return (
                <div>
                  <p>string: { content.string }</p>
                  <p>flet: { content.flet }</p>
                </div>
            );
          })}
          <Button01 onClick={ this.next.bind(this) } text={'next'} />
        </div>
    );
  }
}
