import React from "react";

import Card from "../../UI/Card/Card";

import styles from "./ContactsList.module.css";

const UsersList = (props) => {
  if (props.contacts.length === 0) return;

  return (
    <Card className={styles.contacts}>
      <ul>
        {props.contacts.map((contact) => (
          <li key={contact.id}>
            {contact.firstName} {contact.lastName} ({contact.age} years old):{" "}
            {contact.email}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
