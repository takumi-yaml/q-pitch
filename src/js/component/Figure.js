import React from 'react';
import String from './String';
import Mark from './Mark';
import fletOrder from '../lib/FletOrder';

const COLOR = {
  base: '#999',
  pertinent: '#000',
};

export default class Figure extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount() {
    const _flets = fletOrder(4, this.props.flet);
    const _position = _flets.indexOf(this.props.flet);
    this.setState({flets: _flets});
    this.setState({position: _position});
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.string !== this.props.string || nextProps.flet !== this.props.flet) {
      const _flets = fletOrder(4, nextProps.flet);
      const _position = _flets.indexOf(nextProps.flet);
      this.setState({flets: _flets});
      this.setState({position: _position});
    }
  }

  render(){
    return (
        <div className="figure_wrap">
          <div className="flet">
          {
            this.state.flets.map((e, i)=> {
              let _className = 'flet_item';
              if (e === 0) _className = 'flet_item flet_item-broad';
              return (
                  <div key={`flet${i.toString()}`} className={_className}>
                    <span>{e}</span>
                  </div>
              );
            })
          }
          </div>
          <div className="strings">
          {
            [1, 2, 3, 4, 5, 6].map((e)=>{
              let _color = COLOR.base;
              if(e === this.props.string) _color = COLOR.pertinent;
              return (
                  <String fill={_color} key={`string${e.toString()}`} />
              );
            })
          }
          </div>
          <Mark ry="10" rx="10" cy="10" cx="10" fill="#000"
                className={`position_${this.props.string}_${this.state.position} mark`} />
        </div>
    );
  }
}
