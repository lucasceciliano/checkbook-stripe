import { loadStripe } from '@stripe/stripe-js';
import React, { useState } from 'react';
import Livro from '../assets/mockup-livro.png';

import {
  Container,
  Content,
  ContentText,
  ButtonPrice,
} from './styles';



let stripePromise: any

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe("pk_test_51KjqnAGIHStwbsnBu8cH3dgn2GXEMGcMQiPx6IUINjUo3ZP5Aqr0HisEfIYCup9AO1A3cqyjjxg4MlWpclQG3puA006jxB4Sif")
  }

  return stripePromise;
};


export function Pages() {

  const [stripeError, setStripeError] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const item = {
    price: "price_1KjqvAGIHStwbsnBmR5dFXot",
    quantity: 1
  };

  const checkoutOptions = {
    lineItems: [item],
    mode: "payment",
    successUrl: `${window.location.origin}/success`,
    cancelUrl: `${window.location.origin}/cancel`
  };

  const redirectToCheckout = async () => {
    setLoading(true);
    console.log("redirectToCheckout");

    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout(checkoutOptions);
    console.log("Stripe checkout error", error);

    if (error) setStripeError(error.message);
    setLoading(false);
  };

  if (stripeError) alert(stripeError);

  return (
    <Container>
      <Content>
        <img src={Livro} alt='livro' />
        <ContentText>
          <h1>MEU LIVRO</h1>
          <p>Lorem Ipsum is simply dummy text of
            the printing and typesetting industry.
            Lorem Ipsum has been the industry's
            standard dummy text ever since the
            1500s, when an unknown printer took
            a galley of type and scrambled it to
            make a type specimen book. </p>

          <ButtonPrice>
            <button onClick={redirectToCheckout} disabled={isLoading} >Comprar</button>
            <strong>$20</strong>
          </ButtonPrice>
        </ContentText>
      </Content>
    </Container>
  )
}   