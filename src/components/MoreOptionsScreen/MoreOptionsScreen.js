import React from 'react';

export default class MoreOptionsScreen extends React.Component {
  render() {
    const styles = {
      container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
      },

      image: {
        width: '65%',
        height: 'auto',
      },
    };

    return (
      <div style={Object.assign({}, styles.container, this.props.style)}>
        <img style={styles.image} src="img/more-options.png" />
      </div>
    );
  }
}