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

let RESULT_FLAG = 0;

class App extends React.Component {
  static getStores(){
    return [QuestionStore];
  }

  static calculateState(prevState) {
    return {
      question: QuestionStore.getState()
    }
  }

  componentDidUpdate(props, state){
    if(this.state.question.get('result').text && !RESULT_FLAG) {
      this.reset_result();
      RESULT_FLAG = 1;
    }
  }

  reset_result(){
    setTimeout(()=>{
        QuestionAction.reset_result();
        RESULT_FLAG = 0;
      }, 800);
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
          <Figure string={this.state.question.get('string')} flet={this.state.question.get('flet')} />
          <Result className={this.state.question.get('result').className}>{this.state.question.get('result').text}</Result>
          <Choices _choices={this.state.question.get('choices')} onClick={this.onClickChoice.bind(this)} />
          <ButtonNext onClick={this.onClickNext.bind(this)} />
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
