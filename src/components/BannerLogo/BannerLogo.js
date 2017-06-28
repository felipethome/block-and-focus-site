import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import getShadow from '../getShadow';

class Logo extends React.Component {
  static propTypes = {
    style: PropTypes.object,
  };

  render() {
    const styles = {
      container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%',
        background: '#212121',
        padding: '20px 0',
      },

      logo: {
        width: '30%',
        height: 'auto',
      },

      logoText: {
        fontSize: '35px',
        fontWeight: '600',
        textAlign: 'center',
        marginTop: '20px',
        color: '#FAFAFA',
      },

      description: {
        fontSize: '20px',
        textAlign: 'center',
        marginTop: '10px',
        color: '#FAFAFA',
      },

      buttonContainer: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        marginTop: '30px',
      },

      button: {
        background: '#43A047',
        boxShadow: getShadow('2dp'),
        fontSize: '20px',
        textTransform: 'none',
        height: 'auto',
        marginRight: '10px',
      },

      warning: {
        marginTop: '10px',
        color: '#CCC',
      },
    };

    return (
      <div style={Object.assign({}, styles.container, this.props.style)}>
        <img style={styles.logo} src="img/logo.png" />
        <div style={styles.logoText}>
          Block & Focus
        </div>
        <div style={styles.description}>
          Block distractions during your work time
        </div>
        <div style={styles.buttonContainer}>
          <Button
            link
            href="https://chrome.google.com/webstore/detail/block-focus/dcpbedhdekgkhigjgmlcbmcjoeaebbfm"
            style={styles.button}
          >
            Get Free Version
          </Button>
          <Button
            link
            href="#"
            style={styles.button}
          >
            Buy on Chrome Store
          </Button>
        </div>
        <div style={styles.warning}>
          The free version doesn't contain some of the features presented here
        </div>
      </div>
    );
  }
}

export default Logo;