import { useState } from "react";

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            {/*  */}
            <a
              href={
                nav.id === "contact"
                  ? "/contact"
                  : nav.id === "about"
                  ? "/about"
                  : `/#${nav.id} `
              }
            >
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// import { useState } from "react";
// import { useHistory } from 'react-router-dom';
// // useHistory hook import kiya gaya hai

// import { close, logo, menu } from "../assets";
// import { navLinks } from "../constants";

// const Navbar = () => {
//   const [active, setActive] = useState("Home");
//   const [toggle, setToggle] = useState(false);
//   const history = useHistory(); // useHistory hook initialize kiya gaya hai

//   // handleNavLinkClick function neavigation ko handle karta hai
//   const handleNavLinkClick = (navId) => {
//     setActive(navId);
//     if (navId === "contact") {
//       history.push("/contact"); // Contact page par navigate kiya jata hai
//     } else if (navId === "about") {
//       history.push("/about"); // About page par navigate kiya jata hai
//     } else {
//       history.push(`#${navId}`); // Same page ke dusre sections par navigate kiya jata hai
//     }
//   };

//   return (
//     <nav className="w-full flex py-6 justify-between items-center navbar">
//       <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />

//       <ul className="list-none sm:flex hidden justify-end items-center flex-1">
//         {navLinks.map((nav) => (
//           <li
//             key={nav.id}
//             className={`font-poppins font-normal cursor-pointer text-[16px] ${
//               active === nav.id ? "text-white" : "text-dimWhite"
//             } ${nav === navLinks[navLinks.length - 1] ? "mr-0" : "mr-10"}`}
//             onClick={() => handleNavLinkClick(nav.id)} // Link click par handleNavLinkClick function call kiya gaya hai
//           >
//             {nav.title}
//           </li>
//         ))}
//       </ul>

//       <div className="sm:hidden flex flex-1 justify-end items-center">
//         <img
//           src={toggle ? close : menu}
//           alt="menu"
//           className="w-[28px] h-[28px] object-contain"
//           onClick={() => setToggle(!toggle)}
//         />

//         <div
//           className={`${
//             !toggle ? "hidden" : "flex"
//           } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
//         >
//           <ul className="list-none flex justify-end items-start flex-1 flex-col">
//             {navLinks.map((nav) => (
//               <li
//                 key={nav.id}
//                 className={`font-poppins font-medium cursor-pointer text-[16px] ${
//                   active === nav.id ? "text-white" : "text-dimWhite"
//                 } ${nav === navLinks[navLinks.length - 1] ? "mb-0" : "mb-4"}`}
//                 onClick={() => handleNavLinkClick(nav.id)} // Link click par handleNavLinkClick function call kiya gaya hai
//               >
//                 {nav.title}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
