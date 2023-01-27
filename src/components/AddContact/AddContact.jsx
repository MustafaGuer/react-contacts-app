import React, { useState } from "react";

import Card from "../../UI/Card/Card";
import Button from "../../UI/Button/Button";

import styles from "./AddContact.module.css";
import ErrorModal from "../../UI/ErrorModal/ErrorModal";

const AddUser = (props) => {
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

  const addContactHandler = (event) => {
    event.preventDefault();

    if (
      firstName.trim().length === 0 ||
      lastName.trim().length === 0 ||
      email.trim().length === 0 ||
      age.trim().length === 0
    ) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid input (non-empty values).",
      });
      return;
    }

    if (!emailRegex.test(email)) {
      setError({
        title: "Invalid email",
        message: "Please enter a valid email (jdoe@foo.bar)",
      });
      return;
    }

    if (+age < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (>0)",
      });
      return;
    }

    const contact = {
      id: `u_${props.contactsAmount + 1}`,
      firstName: firstName,
      lastName: lastName,
      email: email,
      age: age,
    };

    props.onAddContact(contact);

    setFirstName("");
    setLastName("");
    setEmail("");
    setAge("");
  };

  const firstNameChangeHandler = (event) => {
    setFirstName(event.target.value);
  };

  const lastNameChangeHandler = (event) => {
    setLastName(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addContactHandler}>
          <label className={styles.label} htmlFor="firstName">
            First Name
          </label>
          <input
            id="firstName"
            type="text"
            value={firstName}
            onChange={firstNameChangeHandler}
          />
          <label className={styles.label} htmlFor="lastName">
            Last Name
          </label>
          <input
            id="lastName"
            type="text"
            value={lastName}
            onChange={lastNameChangeHandler}
          />
          <label htmlFor="email">E-Mail</label>
          <input
            id="email"
            type="text"
            value={email}
            onChange={emailChangeHandler}
          />
          <label className={styles.label} htmlFor="age">
            Age
          </label>
          <input
            value={age}
            onChange={ageChangeHandler}
            id="age"
            type="number"
          />
          <div className={styles.actions}>
            <Button type="submit">Add User</Button>
            <Button type="button" onClick={props.onDeleteContacts}>Delete Contacts</Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
