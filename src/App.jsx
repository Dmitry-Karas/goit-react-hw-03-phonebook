import Swal from "sweetalert2";
import { nanoid } from "nanoid";
import { Component } from "react";
import { Section } from "./components/Section/Section";
import { Container } from "./components/Container/Container";
import { ContactForm } from "./components/ContactForm/ContactForm";
import { ContactList } from "./components/ContactList/ContactList";
import { Filter } from "./components/Filter/Filter";
import { RiContactsBook2Fill, RiContactsFill } from "react-icons/ri";

export default class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
      { id: "id-5", name: "Dmitry Karas", number: "511-56-96" },
    ],
    filter: "",
  };

  checkContact = (name, number) => {
    const { contacts } = this.state;

    const includedName = contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

    const includedNumber = contacts.find(
      (contact) =>
        contact.number.replace(/[^0-9]/g, "") === number.replace(/[^0-9]/g, "")
    );

    if (includedName) {
      return Swal.fire({
        position: "center",
        icon: "error",
        title: `${name.toUpperCase()}\nis already in contacts!`,
        confirmButtonColor: "indianred",
      });
    }

    if (includedNumber) {
      return Swal.fire({
        position: "center",
        icon: "error",
        title: `This number is already in contacts as\n${includedNumber.name.toUpperCase()}`,
        confirmButtonColor: "indianred",
      });
    }
  };

  deleteContact = (contactId) => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter((contact) => contact.id !== contactId),
    }));
  };

  handleFormSubmit = ({ name, number }) => {
    const includedContact = this.checkContact(name, number);

    if (includedContact) {
      return;
    }

    const id = nanoid();

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, { id, name, number }],
    }));
  };

  handleFilterInputChange = (value) => {
    this.setState({ filter: value.toLowerCase() });
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(filter) ||
        contact.number.includes(filter)
    );

    return (
      <>
        <Section>
          <Container>
            <h1>
              <RiContactsBook2Fill />
              Phonebook
            </h1>
            <ContactForm onSubmit={this.handleFormSubmit} />
            {contacts.length > 0 && (
              <>
                <h2>
                  <RiContactsFill />
                  Contacts
                </h2>
                <Filter onChange={this.handleFilterInputChange} />
                <ContactList
                  contacts={filteredContacts}
                  onDeleteContact={this.deleteContact}
                />
              </>
            )}
          </Container>
        </Section>
      </>
    );
  }
}
