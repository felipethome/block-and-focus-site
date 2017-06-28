import React from 'react';
import PropTypes from 'prop-types';

export default class Description extends React.Component {
  static propTypes = {
    children: PropTypes.any,
    style: PropTypes.object,
    text: PropTypes.string,
    textColor: PropTypes.string,
    title: PropTypes.string,
    titleColor: PropTypes.string,
  };

  render() {
    const styles = {
      container: {
        display: 'flex',
        flexDirection: 'column',
        width: '80%',
        textAlign: 'center',
        marginBottom: '20px',
      },

      title: {
        fontWeight: '500',
        fontSize: '35px',
        marginBottom: '20px',
        color: this.props.titleColor || '#212121',
      },

      text: {
        fontSize: '18px',
        color: this.props.textColor || '#424242',
      },
    };

    const content = this.props.text ? this.props.text : this.props.children;

    return (
      <div style={Object.assign({}, styles.container, this.props.style)}>
        <div style={styles.title}>{this.props.title}</div>
        <div style={styles.text}>{content}</div>
      </div>
    );
  }
}