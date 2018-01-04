import React from 'react';
import Footer from '../Footer';
import getShadow from '../getShadow';

export default class ConfirmationPage extends React.Component {
  static displayName = 'ConfirmationPage';

  componentWillMount() {
    if (!window.URLSearchParams) return;

    const paramsString = window.location.search;
    const searchParams = new URLSearchParams(paramsString);

    if (searchParams.get('tx')) {
      window.postMessage({
        type: 'B&F',
        tx: searchParams.get('tx'),
        amt: searchParams.get('amt'),
        cc: searchParams.get('cc'),
        itemName: searchParams.get('item_name'),
        st: searchParams.get('st'),
      }, '*');
    }
  }

  render() {
    const styles = {
      container: {
        display: 'flex',
        flexDirection: 'column',
        height: 'calc(100% - 56px)',
      },

      card: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        boxSizing: 'border-box',
        padding: '20px',
        width: '100%',
        height: 'calc(100% - 100px)',
        boxShadow: getShadow('2dp'),
        background: '#212121',
        color: '#FAFAFA',
      },

      logoContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },

      logo: {
        width: '250px',
        height: 'auto',
      },

      messageContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '30px',
      },

      header: {
        fontSize: '30px',
        marginBottom: '30px',
      },

      message: {
        maxWidth: '500px',
        textAlign: 'center',
      },
    };

    return (
      <div style={styles.container}>
        <div style={styles.card}>
          <div style={styles.logoContainer}>
            <img style={styles.logo} src="img/logo.png" />
          </div>
          <div style={styles.messageContainer}>
            <div style={styles.header}>Thank you!</div>
            <div style={styles.message}>
              Your transaction has been completed, and a receipt for your purchase has been emailed to you. You may log into your account at www.paypal.com to view details of this transaction.
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}