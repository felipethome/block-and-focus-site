import React from 'react';
import Transition from 'react-inline-transition-group';

export default class BannerScreen extends React.Component {
  render() {
    const styles = {
      container: {
        width: '50%',
        textAlign: 'center',
        background: '#212121',
      },

      image: {
        width: '80%',
        minWidth: '454px',
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
      <img key="1" style={styles.image} src="img/options.png" />,
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