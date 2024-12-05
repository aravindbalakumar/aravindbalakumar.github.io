
import "./Contact.css"
import {GetSocialMedia} from "./../../Components/utils";
function Contact() {
  return (
    <>

      <div id="Contact_card">
        <h2>Get in Touch</h2>

        <form id="contact_form">
          <p>
            Need my services for a project, or want to recruit me, or just want to say hello, feel free to contact.
          </p>
          <div id="contact_label_value">
            <label htmlFor="name">Name</label>
            <div id="line" />
            <input type="text" id="name" name="name" placeholder="Your name" />
          </div>
          <div id="contact_label_value">
            <label htmlFor="email">Email</label>
            <div id="line" />
            <input type="email" id="email" name="email" placeholder="Your email" />
          </div>
          <div id="contact_label_value">
            <label htmlFor="message">Message</label>
            <div id="line" />
            <textarea id="message" name="message" placeholder="Your message"></textarea>
          </div>
          <button id="button" type="submit">Submit</button>
        </form>
      </div>
      <div id="contact_connect">
      <h4>Connect with me below</h4>
                        <GetSocialMedia/>
                    
                    </div>
    </>
  );
}
export default Contact;