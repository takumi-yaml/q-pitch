// LICENSE : MIT
"use strict";
export class ActionCreater {
  constructor(dispatcher) {
    this.dispatcher = dispatcher;
  }

  changeContents() {
    this.dispatcher.emit("changeContents");
  }

  answer(data) {
    this.dispatcher.emit("answer", data);
  }
}