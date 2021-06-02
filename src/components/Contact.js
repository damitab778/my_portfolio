import React, { useEffect, useRef, useState } from "react";
import "../style/Contact.css";
import emailjs from "emailjs-com";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import Footer from "./Footer";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSRulePlugin);
function Contact() {
  const [width, setWidth] = useState(650);
  const wrapper = useRef(null);
  useEffect(() => {
    const [elements] = wrapper.current.children;
    const header = elements.querySelector(".contact__header");
    gsap.fromTo(
      header,
      { x: "-=400", opacity: 0 },
      {
        duration: 2.5,
        opacity: 1,
        delay: 0.1,
        x: "+=400",
        scrollTrigger: {
          trigger: header,
          start: "top 30%",
        },
        ease: "elastic",
      }
    );
  }, []);
  useEffect(() => {
    const [elements] = wrapper.current.children;
    const header = elements.querySelector(".contact__header");
    const form = elements.querySelector(".form__wrapper");
    function detectMob() {
      if (window.innerWidth <= 600) {
        setWidth(300);
      } else {
        setWidth(650);
      }
    }
    detectMob();

    gsap.fromTo(
      form,
      { width: 0, opacity: 0 },
      {
        duration: 2.5,
        opacity: 1,
        width: width,
        delay: 0.4,
        scrollTrigger: {
          trigger: header,
          start: "top 30%",
        },
        ease: "elastic",
      }
    );
  }, [width]);

  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subjectError, setSubjectError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [send, setSend] = useState("");
  const onSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const onMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (subject === "") {
      setSubjectError("Enter subject");
    } else {
      setSubjectError("");
    }
    if (message === "") {
      setMessageError("Enter message");
    } else {
      setMessageError("");
    }
    if (email === "") {
      setEmailError("Enter email");
    } else {
      setEmailError("");
    }
    if (subject && message && email) {
      emailjs
        .sendForm(
          "service_rqod9ro",
          "template_atglq37",
          event.target,
          "user_v7CsScImDz79uoCXLx255"
        )
        .then(
          (result) => {
            console.log(result.text);
            if (result.text === "OK") {
              setSend("Your message was sent successfully");
            }
          },
          (error) => {
            console.log(error.text);
          }
        );

      event.target.reset();
      setSubject("");
      setMessage("");
      setEmail("");
    }
  };
  return (
    <div className="contact" id="con" ref={wrapper}>
      <div className="contact__wrapper">
        <h1 className="contact__header">Hire me!</h1>
        <form className="form__wrapper" onSubmit={handleSubmit}>
          <div className="input__block">
            <label htmlFor="subject" className="label">
              Subject
            </label>
            <input
              type="text"
              className="subject"
              id="subject"
              name="subject"
              onChange={onSubjectChange}
              placeholder="enter subject.."
            />
          </div>
          <p className="input__error">{subjectError}</p>
          <div className="input__block">
            <label htmlFor="email" className="label">
              Email
            </label>
            <input
              type="email"
              className="email"
              id="email"
              name="email"
              onChange={onEmailChange}
              placeholder="enter email.."
            />
          </div>
          <p className="input__error">{emailError}</p>
          <div className="input__block">
            <label htmlFor="message" className="label">
              Message
            </label>
            <textarea
              className="textarea"
              placeholder="your message.."
              cols="50"
              rows="10"
              id="message"
              name="message"
              onChange={onMessageChange}
            ></textarea>
          </div>
          <p className="input__error">{messageError}</p>
          <button type="submit" className="submit__button">
            Send
          </button>
        </form>
        <p className="send__successfully">{send}</p>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
