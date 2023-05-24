import { Component } from 'react';
import { Section } from './Section/Section';
import { Button } from './Button/Button';

export class App extends Component {
  state = {
    contacts: [],
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
      title="Find Contacts By Name"
      >
        <Button text="Find"/>
      </Section>
      <Section
      title="Contacts"
      >
        <Button text="Delete"/>
      </Section>
      </>
    )
  }
};
