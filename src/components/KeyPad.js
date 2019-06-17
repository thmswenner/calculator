import React, {Component, Fragment} from 'react';

class KeyPadComponent extends Component {

  render() {
    return (
    <div className="button">
        {['(', 'CE', ')', 'C', '1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', '.', '0', '=', '/',].map(b => {
          return (
            <Fragment>
              <button name={b} onClick={e => this.props.onClick(e.target.name)}>{b}</button>
            </Fragment>
          )
        })}
    </div>
    );
  }
}


export default KeyPadComponent;