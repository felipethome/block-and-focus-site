import React from 'react';

export default class QuoteScreen extends React.Component {
  render() {
    const styles = {
      container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
      },

      image: {
        width: '60%',
        height: 'auto',
      },
    };

    return (
      <div style={Object.assign({}, styles.container, this.props.style)}>
        <img style={styles.image} src="img/quote.png" />
      </div>
    );
  }
}