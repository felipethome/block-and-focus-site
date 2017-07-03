import React from 'react';
import PropTypes from 'prop-types';
import BannerLogo from '../BannerLogo';
import BannerScreen from '../BannerScreen';

export default class Banner extends React.Component {
  static propTypes = {
    style: PropTypes.object,
  };

  render() {
    const styles = {
      container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        width: '100%',
        overflow: 'hidden',
        background: '#212121',
      },
    };

    return (
      <div style={Object.assign({}, styles.container, this.props.style)}>
        <BannerLogo />
        <BannerScreen />
      </div>
    );
  }
}