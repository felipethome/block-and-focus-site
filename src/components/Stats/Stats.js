import React from 'react';
import PropTypes from 'prop-types';
import StatsScreen from '../StatsScreen';
import Description from '../description';

export default class Stats extends React.Component {
  static propTypes = {
    style: PropTypes.object,
  };

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
          text="The statistics page has usage information of the extension. You can check which blocked sites you access the most, how long you have worked, rested and more."
        />
        <StatsScreen />
      </div>
    );
  }
}