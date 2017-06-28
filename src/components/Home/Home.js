import React from 'react';
import PropTypes from 'prop-types';
import Banner from '../Banner';
import Quote from '../Quote';
import Stats from '../Stats';
import Options from '../Options';
import MoreOptions from '../MoreOptions';
import Privacy from '../Privacy';
import Support from '../Support';
import Footer from '../Footer';

export default class Root extends React.Component {
  static propTypes = {
    style: PropTypes.object,
  };

  render() {
    const styles = {
      container: {
        width: '100%',
      },

      stripe: {
        background: '#F5F5F5',
      },
    };

    return (
      <div style={Object.assign({}, styles.container, this.props.style)}>
        <Banner />
        <Quote />
        <Stats style={styles.stripe} />
        <Options />
        <MoreOptions style={styles.stripe} />
        <Privacy id="privacy" />
        <Support id="support" style={styles.stripe} />
        <Footer />
      </div>
    );
  }
}