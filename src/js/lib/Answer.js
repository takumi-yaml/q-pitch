import { String1st, String2nd, String3rd, String4th, String5th, String6th } from './String';
import Random from './Random';


export default class Answer {

  static get_answer(_string, _flet){
    const string = Answer.get_initial(_string);
    return (string.initial + _flet) % 12;
  }

  static get_initial(string) {
    let s;
    switch (string) {
      case 1:
        s = new String1st();
        break;
      case 2:
        s = new String2nd();
        break;
      case 3:
        s = new String3rd();
        break;
      case 4:
        s = new String4th();
        break;
      case 5:
        s = new String5th();
        break;
      default:
        s = new String6th();
        break;
    }
    return s;
  }
}
