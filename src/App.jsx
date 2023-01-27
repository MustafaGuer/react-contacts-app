import React, { useState } from "react";
import "./App.module.css";
import AddContact from "./components/AddContact/AddContact";
import ContactsList from "./components/ContactsList/ContactsList";

function App() {
  const dataFromStorage = JSON.parse(localStorage.getItem("contacts"));
  const [contactsList, setContactsList] = useState(dataFromStorage || []);

  const addContactHandler = (contact) => {
    setContactsList((prevContactsList) => {
      return [...prevContactsList, contact];
    });
  };

  if (contactsList.length > 0) {
    localStorage.setItem("contacts", JSON.stringify(contactsList));
  }

  const deleteContactsHandler = () => {
    localStorage.removeItem("contacts");
    setContactsList([]);
  };

  return (
    <div>
      <AddContact
        onAddContact={addContactHandler}
        contactsAmount={contactsList.length}
        onDeleteContacts={deleteContactsHandler}
      />
      ;
      <ContactsList contacts={contactsList} />;
    </div>
  );
}

export default App;
