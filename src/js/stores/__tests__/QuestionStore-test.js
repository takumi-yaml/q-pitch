import QuestionAction from '../../actions/QuestionAction';
import QuestionStore from '../QuestonStore';
import { judge } from '../QuestonStore';


describe('QuestionStore', () => {
  var store;

  beforeEach(() => {
    store = QuestionStore;
  });

  it('should be no value', () => {
    expect(store.getState().get('result')).toBeNull();
    expect(store.getState().get('string')).toBeNull();
    expect(store.getState().get('flet')).toBeNull();
    expect(store.getState().get('answer')).toBeNull();
    expect(store.getState().get('choices')).toBeNull();
  });


  it('should no value', () => {
    QuestionAction.reset();
    expect(store.getState().get('string')).toBeGreaterThan(0);
    expect(store.getState().get('string')).toBeLessThan(7);
    expect(store.getState().get('flet')).toBeGreaterThan(-1);
    expect(store.getState().get('flet')).toBeLessThan(25);
    expect(store.getState().get('answer')).toBeGreaterThan(-1);
    expect(store.getState().get('answer')).toBeLessThan(12);
    expect(store.getState().get('result')).toBe('');
    expect(store.getState().get('choices').toArray().length).toBe(4);
  });

  it('should judge rightly', () => {
    store.getState().set('answer', 4);
    QuestionAction.answer(4);
    let myJudge = judge(4, store.getState().get('answer'));
    expect(myJudge).toBe(true);
    expect(store.getState().get('result')).toBe('GOOD');

    QuestionAction.answer(1);
    myJudge = judge(1, store.getState().get('answer'));
    expect(myJudge).toBe(false);
    expect(store.getState().get('result')).toBe('BAD');
  });

});
