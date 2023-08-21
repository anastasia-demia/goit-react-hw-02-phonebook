import { Component } from 'react';
import { Section } from './Section/Section';
import { Button } from './Button/Button';
import { Form } from './Form/Form';
import { List } from './List/List';
import contacts from './Data/contacts.json';


export class App extends Component {
  state = {
    contacts: contacts,
    name: '',
    number: '',
    filter: '',
  };

  render() {

    return(
      <>
      <Section title="Phonebook">
        <Form name="Name" number="Number">
        <Button text="Add Contact" onBtnClick={this.addContact}/>
        </Form>
      </Section>
      <Section title="Contacts">
        <List data={contacts} >
        <Button text="Delete" onBtnClick={this.removeContact}/>
        </List>
      </Section>
      </>
    )
  }
};
