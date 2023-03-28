import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <main>
          <h1>Contact Us</h1>
          <form>
            <div>
              <label htmlFor="">Name</label>
              <input type="text" required placeholder="Rohan" />
            </div>
            <div>
              <label htmlFor="">Email</label>
              <input type="email" required placeholder="rohan@email.com" />
            </div>
            <div>
              <label htmlFor="">Message</label>
              <input
                type="text"
                required
                placeholder="Tell Us About Your Query ..."
              />
            </div>
            <button type="submit">Send</button>
          </form>

      </main>
    </div>
  );
};

export default Contact;
