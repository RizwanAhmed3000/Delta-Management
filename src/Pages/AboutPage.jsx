import React from 'react'
import { ContactHead, Footer, Navbar } from '../components'
import styles from '../style'
const AboutPage = () => {
  return (
    <div>
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
      <ContactHead text='We are Block, a Digital Product Design & Branding Agency. As a team of Designers, Business Analysts,
Strategists, Content Writers, and Project Managers, we collaborate on a result-oriented design process.' heading='Empowering the world to design'/>
        {/* <Contact /> */}
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
    </div>
  )
}

export default AboutPage