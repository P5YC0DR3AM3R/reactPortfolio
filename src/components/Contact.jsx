import React from 'react';
import styled from 'styled-components';

const ContactSection = styled.section`
  padding: 20px;
  background-color: #f0f0f0;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
`;
const FormField = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

function Contact() {
  return (
    <ContactSection>
      <h2>Contact Me</h2>
      <ContactForm>
        <FormField>
          <Label htmlFor="name">Name</Label>
          <Input type="text" id="name" name="name" required />
        </FormField>
        <FormField>
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" name="email" required />
        </FormField>
        <FormField>
          <Label htmlFor="message">Message</Label>
          <TextArea id="message" name="message" rows="4" required></TextArea>
        </FormField>
        <Button type="submit">Submit</Button>
      </ContactForm>
    </ContactSection>
  );
}

export default Contact;