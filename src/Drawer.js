import React, { Component, PropTypes } from 'react';

import Backdrop from './Backdrop';


export default class Drawer extends Component {
  static propTypes = {
    width: PropTypes.number,
    show: PropTypes.bool,
    dim: PropTypes.bool
  };

  render() {
    const { children, width, show, dim, zIndex = 2000, onClickBackdrop } = this.props;
    const styleOverrides = {
      zIndex: `${zIndex}`,
      width: `${width}px`,
      right: show ? '0' : `-${width}px`
    };

    return (
      <div style={{...styles.container, ...styleOverrides}}>
        <Backdrop show={dim} zIndex={zIndex + 1} onClick={onClickBackdrop} />
        {children}
      </div>
    );
  }
}

const styles = {
  container: {
    position: 'absolute',
    top: '0',
    height: '100%',
    backgroundColor: 'white',
    overflow: 'hidden',
    transition: 'all 1s ease-out'
  }
};
