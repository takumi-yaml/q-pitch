import Random from './Random';

export default class Choices{

  static getChoices(answer){
    const c = Choices.getPattern().map((p)=>{
      let result = answer + p;
      if(result < 0) {
        result = result + 12;
      }
      return result % 12;
    })
    return c;
  }

  static getPattern(){
    const pattern = [
      [0, 1, 2, 3],
      [-1, 0, 1, 2],
      [-2, -1, 0, 1],
      [-3, -2, -1, 0],
    ];
    return pattern[Random.random(3)];
  }

}