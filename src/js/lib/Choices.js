import Random from './Random';

export default class Choices{

  static getChoices(answer){
    return Choices.getPattern().map((p)=>{
      return answer + p;
    })
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