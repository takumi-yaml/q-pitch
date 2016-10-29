import Answer from '../src/js/lib/Answer';
import assert  from 'power-assert';

const q = [
  { string: 1, flet: 0 },
  { string: 2, flet: 1 },
  { string: 3, flet: 2 },
  { string: 4, flet: 3 },
  { string: 5, flet: 4 },
  { string: 6, flet: 5 },
];

describe('Answer', ()=>{

  it('should be 4', ()=>{
    assert(Answer.get_answer(q[0].string, q[0].flet) == 4);
  });

  it('should be 0', ()=>{
    assert(Answer.get_answer(q[1].string, q[1].flet) == 0);
  });

  it('should be 9', ()=>{
    assert(Answer.get_answer(q[2].string, q[2].flet) == 9);
  });

  it('should be 5', ()=>{
    assert(Answer.get_answer(q[3].string, q[3].flet) == 5);
  });

  it('should be 1', ()=>{
    assert(Answer.get_answer(q[4].string, q[4].flet) == 1);
  });

  it('should be 9', ()=>{
    assert(Answer.get_answer(q[5].string, q[5].flet) == 9);
  });

});