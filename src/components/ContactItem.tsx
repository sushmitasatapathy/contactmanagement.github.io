// ContactItem.tsx
import React from 'react';

interface ContactItemProps {
  contact: {
    id: string;
    fullName: string;
    email: string;
    phoneNumber: string;
    country: string;
    status: string;
    city: string;
  };
  onEdit: () => void;
  onDelete: () => void;
}

const ContactItem: React.FC<ContactItemProps> = ({ contact, onEdit, onDelete }) => {
  const { fullName, email, phoneNumber, country, status, city } = contact;

  return (
    <div className="container shadow-lg rounded-lg p-4">
      <div className="details">
        <div>Full Name: {fullName}</div>
        <div>Email: {email}</div>
        <div>Phone Number: {phoneNumber}</div>
        <div>Country: {country}</div>
        <div>Status: {status}</div>
        <div>City: {city}</div>
      </div>
      <div className="buttons">
        <button className="bg-black text-white px-4 py-2 mt-2 mr-2" onClick={onEdit}>
          Edit
        </button>
        <button className="bg-black text-white px-4 py-2 mt-2" onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default ContactItem;
