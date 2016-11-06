import React from 'react';

const Mark = (props) => {
  return <svg className={props.className}><ellipse {...props} /></svg>;
};

export default Mark;
