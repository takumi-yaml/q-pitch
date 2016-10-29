"use strict";
import { EventEmitter } from "./EventEmitter"
import Random from './lib/Random';
import Answer from './lib/Answer';

export class Store extends EventEmitter {
  constructor(dispatcher) {
    super();
    this.contents = [];
    this.answer = 0;
    this.type = 1;

    dispatcher.on("changeContents", this.onChangeContents.bind(this));
  }

  getContents() {
    return this.contents;
  }

  getAnswer() {
    return this.answer;
  }

  onChangeContents() {
    // Todo: 問題作るところを移す
    let c = [];
    let a = 0;
    for(let i=0, l=this.type;i<l;i++) {
      const _string = Random.random(6) + 1;
      const _flet = Random.random(24);
      a = Answer.get_answer(_string, _flet);
      c.push({string: _string, flet: _flet, answer: a});
    }
    this.answer = a;
    this.contents = c;
    this.emit("CHANGE");
  }
}
