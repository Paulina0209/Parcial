import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import { StripeCardElement } from '@stripe/stripe-js'; // Importa el tipo de StripeCardElement

const stripePromise = loadStripe('tu_clave_publica_de_stripe');

const CheckoutForm: React.FC = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [paymentStatus, setPaymentStatus] = useState<string | null>(null);

  // Obtener el clientSecret desde el backend
  const handleGeneratePaymentIntent = async () => {
    try {
      const response = await axios.post('http://localhost:3000/payments/create-payment-intent', {
        amount: 1000, // Ejemplo: $10.00 (en centavos)
      });
      setClientSecret(response.data.clientSecret);
    } catch (error) {
      console.error('Error al generar el PaymentIntent:', error);
    }
  };

  // Manejar el envío del formulario de pago
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      console.error('Stripe no está cargado');
      return;
    }

    // Asegurarte de que el tipo sea StripeCardElement
    const cardElement = elements.getElement(CardElement) as StripeCardElement | null;

    if (!cardElement) {
      console.error('CardElement no está disponible');
      return;
    }

    const result = await stripe.confirmCardPayment(clientSecret as string, {
      payment_method: {
        card: cardElement,
      },
    });

    if (result.error) {
      console.error('Error al confirmar el pago:', result.error.message);
      setPaymentStatus('Error al realizar el pago');
    } else if (result.paymentIntent?.status === 'succeeded') {
      console.log('Pago realizado con éxito');
      setPaymentStatus('Pago realizado con éxito');
    }
  };

  return (
    <div>
      <h2>Checkout</h2>
      {!clientSecret ? (
        <button onClick={handleGeneratePaymentIntent}>Generar Intento de Pago</button>
      ) : (
        <form onSubmit={handleSubmit}>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: '16px',
                  color: '#424770',
                  letterSpacing: '0.025em',
                  fontFamily: 'Source Code Pro, monospace',
                  '::placeholder': {
                    color: '#aab7c4',
                  },
                },
                invalid: {
                  color: '#9e2146',
                },
              },
            }}
          />
          <button type="submit" disabled={!stripe || !clientSecret}>
            Pagar
          </button>
        </form>
      )}
      {paymentStatus && <p>{paymentStatus}</p>}
    </div>
  );
};

const Checkout: React.FC = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default Checkout;