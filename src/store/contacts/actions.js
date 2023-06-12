// ../store/contacts/actions.js

export const deleteContact = (contactId) => {
    // Perform the necessary logic to delete a contact
    // This can include making an API request or updating the state
  
    // Return an action object
    return {
      type: 'DELETE_CONTACT',
      payload: contactId,
    };
  };

  export const updateContact = (updatedContact) => {
    // Perform the necessary logic to update a contact
    // This can include making an API request or updating the state
  
    // Return an action object
    return {
      type: 'UPDATE_CONTACT',
      payload: updatedContact,
    };
  };
 
  
  
  
  
  
  
  
  