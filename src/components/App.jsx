import { Component } from 'react';
import { Section } from './Section/Section';
// import { Button } from './Button/Button';
import { Form } from './Form/Form';
import { List } from './List/List';
import { nanoid } from 'nanoid';
import startingContacts from '../data/contacts.json';
import { Filter } from './Filter/Filter';


export class App extends Component {
  state = {
    contacts: startingContacts,
    filter: '',
  };

  addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    this.setState(({ contacts }) => ({
      contacts: [...contacts, contact],
    }));
  };

  removeContact = ID => {
    this.setState({
      contacts: this.state.contacts.filter((contact) => contact.id !== ID),
    });
  };

  clickOnBtn = () => {
    console.log("click bbb");
  }

  onXBtnClick = () => {
    this.setState({ filter: '' });
  };

  filterChange = (event) => {
    this.setState({ filter: event.target.value });
  };

  render() {
    const { contacts, filter } = this.state;

    return(
      <>
      <Section title="Phonebook">
        <Form currentContacts={contacts} onSubmit={this.addContact}></Form>
      </Section>
      <Section title="Contacts">
        <Filter filter={filter} onClear={this.onXBtnClick} onChange={this.filterChange}></Filter>
        <List data={contacts} onDelete={this.removeContact}></List>
      </Section>
      </>
    )
  }
};
