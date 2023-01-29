import React, { useState, useRef } from "react";

import Card from "../../UI/Card/Card";
import Button from "../../UI/Button/Button";
import Wrapper from "../Helpers/Wrapper";

import styles from "./AddContact.module.css";
import ErrorModal from "../../UI/ErrorModal/ErrorModal";

const AddUser = (props) => {
  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

  const funInputRef = useRef();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const addContactHandler = (event) => {
    event.preventDefault();

    const funRef = funInputRef.current.value;
    console.log(funRef);
    if (
      firstName.trim().length === 0 ||
      lastName.trim().length === 0 ||
      email.trim().length === 0 ||
      age.trim().length === 0
    ) {
      props.onCallErrorModal({
        title: "Invalid input",
        message: "Please enter a valid input (non-empty values).",
      });
      return;
    }

    if (!emailRegex.test(email)) {
      props.onCallErrorModal({
        title: "Invalid email",
        message: "Please enter a valid email (jdoe@foo.bar)",
      });
      return;
    }

    if (+age < 1) {
      props.onCallErrorModal({
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
    funInputRef.current.value = ''; // normally u shouldn't change value in the dom with ref 
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
    <Wrapper>
      {props.onError && (
        <ErrorModal
          title={props.onError.title}
          message={props.onError.message}
          onConfirm={props.onCloseErrorModal}
          onDelete={props.onDelete}
          onConfirmDeleteError={props.onConfirmDeleteError}
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
          <label htmlFor="fun">Text unsaved (testing refs)</label>
          <input id="fun" ref={funInputRef} />
          <div className={styles.actions}>
            <Button type="submit">Add User</Button>
            {props.contactsAmount > 0 && <Button type="button" onClick={props.onDeleteContacts}>
              Delete Contacts
            </Button>}
          </div>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
