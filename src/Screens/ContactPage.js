import React from 'react';
import SubPageHeader from '../components/SubPageHeader';
import ContactForm from '../components/Contact/ContactForm';
import ContactInfo from '../components/Contact/ContactInfo';

const ContactPage = () => (
  <div className="container">
    <section className="section">
      <SubPageHeader
        title="Контакты"
        subtitle="Письменное обращение в тех.поддержку"
      />
      <div className="columns is-multiline">
        <div className="column is-12-touch is-8">
          <ContactForm />
        </div>
        <div className="column is-12-touch is-4">
          <ContactInfo />
        </div>
      </div>
    </section>
  </div>
);

export default ContactPage;
