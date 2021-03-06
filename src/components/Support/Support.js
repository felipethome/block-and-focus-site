/* eslint-disable max-len */

import React from 'react';
import PropTypes from 'prop-types';
import Description from '../Description';

export default class Support extends React.Component {
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

      link: {
        color: '#000',
        textDecoration: 'none',
        marginLeft: '5px',
      },
    };

    const {
      style, // eslint-disable-line no-unused-vars
      ...others, // eslint-disable-line comma-dangle
    } = this.props;

    return (
      <div
        {...others}
        style={Object.assign({}, styles.container, this.props.style)}
      >
        <Description title="Support">
          If you have any question you can send a message to:
          <a href="mailto:support@blockandfocus.com" style={styles.link}>
            support@blockandfocus.com
          </a>
        </Description>
      </div>
    );
  }
}