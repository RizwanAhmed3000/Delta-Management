import React from "react";
import styles from "../style";
import { Footer, Navbar } from "../components";
import {Contact ,  ContactHead} from "../components";

const ContactPage = () => {
  return (
    <div className="bg-primary  w-full overflow-hidden min-h-[100vh]">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div
      // ${styles.flexCenter}`
        className={`bg-primary text-white ${styles.paddingX} `}
      >
      <ContactHead />
        <Contact />
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
