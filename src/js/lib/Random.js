export default class Random {
  static random(max){
    const now = String(Date.now());
    return Math.floor(now.substr(-8) * Math.random()) % max;
  }
}