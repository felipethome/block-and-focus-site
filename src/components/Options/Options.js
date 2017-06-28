import React from 'react';
import OptionsScreen from '../OptionsScreen';
import Description from '../Description';

export default class Options extends React.Component {
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
    };

    return (
      <div style={Object.assign({}, styles.container, this.props.style)}>
        <Description
          title="Options"
          text="You can configure the websites you don't want to access during work (and exceptions to these websites), the time you want to work and the time you want to rest."
        />
        <OptionsScreen />
      </div>
    );
  }
}