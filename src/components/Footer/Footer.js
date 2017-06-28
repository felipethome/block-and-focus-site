import React from 'react';

export default class Footer extends React.Component {
  render() {
    const styles = {
      container: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
      },

      textContainer: {
        fontSize: '13px',
        color: '#9E9E9E',
        textAlign: 'center',
        margin: '40px 0 40px 0',
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