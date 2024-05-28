/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import emailjs from "emailjs-com";
function Contact() {
  const [formInput, setFormInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput({
      ...formInput,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "service_k06v70i";
    const templateID = "template_3druskl";
    const userID = "msvbbhIXqE_QcKuDE";

    emailjs.send(serviceID, templateID, formInput, userID).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Your message has been sent successfully.");
        setFormInput({
          name: "",
          email: "",
          message: "",
        });
      },
      (error) => {
        console.log("FAILED...", error);
        alert("Failed to send the message. Please try again later.");
      }
    );
  };

  return (
    <div
      id="contact"
      className="contact-container py-16 bg-blue-100 min-h-screen transition-colors duration-300 dark:bg-blue-900 dark:text-gray-300 flex flex-col items-center w-full"
    >
      <h2 className="text-4xl text-center font-bold mb-12">Contact Me</h2>
      <div className="contact-content flex flex-col md:flex-row justify-center items-center gap-10 w-full max-w-4xl px-4">
        <div className="contact-info flex-1 space-y-3">
          <h3 className="text-xl font-semibold">Contact Info</h3>
          <p>
            <strong>Phone:</strong>{" "}
            <span className="text-blue-600 dark:text-blue-300">
              951-463-0587
            </span>
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:jrodriguezlee2@gmail.com"
              className="underline text-blue-600 dark:text-blue-300 hover:text-blue-800 dark:hover:text-blue-500"
            >
              jrodriguezlee2@gmail.com
            </a>
          </p>
          <p>
            <strong>Github:</strong>{" "}
            <a
              href="https://github.com/julianrodriguez2"
              className="underline text-blue-600 dark:text-blue-300 hover:text-blue-800 dark:hover:text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              julianrodriguez2
            </a>
          </p>
          <p>
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/julian-rodriguez-653a06216"
              className="underline text-blue-600 dark:text-blue-300 hover:text-blue-800 dark:hover:text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              julian-rodriguez-653a06216
            </a>
          </p>
        </div>

        <form
          className="contact-form space-y-4 w-full max-w-md"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formInput.name}
            onChange={handleChange}
            required
            className="input bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-300 rounded-lg block w-full p-2.5"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formInput.email}
            onChange={handleChange}
            required
            className="input bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-300 rounded-lg block w-full p-2.5"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formInput.message}
            onChange={handleChange}
            required
            className="textarea bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-300 rounded-lg block w-full p-2.5"
            rows="4"
          ></textarea>
          <button
            type="submit"
            className="btn bg-blue-500 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
