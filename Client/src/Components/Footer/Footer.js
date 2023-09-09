// import React from "react";
// import { useState } from "react";
// import styles from '../Styles/Footer.module.css';
// import Moana from '../Images/Moana.jpg';

// const FooterColumns = [
//   {
//     id: 1,
//     headline: "The Southern Initiative",
//     links: [
//       "Auckland Council",
//       "News",
//       "Reports",
//     ],
//   },
//   {
//     id: 2,
//     headline: "Our Team",
//     links: ["Shared Responsibility", "Mō mātou | About Us", "Whakapā mai | Contact", "Admin Login",],
//   },
// ];

// const Footer = () => {
//   const [email, setEmail] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(email);
//     alert("Thanks for subscribing!");
//   };
//   return (
//     <div className={styles.container}>
//       <div className={styles.footer}>
//         <div className={styles.footer__subscription}>
//         <img src={Moana} alt="hook" className={styles.moana} />
//           <h4 className={styles["footer__subscription--headline"]}>
//             Want to become a sponsor? Subscribe here for more info.
//           </h4>
//           <div
//             className={styles["footer__subscription--form"]}
//             onSubmit={handleSubmit}
//           >
//             <input
//               className={styles.input}
//               type="email"
//               placeholder="Your Email"
//               id="email"
//               onChange={(e) => setEmail(e.target.value)}
//               value={email}
//               required
//             />
//            <button className={styles.footer__btn}>Subscribe</button>
//           </div>
//         </div>
//         <div className={styles.footer__content}>
//           {FooterColumns.map(({ id, headline, links }) => (
//             <div className={styles.footer__content__col} key={id}>
//               <div className={styles.footer__content__col__headline}>
//                 {headline}
//               </div>
//               <ul className={styles.footer__content__col__links}>
//                 {links.map((link, index) => (
//                   <li key={index + 1}>
//                     <a href="/">{link}</a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//         <div className={styles.footer__base}>
//           <span className={styles["footer__base--year"]}>
//             Upsouth&nbsp;&copy;&nbsp;{new Date().getFullYear()}
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;



import React, { useState } from "react";
import styles from '../../Styles/Footer.module.css';
import SubscriptionSection from "./SubscriptionSection";
import FooterColumn from "./FooterColumn";
import FooterBase from "./FooterBase";
import FooterColumnsData from "./FooterColumnsData";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    alert("Thanks for subscribing!");
  };

  return (
    <div className={styles.container}>
      <div className={styles.footer}>
        <SubscriptionSection
          handleSubmit={handleSubmit}
          setEmail={setEmail}
          email={email}
        />
        <div className={styles.footer__content}>
          {FooterColumnsData.map(({ id, headline, links }) => (
            <FooterColumn key={id} headline={headline} links={links} />
          ))}
        </div>
        <FooterBase />
      </div>
    </div>
  );
};

export default Footer;
