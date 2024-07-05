import React from "react";
import { Form } from "react-router-dom";

export default function Contacts() {
  return (
    <main className="contact">
      <h2>Contact Us</h2>
      <Form action="Submit">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </Form>
    </main>
  );
}
