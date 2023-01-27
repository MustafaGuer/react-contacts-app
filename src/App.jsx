import React, { useState } from "react";
import "./App.module.css";
import AddContact from "./components/AddContact/AddContact";
import ContactsList from "./components/ContactsList/ContactsList";

function App() {
  const dataFromStorage = JSON.parse(localStorage.getItem("users"));
  const [contactsList, setContactsList] = useState(dataFromStorage || []);

  const addContactHandler = (contact) => {
    setContactsList((prevContactsList) => {
      return [...prevContactsList, contact];
    });
  };

  localStorage.setItem("users", JSON.stringify(contactsList));

  return (
    <div>
      <AddContact onAddContact={addContactHandler} />;
      <ContactsList contacts={contactsList} />;
    </div>
  );
}

export default App;
