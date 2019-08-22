import React from "react";
import StripeCheckout from "react-stripe-checkout";

import logo from "../../assets/crown.svg";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_2HSEeChIcDGWDeEHzbA7K4sM00AwlMsaTF";

  const onToken = token => {
    console.log(token);
    alert("Payment Successful");
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
