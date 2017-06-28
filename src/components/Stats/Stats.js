import React from 'react';
import StatsScreen from '../StatsScreen';
import Description from '../description';

export default class Stats extends React.Component {
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
          title="Statistics (Only Pro)"
          text="The statistics page has a lot of information about your cycles so you can track your evolution. You can check which blocked sites you access the most, how long you have worked, rested and more."
        />
        <StatsScreen />
      </div>
    );
  }
}