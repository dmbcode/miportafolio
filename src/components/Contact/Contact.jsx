import React, { useState } from 'react';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import './Contact.scss';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formsubmit.co/ajax/dmbcode99@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setSubmitStatus('success');
        e.target.reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="contact section">
      <div className="container">
        <h2 className="section-title">Envíame un <span>Mensaje</span></h2>

        <div className="contact-container">
          <div className="contact-info">
            <h3>¡Trabajemos Juntos!</h3>
            <p>
              ¿Tienes algún proyecto en mente o simplemente quieres decir hola?
              Me encantaría saber de ti. Llena el formulario y te responderé lo más pronto posible.
            </p>

            <div className="contact-details">
              <div className="detail-item">
                <div className="icon"><FiMail /></div>
                <div>
                  <h4>Email</h4>
                  <p>dmbcode99@gmail.com</p>
                </div>
              </div>

              <div className="detail-item">
                <div className="icon"><FiPhone /></div>
                <div>
                  <h4>Teléfono</h4>
                  <p>+57 3505490806</p>
                </div>
              </div>

              <div className="detail-item">
                <div className="icon"><FiMapPin /></div>
                <div>
                  <h4>Ubicación</h4>
                  <p>Bogotá, Colombia</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nombre</label>
                <input type="text" name="name" id="name" placeholder="Tu nombre" required />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" placeholder="tu@correo.com" required />
              </div>

              <div className="form-group">
                <label htmlFor="message">Mensaje</label>
                <textarea name="message" id="message" placeholder="¿Cómo puedo ayudarte?" required></textarea>
              </div>

              <button type="submit" className="btn-submit" disabled={isSubmitting}>
                {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
              </button>

              {submitStatus === 'success' && (
                <p className="success-message">¡Mensaje enviado con éxito! Te contactaré pronto.</p>
              )}
              {submitStatus === 'error' && (
                <p className="error-message">Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
