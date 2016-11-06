import { ReduceStore } from 'flux/utils';
import ActionType from '../constants/ActionType';
import Immutable from 'immutable';
import Dispatcher from '../Dispatcher';
import QuestionCreater from '../lib/QuestionCreater';
import Choices from '../lib/Choices';

const judge = (answer, _answer) => answer === _answer;


class QuestonStore extends ReduceStore {
  getInitialState(){
    return Immutable.Map({
      result : null,
      string: null,
      flet: null,
      choices: null,
      answer: null
    });
  }

  reduce(state, action){
    switch (action.type) {
      case ActionType.RESET:
        const q = QuestionCreater.create();
        const c = Choices.getChoices(q.answer);
        return state.set('string', q.string)
            .set('flet', q.flet)
            .set('answer', q.answer)
            .set('choices', Immutable.List(c))
            .set('result', {className: 'result', text: ''});
      case ActionType.RESET_RESULT:
        return state.set('result', {className: 'result', text: ''});
      case ActionType.ANSWER:
        const myJudge = (judge(action.value, state.get('answer')))
            ? {className: 'result good', text: 'GOOD'} : {className: 'result bad', text: 'BAD'};
        return state.set('result', myJudge);
      default:
        return state;
    }
  }
}

const instance = new QuestonStore(Dispatcher);
export default instance;
export { judge };
