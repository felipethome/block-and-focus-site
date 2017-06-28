import React from 'react';
import PropTypes from 'prop-types';
import getShadow from '../getShadow';

export default class Navbar extends React.Component {
  static propTypes = {
    actions: PropTypes.array,
    bgColor: PropTypes.string,
    hasShadow: PropTypes.bool,
    isFixed: PropTypes.bool,
    textColor: PropTypes.string,
  };

  render() {
    const styles = {
      container: {
        position: this.props.isFixed ? 'fixed' : 'relative',
        left: '0px',
        top: '0px',
        zIndex: '1',
        width: '100%',
      },

      menu: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        background: this.props.bgColor || '#01579B',
        boxShadow: this.props.hasShadow ? getShadow('2dp') : '',
        height: '56px',
        width: '100%',
        margin: '0px',
      },
    };

    return (
      <div style={Object.assign({}, styles.container, this.props.style)}>
        <div style={styles.menu}>
          {this.props.actions}
        </div>
      </div>
    );
  }
}