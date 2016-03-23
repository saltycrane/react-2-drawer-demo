import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

import Backdrop from './Backdrop';
import MyDrawer1 from './MyDrawer1';
import MyDrawer2 from './MyDrawer2';


export default class MyPage extends Component {
  state = {
    showDrawer1: false,
    showDrawer2: false
  };

  render() {
    const { showDrawer1, showDrawer2 } = this.state;
    const text = Array(1000).fill().map(() => 'Page Content.').join(' ');

    return (
      <div style={styles.container}>
        <Backdrop
          show={showDrawer1}
          onClick={this._handleHideAll}
        />

        <div style={styles.sectionContent}>
          {text}
          <div style={styles.sectionLeft}>
            <Button
              bsStyle="primary"
              style={styles.button}
              onClick={this._handleShowDrawer1}
            >
              Show First Drawer
            </Button>
          </div>
        </div>

        <MyDrawer1
          width={600}
          show={showDrawer1}
          dim={showDrawer2}
          hideSelf={this._handleHideDrawer1}
          showNext={this._handleShowDrawer2}
          onClickBackdrop={this._handleHideDrawer2}
        />
        <MyDrawer2
          width={550}
          show={showDrawer2}
          hideSelf={this._handleHideDrawer2}
        />
      </div>
    );
  }

  _handleShowDrawer1 = () => {
    this.setState({showDrawer1: true});
  };

  _handleHideDrawer1 = () => {
    this.setState({showDrawer1: false});
  };

  _handleShowDrawer2 = () => {
    this.setState({showDrawer2: true});
  };

  _handleHideDrawer2 = () => {
    this.setState({showDrawer2: false});
  };

  _handleHideAll = () => {
    this._handleHideDrawer2();
    this._handleHideDrawer1();
  };
}

const styles = {
  container: {
    position: 'absolute',
    top: '0',
    left: '0',
    height: '100%',
    width: '100%',
    backgroundColor: '#bbbbaa'
  },
  sectionContent: {
    position: 'relative',
    height: '100%',
    overflow: 'auto',
    padding: '20px'
  },
  sectionLeft: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '50%'
  },
  button: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  }
};
