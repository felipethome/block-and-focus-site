import React from 'react';
import Description from '../Description';
import MoreOptionsScreen from '../MoreOptionsScreen';

export default class ThirdCard extends React.Component {
  render() {
    const styles = {
      container: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        boxSizing: 'border-box',
        width: '100%',
        padding: '40px',
      },

      description: {
        width: '100%',
        paddingLeft: '20px',
        paddingRight: '20px',
      },
    };

    return (
      <div style={Object.assign({}, styles.container, this.props.style)}>
        <Description
          title="And more options..."
          text="You will have a lot of options so you can configure the extension the way that best fit you. Notifications, sound, difficulty and more."
          style={styles.description}
        />
        <MoreOptionsScreen />
      </div>
    );
  }
}