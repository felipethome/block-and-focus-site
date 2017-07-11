/* eslint-disable max-len */

import React from 'react';
import PropTypes from 'prop-types';
import Description from '../Description';

export default class Privacy extends React.Component {
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

    const {
      style, // eslint-disable-line no-unused-vars
      ...others, // eslint-disable-line comma-dangle
    } = this.props;

    return (
      <div
        {...others}
        style={Object.assign({}, styles.container, this.props.style)}
      >
        <Description title="Block &amp; Focus privacy policy is simple">
          All the data this extension may collect is kept in the user's machine, with the exception of configuration information that may be exchanged between the user's machine and Google's servers so you can use the same settings in different devices.
          This extension may keep your information in your own machine for an indeterminate amount of time.
        </Description>
      </div>
    );
  }
}