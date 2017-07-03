import React from 'react';
import PropTypes from 'prop-types';
import Transition from 'react-inline-transition-group';

export default class BannerScreen extends React.Component {
  static propTypes = {
    style: PropTypes.object,
  };

  render() {
    const styles = {
      container: {
        display: 'flex',
        justifyContent: 'center',
        position: 'relative',
        marginTop: '10px',
        width: '50%',
        textAlign: 'center',
        background: '#212121',
      },

      imageContainer: {
        position: 'absolute',
        top: '0',
        bottom: '0',
        width: '70%',
        minWidth: '454px',
        maxHeight: '600px',
        overflow: 'hidden',
      },

      image: {
        display: 'flex',
        width: '100%',
        height: 'auto',
      },

      base: {
        opacity: 0,
        transform: 'scale(0)',
      },

      appear: {
        opacity: 1,
        transform: 'scale(1)',
        transition: 'transform 500ms, opacity 1200ms ease-in',
      },
    };

    const children = [
      <div key="1" style={styles.imageContainer}>
        <img style={styles.image} src="img/options.png" />
      </div>,
    ];

    return (
      <Transition
        childrenStyles={{
          base: styles.base,
          appear: styles.appear,
          enter: styles.appear,
        }}
        onPhaseEnd={this._handlePhaseEnd}
        style={Object.assign({}, styles.container, this.props.style)}
      >
        {children}
      </Transition>
    );
  }
}