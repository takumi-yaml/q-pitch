import React from 'react';
import { List01 } from './List01';
import { Button01 } from './Button01';

'use strict';

export class TestMolecures extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
        <div>
          <List01 className={ 'angry' } />
          <Button01 text={'hello me'} />
        </div>
    );
  }
}
