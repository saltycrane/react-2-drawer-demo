import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

import Drawer from './Drawer';


class MyDrawer2 extends Component {
  render() {
    const { hideSelf, ...rest } = this.props;
    const text = Array(500).fill().map(() => 'Drawer Content TWO.').join(' ');

    return (
      <Drawer {...rest}>
        <div style={styles.sectionContent}>
          {text}
        </div>
        <div style={styles.sectionButtons}>
          <Button bsStyle="primary" onClick={hideSelf} >Close</Button>
        </div>
      </Drawer>
    );
  }
}

const styles = {
  sectionContent: {
    height: '100%',
    overflow: 'auto',
    padding: '20px',
    backgroundColor: '#aabbbb'
  },
  sectionButtons: {
    position: 'absolute',
    bottom: '10px',
    left: '50%',
    transform: 'translateX(-50%)'
  }
};

export default MyDrawer2;
