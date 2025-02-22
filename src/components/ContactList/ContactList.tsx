import React from "react";
import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";
import { ContactType } from "../../types";

type ContactListProp = {
  contacts: ContactType[];
  onDelete: (id: string) => void;
};

const ContactList: React.FC<ContactListProp> = ({ contacts, onDelete }) => {
  return (
    <div className={styles.box}>
      <ul className={styles.list}>
        {contacts.map((contacts) => (
          <li className={styles.item} key={contacts.id}>
            <Contact data={contacts} onDelete={onDelete} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
