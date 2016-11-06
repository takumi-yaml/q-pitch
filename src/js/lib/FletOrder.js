import Random from './Random';


const fletOrder = (length, pertinent)=> {
  let position = null;
  if(pertinent == 0) {
    position = 0;
  } else if (length >= pertinent) {
    position = Random.random(pertinent) + 1;
  } else {
    position = Random.random(length - 1) + 1;
  }
  const list = [];
  for(let i=0, l=length;i<l;i++){
    let coefficient = i - position;
    list.push(pertinent + coefficient);
  }
  return list;
};

export default fletOrder;