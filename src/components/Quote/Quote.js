import React from 'react';
import PropTypes from 'prop-types';
import QuoteScreen from '../QuoteScreen';
import Description from '../Description';

export default class Quote extends React.Component {
  static propTypes = {
    style: PropTypes.object,
  };

  render() {
    const styles = {
      container: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '100%',
        padding: '40px 0 40px 0',
      },
    };

    return (
      <div style={Object.assign({}, styles.container, this.props.style)}>
        <Description
          title="Positive reinforcement"
          text="When trying to access a blocked website you will see a motivational phrase to inspire you."
        />
        <QuoteScreen />
      </div>
    );
  }
}