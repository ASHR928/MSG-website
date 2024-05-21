"use client";
import Image from "next/image";
import { useState, useRef } from "react";
import { TextField } from "@mui/material";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!name || !email || !subject || !message) {
      alert("Please fill all the fields");
      return;
    }

    console.log("Sending message");

    emailjs
      .sendForm("service_8j08nfh", "template_2eqw7tl", form.current, {
        publicKey: "Uyt4ZCcA49c14ynKL",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Successfully sent the message! I will get back to you soon.");
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Failed to send the message! Please try again.");
        }
      );
  };

  return (
    <div className="flex flex-col items-center justify-center gap-20 bg-primary-darkBlue w-full py-10">
      <div className="relative flex items-center justify-center w-full">
        <div className="absolute right-72 top-1/2 transform -translate-y-1/2 w-1/5 h-[1px] bg-white"></div>
        <h1 className="text-4xl text-primary-lightPurple tracking-wide text-center z-10 px-4">
          Get in Touch
        </h1>
      </div>
      <div className=" text-lg text-primary-lightPurple text-center px-5 leading-7 w-[80%] ">
        Let&apos;s embark on a journey of creativity together! Whether
        you&apos;re interested in exploring art workshops, commissioning a
        bespoke piece, or simply want to connect, I&apos;d love to hear from
        you.
      </div>
      <div className=" rounded-2xl bg-primary-lightPurple p-4 mx-5 flex items-center justify-center gap-5">
        <div className="flex flex-col items-start justify-start gap-4 p-6 my-4 z-10 bg-primary-purple rounded-2xl w-1/3 relative">
          <h1 className="text-2xl text-black font-mono tracking-tighter">
            Contact Information
          </h1>
          <p className="text-sm tracking-tight text-black font-mono">
            Let&apos;s turn your imagination into art - get in touch today!{" "}
          </p>
          <div className="flex flex-col items-start justify-start m-4 p-5 gap-4 w-[70%]">
            <a
              href="tel:+91 9876543210"
              className="text-base text-black font-mono hover:text-black/70 hover:underline"
            >
              +91 9876543210
            </a>
            <p className="text-base text-black font-mono ">
              {" "}
              Musee Art Cafe, Nagal Road, Kathbangla, Near Sai Baba temple
              Rajpur road, Dehradun. Uttarakhand 248001
            </p>
          </div>
          <div className="flex flex-row items-start justify-start gap-4">
            <a href="" className="hover:shadow-2xl ">
              <Image
                src="/assets/icons/fb.svg"
                alt="instagram"
                width={40}
                height={40}
              />
            </a>
            <a href="">
              <Image
                src="/assets/icons/linkedin.svg"
                alt="instagram"
                width={40}
                height={40}
              />
            </a>
            <a href="">
              <Image
                src="/assets/icons/insta.svg"
                alt="instagram"
                width={40}
                height={40}
              />
            </a>
          </div>
          <div className="absolute bottom-0 right-0">
            <Image
              src="/assets/icons/eclipse.svg"
              alt="eclipse"
              width={150}
              height={150}
            />
          </div>
        </div>
        <form
          className="flex flex-col items-center justify-center gap-4 p-6 z-10 w-2/3"
          onSubmit={handleSendMessage}
          ref={form}
        >
          <div className="flex flex-col w-full gap-4 text-black">
            <div className="flex flex-row justify-between items-center gap-2 w-full">
              <div className="flex flex-col gap-2 w-1/2 ">
                <label
                  htmlFor="name"
                  className="text-xl font-mono font-extrabold "
                >
                  Your Name
                </label>
                <TextField
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  variant="standard"
                  fullWidth
                  InputProps={{
                    style: {
                      color: "black",
                      borderBottom: "2px solid black",
                    },
                  }}
                />
              </div>
              <div className="flex flex-col gap-2 w-1/2">
                <label
                  htmlFor="mail"
                  className="text-xl font-mono font-extrabold "
                >
                  Mail address
                </label>
                <TextField
                  id="mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  variant="standard"
                  fullWidth
                  InputProps={{
                    type: "email",
                    style: {
                      color: "black",
                      borderBottom: "2px solid black",
                    },
                  }}
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="subject"
                className="text-xl font-mono font-extrabold"
              >
                Subject
              </label>
              <TextField
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                variant="standard"
                fullWidth
                InputProps={{
                  style: {
                    color: "black",
                    borderBottom: "2px solid black",
                  },
                }}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className="text-xl font-mono font-extrabold "
              >
                Message
              </label>
              <TextField
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                variant="standard"
                multiline
                rows={4}
                fullWidth
                InputProps={{
                  style: {
                    color: "black",
                    borderBottom: "2px solid black",
                  },
                }}
              />
            </div>
          </div>
          <div className="flex justify-start w-full mt-4">
            <button
              className="rounded-xl bg-transparent hover:bg-transparent text-primary-darkPurple border-2 border-primary-darkPurple font-purple tracking-tight  hover:shadow-2xl px-4 py-2 font-semibold text-lg"
              type="submit"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
