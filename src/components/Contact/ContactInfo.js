import React from 'react';

const ContactInfo = () => {
  return (
    <div className="contact-info content is-warning notification">
      <h3>Контактная информация:</h3>
      <h4>Григорий</h4>
      <address>тел: 8 800 555 3535</address>
      <address>email: contact@kalukali.pw</address>
      <br />
      <p>
        <strong>Режим работы: </strong>
        <br />
        <span>пн-сб 9:00 - 19:00</span>
      </p>
    </div>
  );
};

export default ContactInfo;
