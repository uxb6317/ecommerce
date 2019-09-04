import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

import logo from '../../assets/crown.svg';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_2HSEeChIcDGWDeEHzbA7K4sM00AwlMsaTF';

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    })
      .then(response => {
        alert('Payment Successful');
      })
      .catch(error => {
        console.log(`Payment error: ${JSON.parse(error)}`);
        alert(
          'There was an issue with your payment. Please make sure to use the provided credit card.'
        );
      });
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN CLothing Ltd.'
      billingAddress
      shippingAddress
      image={logo}
      description={`Your total is $${price}.`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
