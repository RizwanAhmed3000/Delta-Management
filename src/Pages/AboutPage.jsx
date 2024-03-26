import React from "react";
import { ContactHead, Footer, Navbar, AboutCard, ExtraCard, OurTeam } from "../components";
import styles from "../style";
import { data } from "../constants/index";
import { imageData } from "../constants/index";
import {ourTeam} from '../constants/index'
// console.log(imageData);
const AboutPage = () => {
  // console.log(data);
  return (
    <div>
      <div className="bg-primary  w-full overflow-hidden min-h-[100vh] ">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
        <div
          // ${styles.flexCenter}`
          className={`bg-primary text-white mt-[5rem] mb-[2rem] ${styles.paddingX} `}
        >
          <ContactHead
            text="We are Block, a Digital Product Design & Branding Agency. As a team of Designers, Business Analysts,
            Strategists, Content Writers, and Project Managers, we collaborate on a result-oriented design process."
            heading="Empowering the world to design"
          />
          <div className="flex flex-wrap">
            {imageData.map((data) => (
              <AboutCard data={data} key={data?.id} />
            ))}
          </div>
        </div>
        <div className="text-white text-3xl font-bold  text-center mt-[3rem]">
          Our Value
        </div>
        <div className="flex flex-col items-center justify-center mb-[2rem]">
        {data.map((data) => (
          <ExtraCard data={data} key={data?.id}/>
        ))}
        </div>

        <div className="flex flex-wrap justify-around">
          {ourTeam.map((data) => (
            <OurTeam data={data} key={data?.id}/>
          ))}
        </div>

        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
