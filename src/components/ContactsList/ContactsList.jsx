import React from "react";

import Card from "../../UI/Card/Card";

import styles from "./ContactsList.module.css";

const UsersList = (props) => {
  return (
    <Card className={styles.contacts}>
      <ul>
        {props.contacts.map((contact) => (
          <li key={contact.id}>
            {contact.firstName} {contact.lastName} ({contact.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
