import React, { useState } from "react";
import "./App.module.css";
import AddContact from "./components/AddContact/AddContact";
import ContactsList from "./components/ContactsList/ContactsList";

function App() {
  const dataFromStorage = JSON.parse(localStorage.getItem("contacts"));
  const [contactsList, setContactsList] = useState(dataFromStorage || []);
  const [error, setError] = useState();
  const [deleteError, setDeleteError] = useState();

  const addContactHandler = (contact) => {
    setContactsList((prevContactsList) => {
      return [...prevContactsList, contact];
    });
  };

  if (contactsList.length > 0) {
    localStorage.setItem("contacts", JSON.stringify(contactsList));
  }

  const deleteContactsHandler = () => {
    setDeleteError(true);
    setError({
      title: "Important!",
      message: "If u click agree, all your contacts will be delete!",
    });
  };
  
  const confirmDeleteError = () => {
    localStorage.removeItem("contacts");
    setContactsList([]);
    closeErrorModal();
  }

  const callErrorModal = (err) => {
    setError({
      title: err.title,
      message: err.message,
    });
  };

  const closeErrorModal = () => {
    setDeleteError(null);
    setError(null);
  };

  return (
    <>
      <AddContact
        onAddContact={addContactHandler}
        contactsAmount={contactsList.length}
        onDeleteContacts={deleteContactsHandler}
        onCallErrorModal={callErrorModal}
        onCloseErrorModal={closeErrorModal}
        onError={error}
        onDelete={deleteError}
        onConfirmDeleteError={confirmDeleteError}
      />
      ;
      <ContactsList contacts={contactsList} />;
    </>
  );
}

export default App;
