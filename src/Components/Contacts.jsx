import React from "react";
import "../css/Contact.css";
import msg from "../assets/msg-icon.png";
import mail from "../assets/mail-icon.png";
import phone from "../assets/phone-icon.png";
import location from "../assets/location-icon.png";

const Contacts = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "1f1de27a-c07e-4763-9986-c04aae71fc62");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  }
  return (
    <>
      <div className="title">
        <p>CONTACT US</p>
        <h2>Get in Touch</h2>
      </div>
      <div className="contact">
        <div className="contact-col">
          <h3>
            Send us a message <img src={msg} alt="" />
          </h3>
          <p>
            Feel free to reach out through contact form or find our contact
            information below.Your feedback questions,and suggestions are
            important to us we strive to provide exceptional service to our
            university community.
          </p>

          <ul>
            <li>
              <img src={mail} alt="" /> educity@gmail.com
            </li>
            <li>
              <img src={phone} alt="" /> +1 123-456-7890
            </li>
            <li>
              <img src={location} alt="" /> 77 Massachusetts Ave,Cambridge{" "}
              <br /> MA 02139,United States.
            </li>
          </ul>
        </div>

            <div className="contact-col">
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter your Name"
            required
          />
          <br />
          <input
            type="tel"
            name="phone"
            placeholder="Enter your Number"
            required
          />
          <br />
          <textarea
            name="msg"
            placeholder="Your Message Here"
            required
          ></textarea>
          <br />
          <button type="submit" className="btn dark-btn">
            Submit now
          </button>
        </form>

        <span>{result}</span>
      </div>

      </div>
    </>
  );
};

export default Contacts;
