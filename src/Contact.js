import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Layout from './Layout';

function Contact() {
  const [state, handleSubmit] = useForm("mgvzyvpd");

  return (
    <Layout>
      <div className="contact-wrapper">
        <div className="contact-card">
          <h2 className="contact-heading">Inbox Open!</h2>
          <p className="contact-subtext">Feel free to reach out — I’d love to connect.</p>

          {state.succeeded ? (
            <p className="thank-you-text">✅ Thanks! I’ll get back to you soon.</p>
          ) : (
            <form onSubmit={handleSubmit} className="form-minimal">
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Your Name"
                required
              />

              <input
                id="email"
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} className="contact-error" />

              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                required
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} className="contact-error" />

              <button type="submit" disabled={state.submitting}>
                {state.submitting ? "Sending..." : "Send"}
              </button>

            </form>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
