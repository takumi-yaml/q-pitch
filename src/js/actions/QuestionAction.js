import Dispatcher from '../Dispatcher';
import ActionType from '../constants/ActionType';

export default class QuestionAction {
  static answer(_answer){
    Dispatcher.dispatch({
      type: ActionType.ANSWER,
      value: _answer
    })
  }

  static reset_result(){
    Dispatcher.dispatch({
      type: ActionType.RESET_RESULT
    })
  }

  static reset(){
    Dispatcher.dispatch({
      type: ActionType.RESET,
    })
  }

}

