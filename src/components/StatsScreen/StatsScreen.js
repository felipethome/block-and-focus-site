import React from 'react';

export default class StatsScreen extends React.Component {
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
      <div style={styles.container}>
        <img style={styles.image} src="img/stats.png" />
      </div>
    );
  }
}