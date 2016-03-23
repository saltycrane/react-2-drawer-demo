import React from 'react';


const Backdrop = ({ show, zIndex = 1050, onClick }) => {
  const overrides = {
    zIndex: show ? `${zIndex}` : '-1',
    opacity: show ? '0.7': '0'
  };
  return <div style={{...styles.container, ...overrides}} onClick={onClick}></div>;
};

const styles = {
  container: {
    position: 'absolute',
    top: '0',
    right: '0',
    bottom: '0',
    left: '0',
    backgroundColor: 'black',
    transition: 'all 1s ease-out'
  }
};

export default Backdrop;
