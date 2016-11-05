import Answer from './Answer';
import Random from './Random';

export default class QuestionCreater {
  static create(){
    const _string = Random.random(6) + 1;
    const _flet = Random.random(24);
    const a = Answer.get_answer(_string, _flet);
    return {string: _string, flet: _flet, answer: a};
  }
}
