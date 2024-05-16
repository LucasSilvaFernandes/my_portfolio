"use client";
import React, { useState } from "react";
import "./styles.css";
import "./stylesMobileEmail.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import Link from "next/link";
import emailjs from "@emailjs/browser";

export const Email = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      email: email,
      message: message,
    };

    emailjs
      .send(
        "service_xw3eqcg",
        "template_8cs9o3g",
        templateParams,
        "0WxW3Nu1bbeHuhyA4"
      )
      .then(
        (response) => {
          console.log("EMAIL ENVIADO", response.status, response.text);
          setName("");
          setEmail("");
          setMessage("");
          setEmailSubmitted(true);
        },
        (err) => {
          console.log("ERRO:", err);
        }
      );
  };

  return (
    <section id="contact" className="email__section">
      <div className="email__content">
        <h5 className="email__title">Vamos nos conectar</h5>
        <p className="email__description">
          {" "}
          Atualmente estou em busca de novas oportunidades, minha caixa de
          entrada está sempre aberta. Quer você tenha alguma dúvida. farei o possível para entrar em contato com você{" "}
        </p>
        <div className="email__socials">
          <Link href="mailto:luudsfernandes@gmail.com">
            <TfiEmail className="email__social-icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/lucas-da-silva-fernandes-5854462b7/">
            <FaLinkedin className="email__social-icon" />
          </Link>
          <Link href="https://github.com/LucasSilvaFernandes">
            <FaGithub className="email__social-icon" />
          </Link>
        </div>
      </div>
      <div className="email__form">
        <form className="email__form-content" onSubmit={sendEmail}>
          <div className="email__field">
            <label htmlFor="email" className="email__label">
              Nome:
            </label>
            <input
              type="text"
              name="name"
              required
              className="email__input"
              placeholder="seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="email__field">
            <label htmlFor="subject" className="email__label">
              Email:
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="Exemplo@gmail.com"
              className="email__input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="email__field">
            <label htmlFor="message" className="email__label">
              Mensagem:
            </label>
            <textarea
              name="message"
              placeholder="Vamos conversar sobre.."
              className="email__input"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          {emailSubmitted ? (
            <p className="email__success-message">
              E-mail enviado com sucesso!
            </p>
          ) : (
            <button type="submit" className="email__submit">
              Enviar mensagem
            </button>
          )}
        </form>
      </div>
    </section>
  );
};
