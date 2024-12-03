import "./Contact.css"
function Contact()
{
    return (
        <div className="container">
          <h2 id="ContactContainer">Contact Us</h2>
          <div className="card">
            <h2>Get in Touch</h2>
            <p>
              Need my services for a project, or want to recruit me, or just want to say hello, feel free to contact us.
            </p>
            <form>
              <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="Your email" />
              </div>
              <div>
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" placeholder="Your message"></textarea>
              </div>
              <button id ="button"type="submit">Submit</button>
            </form>
          </div>
        </div>
      );
}
export default Contact;