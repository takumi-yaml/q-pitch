function trans(int) {
  let pitch = 'C';
  switch (int){

    case 0:
      break;

    case 1:
      pitch = 'C#';
      break;

    case 2:
      pitch = 'D';
      break;

    case 3:
      pitch = 'D#';
      break;

    case 4:
      pitch = 'E';
      break;

    case 5:
      pitch = 'F';
      break;

    case 6:
      pitch = 'F#';
      break;

    case 7:
      pitch = 'G';
      break;

    case 8:
      pitch = 'G#';
      break;

    case 9:
      pitch = 'A';
      break;

    case 10:
      pitch = 'A#';
      break;

    case 11:
      pitch = 'B';
      break;
  }
  return pitch;
}

export default trans;