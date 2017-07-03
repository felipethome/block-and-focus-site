import React from 'react';
import PropTypes from 'prop-types';

export default class Button extends React.Component {
  static displayName = 'Button';

  static propTypes = {
    animate: PropTypes.bool,
    children: PropTypes.any,
    disabled: PropTypes.bool,
    link: PropTypes.bool,
    onMouseDown: PropTypes.func,
    onMouseUp: PropTypes.func,
    style: PropTypes.object,
  };

  state = {
    mouseDown: false,
  };

  _handleMouseDown = (event) => {
    this.setState({
      mouseDown: true,
    });

    if (this.props.onMouseDown) this.props.onMouseDown(event);
  };

  _handleMouseUp = (event) => {
    this.setState({
      mouseDown: false,
    });

    if (this.props.onMouseUp) this.props.onMouseUp(event);
  };

  render() {
    const {
      animate, // eslint-disable-line no-unused-vars
      link, // eslint-disable-line no-unused-vars
      onMouseDown, // eslint-disable-line no-unused-vars
      onMouseUp, // eslint-disable-line no-unused-vars
      style, // eslint-disable-line no-unused-vars
      ...others, // eslint-disable-line comma-dangle
    } = this.props;

    const styles = {
      button: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        whiteSpace: 'nowrap',
        flexShrink: '0',
        minWidth: '-webkit-min-content',
        minHeight: '20px',
        background: 'rgba(255,255,255,0.2)',
        border: 'none',
        borderRadius: '2px',
        cursor: 'pointer',
        padding: '10px 15px',
        height: '36px',
        color: '#FFF',
        fontFamily: '"Roboto", sans-serif',
        fontSize: '0.9em',
        textTransform: 'uppercase',
        textDecoration: 'none',
        transition: 'ease-out box-shadow .2s',
        outline: 'none',
      },

      buttonMouseDown: {
        boxShadow: '0 0 2px rgba(0,0,0,.12),0 2px 4px rgba(0,0,0,.24)',
      },

      buttonDisabled: {},
    };

    let buttonStyle;

    if (!this.props.disabled) {
      buttonStyle = Object.assign(
        {},
        styles.button,
        this.props.animate && this.state.mouseDown && styles.buttonMouseDown,
        this.props.style
      );
    }
    else {
      buttonStyle = Object.assign(
        {},
        styles.button,
        styles.buttonDisabled,
        this.props.style
      );
    }


    let elem;

    if (this.props.link) {
      elem = (
        <a
          onMouseDown={this._handleMouseDown}
          onMouseUp={this._handleMouseUp}
          style={buttonStyle}
          {...others}
        >
          {this.props.children}
        </a>
      );
    }
    else {
      elem = (
        <button
          onMouseDown={this._handleMouseDown}
          onMouseUp={this._handleMouseUp}
          style={buttonStyle}
          {...others}
        >
          {this.props.children}
        </button>
      );
    }

    return elem;
  }
}