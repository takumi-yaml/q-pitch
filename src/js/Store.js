"use strict";
import { EventEmitter } from "./EventEmitter"
import Random from './lib/Random';
import Answer from './lib/Answer';
import Choices from './lib/Choices';

export class Store extends EventEmitter {
  constructor(dispatcher) {
    super();
    this.contents = [];
    this.answer = 0;
    this.result = '';
    this.type = 1;
    this.choices = [];

    dispatcher.on("changeContents", this.onChangeContents.bind(this));
    dispatcher.on("answer", this.onAnswer.bind(this));
  }

  getContents() {
    return this.contents;
  }

  getAnswer() {
    return this.answer;
  }

  getChoices() {
    return this.choices;
  }

  getResult() {
    return this.result;
  }

  onAnswer(answer){
    this.result = 'bad!!';
    if (this.answer == answer){
      this.result = 'fine!';
    }
    this.emit("RESULT");
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
    this.choices = Choices.getChoices(this.answer);
    this.contents = c;
    this.emit("CHANGE");
  }
}
