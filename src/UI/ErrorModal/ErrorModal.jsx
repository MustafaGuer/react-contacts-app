import React, { Fragment } from "react";

import Card from "../Card/Card";
import Button from "../Button/Button";

import styles from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <Fragment>
      <React.Fragment>
        <div className={styles.backdrop} onClick={props.onConfirm}></div>
        <Card className={styles.modal}>
          <header className={styles.header}>
            <h2>{props.title}</h2>
          </header>
          <div className={styles.content}>
            <p>{props.message}</p>
          </div>
          <footer className={styles.actions}>
            {props.onDelete ? (
              <Button onClick={props.onConfirmDeleteError}>Okay</Button>
            ) : (
              <Button onClick={props.onConfirm}>Okay</Button>
            )}
            {props.onDelete && (
              <Button onClick={props.onConfirm}>Cancel</Button>
            )}
          </footer>
        </Card>
      </React.Fragment>
    </Fragment>
  );
};

export default ErrorModal;
