"use strict";
import { EventEmitter } from "./EventEmitter"
import Random from './lib/Random';

export class Store extends EventEmitter {
  constructor(dispatcher) {
    super();
    this.contents = [];
    this.type = 0;

    dispatcher.on("changeContents", this.onChangeContents.bind(this));
  }

  getContents() {
    return this.contents;
  }

  onChangeContents() {
    // Todo: 問題作るところを移す
    this.contents = [
      {string: Random.random(6) + 1, flet: Random.random(24) }
    ];
    this.emit("CHANGE");
  }
}
