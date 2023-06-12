import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';


const ContactDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const contacts = useSelector((state: any) => state.contacts);
  const contact = contacts.find((c: any) => c.id === id);

  return (
    <div>
      <h3>{contact.name}</h3>
      <p>{contact.email}</p>
      <p>{contact.status}</p>
      {/* Add edit and delete functionality */}
    </div>
  );
};

export default ContactDetails;
