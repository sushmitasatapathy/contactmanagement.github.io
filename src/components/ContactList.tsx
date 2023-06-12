// ContactList.tsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContactItem from './ContactItem';
import { RootState } from '../store';
import { deleteContact } from '../store/contacts/actions.js';

interface ContactListProps {
  searchTerm: string;
  filter: string;
}

const ContactList: React.FC<ContactListProps> = ({ searchTerm, filter }) => {
  const contacts = useSelector((state: RootState) => state.contacts.contacts);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter((contact: any) => {
    const { fullName, email, phoneNumber, country, status } = contact;
    const searchTermLower = searchTerm.toLowerCase();
    const filterLower = filter.toLowerCase();

    const matchSearchTerm =
      (fullName && fullName.toLowerCase().includes(searchTermLower)) ||
      (email && email.toLowerCase().includes(searchTermLower)) ||
      (phoneNumber && phoneNumber.toLowerCase().includes(searchTermLower)) ||
      (country && country.toLowerCase().includes(searchTermLower));

    const matchFilter = filterLower === 'all' || (status && status.toLowerCase() === filterLower);

    return matchSearchTerm && matchFilter;
  });

  const handleEditContact = (contactId: string) => {
    // Implement the logic to edit the contact with the given ID
    console.log('Edit contact with ID:', contactId);
  };

  const handleDeleteContact = (contactId: string) => {
    // Implement the logic to delete the contact with the given ID
    dispatch(deleteContact(contactId));
  };

  if (!filteredContacts || filteredContacts.length === 0) {
    return (
      <div className="container shadow-lg rounded-lg p-4">
        <div className="details">
          <div>Full Name: Sushmita Satapathy</div>
          <div>Email: sushmitag.satapathy@gmail.com</div>
          <div>Phone Number: +91 7715835889</div>
          <div>Country: India</div>
          <div>Status: Active</div>
          <div>City: THANE (EAST)</div>
        </div>
        <div className="buttons">
          <button className="bg-black text-white px-4 py-2 mt-2 mr-2" onClick={() => handleEditContact('1')}>
            Edit
          </button>
          <button className="bg-black text-white px-4 py-2 mt-2" onClick={() => handleDeleteContact('1')}>
            Delete
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      {filteredContacts.map((contact: any) => (
        <ContactItem
          key={contact.id}
          contact={contact}
          onEdit={() => handleEditContact(contact.id)}
          onDelete={() => handleDeleteContact(contact.id)}
        />
      ))}
    </div>
  );
};

export default ContactList;
