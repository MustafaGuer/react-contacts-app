import React, { useState } from "react";

import Card from "../../UI/Card/Card";
import Button from "../../UI/Button/Button";

import styles from "./AddUser.module.css";

const AddUser = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const addContactHandler = (event) => {
    event.preventDefault();
    const contact = {
      id: null,
      first_name: firstName,
      last_name: lastName,
      email: email,
      age: age,
    };

    console.log(contact);
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

  return (
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
          type="email"
          value={email}
          onChange={emailChangeHandler}
        />
        <label className={styles.label} htmlFor="age">
          Age
        </label>
        <input value={age} onChange={ageChangeHandler} id="age" type="number" />
        <Button type='submit'>Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
