import React, { Component } from 'react';
import ContactForm from './Contact'
import './ContactPage.css'

class ContactPage extends Component {
  
  submit = function(e) {
    console.log(e)
  }
  
  render() {
    return (
      <div className="contact-content">
        <h1>Contact Me</h1>
        <ContactForm onSubmit={this.submit} />
      </div>
    );
  }
}

export default ContactPage;
