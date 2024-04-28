import React from 'react';
import PropTypes from 'prop-types';

function ContactListItem({ contact, deleteContact }) {
  const handleDelete = () => {
    deleteContact(contact.id);
  };

  return (
    <li>
      {contact.name} - {contact.number}
      <button className="delete-button" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
}

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactListItem;
