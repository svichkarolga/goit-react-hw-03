import React from 'react';
import Contact from '../Contact/Contact';
import styles from "./ContactList.module.css"

const ContactList = ({ contacts , onDelete}) => {
  return (
      <div className={styles.box}>
          <ul className={styles.list}>
              {contacts.map((contacts) => (
                  <li className={styles.item} key={contacts.id}>
                  <Contact data={contacts} onDelete={onDelete} />
                  </li>))}
          </ul>
    </div>
  )
}

export default ContactList