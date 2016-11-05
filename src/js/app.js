import React from "react";
import { render } from "react-dom";
import ButtonNext from "./component/ButtonNext";
import Question from "./component/Question";
import Result from "./component/Result";
import Choices from "./component/Choices";
import Figure from "./component/Figure";

import { Container } from 'flux/utils';
import QuestionAction from './actions/QuestionAction';
import QuestionStore from './stores/QuestonStore';

class App extends React.Component {
  static getStores(){
    return [QuestionStore];
  }

  static calculateState(prevState) {
    return {
      question: QuestionStore.getState()
    }
  }

  onClickChoice(e){
    QuestionAction.answer(e.target.value)
  }

  onClickNext(){
    QuestionAction.reset()
  }

  render(){
    return (
        <div>
          <Question string={this.state.question.get('string')} flet={this.state.question.get('flet')} />
          <Result result={this.state.question.get('result')} />
          <Choices _choices={this.state.question.get('choices')} onClick={this.onClickChoice.bind(this)} />
          <ButtonNext onClick={this.onClickNext.bind(this)} />
          <Figure string={this.state.question.get('string')} flet={this.state.question.get('flet')} />
        </div>
    )
  }
}

const AppContainer = Container.create(App);
QuestionAction.reset();

render(
    <AppContainer />,
    document.getElementById('main')
);
