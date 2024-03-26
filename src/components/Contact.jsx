import React, { useRef, useState } from "react";
import styles from "../style";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Pages/Contact.css";
function Contact() {
  const form = useRef();
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    if (email === "" || number === "" || name === "" || message === "") {
      return toast.error("Missings Fields");
    } else {
      console.log("send");
      emailjs
        .sendForm("service_nov0ltj", "template_nrp9fvf", form.current, {
          publicKey: "mcrSWA35JOVCajwf0",
        })
        .then(
          () => {
            console.log("SUCCESS!");
            toast.success("Email Send Successfully");
          },
          (error) => {
            console.log("FAILED...", error.text);
            toast.error("Email Send Failed");
          }
        );
    }
  };
  return (
    <>
      <div className="  flex items-top justify-between min-h-[500px] sm:items-center sm:pt-0 sm:pb-0 w-[100%]]">
        <div className=" mx-auto my-auto  sm:px-6 w-[100vw] min-h-[370px] lg:px-8  ">
          {/* <h1 className="text-white text-5xl ">Contact Us</h1> */}
          <div className="overflow-hidden lg:px-[120px] ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
              <div className="p-6 mr-2 bg-primary sm:rounded-lg ">
                <div>
                  <h1 className="text-3xl sm:text-4xl  font-extrabold tracking-tight">
                    Technical Support
                  </h1>
                  <p className="text-normal text-lg sm:text-xl font-medium  text-slate-500  mt-2 mb-6  ">
                    Found a persistent bug, or need help setting a new team
                    member up? Can’t crack a feature? Let us know!
                  </p>
                </div>
                <div>
                  <h1 className="text-3xl sm:text-4xl  font-extrabold tracking-tight">
                    General chat
                  </h1>
                  <p className="text-normal text-lg sm:text-xl font-medium  text-slate-500  mt-2 mb-6 ">
                    Billing issues, customizations, plan changes--anything that
                    doesn’t fit in the other two brackets, goes here. Start Chat
                  </p>
                </div>
                <div>
                  <h1 className="text-3xl sm:text-4xl  font-extrabold tracking-tight">
                    Help Center
                  </h1>
                  <p className="text-normal  font-medium text-slate-500  mt-2 mb-6">
                    Want to share feedback on an existing feature or suggest a
                    new one? Talk to us! Visit Help Center
                  </p>
                </div>
              </div>

              <form
                className=" flex flex-col justify-center color rounded-lg p-[1rem] "
                ref={form}
                onSubmit={sendEmail}
              >
                <div className="w-full flex gap-8">
                  <div className="flex flex-col w-[47%] ">
                    <label for="name" className="text-slate-500 font-bold">
                      Full Name *
                    </label>
                    <input
                      type="name"
                      name="name"
                      id="name"
                      // placeholder="Full Name"
                      className="w-100 mt-2 py-3 px-3 rounded-lg   text-gray-800 font-semibold  colorInput"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col w-[47%]">
                    <label for="name" className="text-slate-500 font-bold">
                      Last Name *
                    </label>
                    <input
                      type="name"
                      name="name"
                      id="name"
                      // placeholder="Full Name"
                      className="w-100 mt-2 py-3 px-3 rounded-lg   text-gray-800 font-semibold  colorInput"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>

                <div className="flex flex-col mt-2">
                  <label for="email" className="text-slate-500 font-bold">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    // placeholder="Email"
                    className="w-100 mt-2 py-3 px-3 rounded-lg   text-gray-800 font-semibold  colorInput "
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="flex flex-col mt-2">
                  <label for="email" className="text-slate-500 font-bold">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    id="companyName"
                    // placeholder="Email"
                    className="w-100 mt-2 py-3 px-3 rounded-lg   text-gray-800 font-semibold  colorInput"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="flex flex-col mt-2">
                  <label for="tel" className="text-slate-500 font-bold">
                    Number *
                  </label>
                  <input
                    type="tel"
                    name="number"
                    id="tel"
                    // placeholder="Telephone Number"
                    className="w-100 mt-2 py-3 px-3 rounded-lg   text-gray-800 font-semibold  colorInput"
                    onChange={(e) => setNumber(e.target.value)}
                  />
                </div>
                <div className="flex flex-col mt-2">
                  <label for="tel" className="text-slate-500 font-bold">
                    Enter Your Subject *
                  </label>

                  <textarea
                    onChange={(e) => setMessage(e.target.value)}
                    name="message"
                    id="message"
                    cols="0"
                    rows="8"
                    // placeholder="Enter your Subject"
                    className="w-100 mt-2 py-3 px-3 rounded-lg   text-gray-800 font-semibold  colorInput "
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className={`py-2 mt-2 bg-blue-gradient 
    font-poppins font-medium text-[18px] text-primary outline-none rounded-[12px] ${styles}`}
                >
                  <span>Send</span>
                </button>
              </form>

              <ToastContainer
                style={{ marginTop: "11vh" }}
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition:Bounce
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
