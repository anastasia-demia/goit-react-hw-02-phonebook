import { Component } from 'react';
import { Section } from './Section/Section';
import { Button } from './Button/Button';
import { Form } from './Form/Form';
import contacts from './Data/contacts.json';


export class App extends Component {
  state = {
    contacts: contacts,
    name: "",
  };



  render() {


    return(
      <>
      <Section
      title="Phonebook">
        <Form>
          name="Name"
          number="Number"
        </Form>
        <Button text="Add Contact"/>
      </Section>
      <Section
      title="Contacts"
      ></Section>
      </>
    )
  }
};
