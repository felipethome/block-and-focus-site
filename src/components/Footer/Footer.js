import React from 'react';
import PropTypes from 'prop-types';

export default class Footer extends React.Component {
  static displayName = 'Footer';

  static propTypes = {
    style: PropTypes.object,
  };

  render() {
    const styles = {
      container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100px',
      },

      textContainer: {
        fontSize: '13px',
        color: '#9E9E9E',
        textAlign: 'center',
      },
    };

    return (
      <div style={Object.assign({}, styles.container, this.props.style)}>
        <div style={styles.textContainer}>
          Copyright © 2017 Felipe Thomé. All rights reserved.
        </div>
      </div>
    );
  }
}