import React from 'react';

interface EmailTemplateProps {
  to_name: string;
  to_email: string;
  to_message: string;
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({ to_name, to_email, to_message }) => (
  <div>
    <h1>Correo enviado por: {to_name}</h1>
    <h3>Su correo es: {to_email}</h3>
    <p>{to_message}</p>
  </div>
);
