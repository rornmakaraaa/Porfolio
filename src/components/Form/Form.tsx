import React, { useEffect, useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { toast, ToastContainer } from 'react-toastify';
import validator from 'validator';
import { Container, ContainerSucces } from './styles';
import 'react-toastify/dist/ReactToastify.css';

export function Form() {
  const [state, handleSubmit] = useForm('manyzdvd');
  const [validEmail, setValidEmail] = useState(false);
  const [message, setMessage] = useState('');

  // Email validation function
  function verifyEmail(email: string) {
    setValidEmail(validator.isEmail(email));
  }

  // Toast notification for successful form submission
  useEffect(() => {
    if (state.succeeded) {
      toast.success('Email successfully sent!', {
        position: toast.POSITION.BOTTOM_LEFT,
        pauseOnFocusLoss: false,
        closeOnClick: true,
        hideProgressBar: false,
        toastId: 'succeeded',
      });
    }
  }, [state.succeeded]);

  // Successful submission view
  if (state.succeeded) {
    return (
      <ContainerSucces>
        <h3>Thanks for getting in touch!</h3>
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          Back to the top
        </button>
        <ToastContainer />
      </ContainerSucces>
    );
  }

  // Form structure
  return (
    <Container>
      <h2>Get in touch using the form</h2>
      <form onSubmit={handleSubmit}>
        {/* Email Input */}
        <input
          placeholder="Email"
          id="email"
          type="email"
          name="email"
          onChange={(e) => {
            verifyEmail(e.target.value);
          }}
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        {/* Message Input */}
        <textarea
          required
          placeholder="Send a message to get started."
          id="message"
          name="message"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />

        {/* Submit Button */}
        <button
          type="submit"
          disabled={state.submitting || !validEmail || !message}
        >
          Submit
        </button>
      </form>

      <ToastContainer />
    </Container>
  );
}