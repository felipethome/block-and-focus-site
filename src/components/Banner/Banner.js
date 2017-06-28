import React from 'react';
import BannerLogo from '../BannerLogo';
import BannerScreen from '../BannerScreen';

export default class Banner extends React.Component {
  render() {
    const styles = {
      container: {
        display: 'flex',
        width: '100%',
        maxHeight: '450px',
        flexWrap: 'wrap',
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