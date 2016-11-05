import Random from './Random';


const fletOrder = (length, pertinent)=> {
  let position = null;
  if (length - 1 >= pertinent) {
    position = Random.random(pertinent);
  } else {
    position = Random.random(length - 1);
  }
  const list = [];
  for(let i=0, l=length;i<l;i++){
    let coefficient = i - position;
    list.push(pertinent + coefficient);
  }
  return list;
};

export default fletOrder;