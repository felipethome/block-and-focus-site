import React from 'react';
import PropTypes from 'prop-types';
import Transition from 'react-inline-transition-group';
import CancelablePromise from '../../CancelablePromise';

const imagePaths = [
  'img/options.png',
];

export default class BannerScreen extends React.Component {
  static propTypes = {
    style: PropTypes.object,
  };

  state = {
    show: false,
  };

  componentDidMount() {
    this._Cancelable = new CancelablePromise();

    // Load images before the animation so they are stored in the HTTP cache.
    const promises = imagePaths.map((src) => {
      return this._Cancelable.make(new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = reject;
      }));
    });

    Promise.all(promises).then(() => {
      this.setState(() => ({show: true}));
    });
  }

  componentWillUnmount() {
    this._Cancelable.cancel();
  }

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
        transform: 'translateY(100%)',
      },

      appear: {
        opacity: 1,
        transform: 'translateY(0%)',
        transition: 'transform 500ms, opacity 800ms ease-in',
      },
    };

    let children = [];

    if (this.state.show) {
      children = [
        <div key="1" style={styles.imageContainer}>
          <img style={styles.image} src="img/options.png" />
        </div>,
      ];
    }

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