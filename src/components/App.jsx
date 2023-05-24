import { Component } from 'react';
import { Section } from './Section/Section';
import { Button } from './Button/Button';
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
        <Button text="Add Contact"/>
      </Section>
      <Section
      title="Contacts"
      ></Section>
      </>
    )
  }
};
