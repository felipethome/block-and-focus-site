import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Navbar from '../Navbar';
import Button from '../Button';
import Home from '../Home';

const supportsHistory = 'pushState' in window.history;

export default class Root extends React.Component {
  static propTypes = {
    style: PropTypes.object,
  };

  render() {
    const styles = {
      container: {
        width: '100%',
      },

      navbarButton: {
        backgroundColor: 'transparent',
        marginRight: '10px',
      },

      stripe: {
        background: '#F5F5F5',
      },
    };

    const basename = (sessionStorage || {}).basename;

    const navbarActions = [
      <Link key="/home" to="/home" style={styles.link}>
        <Button animate style={styles.navbarButton}>Home</Button>
      </Link>,
      <Button
        link
        animate
        href="#privacy"
        key="/privacy"
        style={styles.navbarButton}
      >
        Privacy
      </Button>,
      <Button
        link
        animate
        href="#support"
        key="/support"
        style={styles.navbarButton}
      >
        Support
      </Button>,
    ];

    return (
      <Router
        basename={basename}
        forceRefresh={!supportsHistory}
      >
        <div style={Object.assign({}, styles.container, this.props.style)}>
          <Navbar
            actions={navbarActions}
            bgColor="#212121"
            hasShadow
          />

          <Route exact path="/" component={Home}/>
          <Route path="/home" component={Home}/>
        </div>
      </Router>
    );
  }
}