import { useState } from "react";
import "./Contact.css"
import { ref,push } from "firebase/database";
import { database } from "./../../Components/utils";
import {GetSocialMedia} from "./../../Components/utils";
function Contact() {
  // Used for handling form data(could have been better)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  // Used for error handling(could have been better)
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });
 // called whenever data is changed or called
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    // Name validation
    if (!formData.name) {
      newErrors.name = 'Name is required.';
      isValid = false;
    }

    // Email validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formData.email || !emailPattern.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
      isValid = false;
    }

    // Message validation
    if (!formData.message) {
      newErrors.message = 'Message is required.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // called when submit is done
  const handleSubmit = async(e) => {
    e.preventDefault(); // remove

    if (validateForm()) {
      setErrors(null);
      const newSubmissionRef = ref(database, 'contactFormSubmissions/' + Date.now()); // Using timestamp as unique ID
      await push(newSubmissionRef, formData);//wait for the push to finish
      alert('Your message has been sent!'); //show alert
      setFormData({ name: '', email: '', message: '' }); // Resets name email and message entry
    }
    
  };

  return (
    <>
<center>
      <div id="Contact_card">
        <h2>Get in Touch</h2>

        <form id="contact_form" onSubmit={handleSubmit}>
          <p>
            Need my services for a project, or want to recruit me, or just want to say hello, feel free to contact.
          </p>
          <div id="contact_label_value">
            <label htmlFor="name">Name</label>
            <hr id="line" />
            <input type="text" id="name" name="name" placeholder="Your name" value={formData.name} onChange={handleChange}/>
            {errors?errors.name ? <div style={{ color: 'var(--color)' }}>{errors.name}</div>:<></>:<></>}
          </div>
          <div id="contact_label_value">
            <label htmlFor="email">Email</label>
            <hr id="line" />
            <input type="email" id="email" name="email" placeholder="Your email" value={formData.email} onChange={handleChange}/>
            {errors?errors.email ? <div style={{ color: 'var(--color)' }}>{errors.email}</div>:<></>:<></>}
          </div>
          <div id="contact_label_value">
            <label htmlFor="message">Message</label>
            <hr id="line" />
            <textarea id="message" name="message" placeholder="Your message" value={formData.message} onChange={handleChange}></textarea>
            {errors?errors.message ? <div style={{ color: 'var(--color)' }}>{errors.message}</div>:<></>:<></>}
          </div>
          
          <button id="button" type="submit">Submit</button>
        </form>
      </div>
      </center>
      <div id="contact_connect">
      <h4>Connect with me below</h4>
                        <GetSocialMedia/>
                    
                    </div>
    </>
  );
}
export default Contact;