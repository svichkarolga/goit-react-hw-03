import { useEffect, useState } from "react";
import "./App.css";
import initialContacts from "./contacts.json";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import { ContactType } from "./types";

const App: React.FC = () => {
  const [contacts, setContacts] = useState<ContactType[]>(() => {
    const stringifiedContacts = localStorage.getItem("contacts");
    const parsedContacts: ContactType[] =
      JSON.parse(stringifiedContacts || "[]") ?? initialContacts;
    return parsedContacts;
  });
  const [filter, setFilter] = useState<string>("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const onAddContacts = (newContact: ContactType) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  const onDeleteContacts = (contactId: string) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAdd={onAddContacts} />
        <SearchBox value={filter} onFilter={setFilter} />
        <ContactList contacts={visibleContacts} onDelete={onDeleteContacts} />
      </div>
    </>
  );
};

export default App;
