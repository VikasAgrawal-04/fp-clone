import React from "react";
import styles from  "./footer.module.css";

export const Footer = () => {
  return (
    <footer>
      <div className={styles.row + " " + styles.primary}>
        <div className={styles.column + " " + styles.about}>
          <h3 className={styles.h3class}> Foolish Developer</h3>
          <p className={styles.pclass}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
            voluptatem corporis error non,
          </p>
          <div className={styles.social}>
            <i className="fi fi-brands-facebook"></i>
            <i className="fi fi-brands-instagram"></i>
            <i className={styles["fi-brands-twitter"]}></i>
            <i className={styles["fi-brands-youtube"]}></i>
            <i className={styles["fi-brands-whatsapp"]}></i>
          </div>
        </div>
        <div className={styles.column + " " + styles.links}>
          <h3 className={styles.h3class}>Some Links</h3>
          <ul>
            <li>
              <a href="#faq">F.A.Q</a>
            </li>
            <li>
              <a href="#cookies-policy">Cookies Policy</a>
            </li>
            <li>
              <a href="#terms-of-services">Terms Of Service</a>
            </li>
            <li>
              <a href="#support">Support</a>
            </li>
          </ul>
        </div>
        <div className={styles.column + " " + styles.links}>
          <h3 className={styles.h3class}>Some Links</h3>
          <ul>
            <li>
              <a href="#faq">F.A.Q</a>
            </li>
            <li>
              <a href="#cookies-policy">Cookies Policy</a>
            </li>
            <li>
              <a href="#terms-of-services">Terms Of Service</a>
            </li>
            <li>
              <a href="#support">Support</a>
            </li>
          </ul>
        </div>
        <div className={styles.column + " " + styles.subscribe}>
          <h3 className={styles.h3class}>Newsletter</h3>
          <div>
            <input type="email" placeholder="Your email id here" />
            <button className={styles.btn}>Subscribe</button>
          </div>
        </div>
      </div>
      <div className={styles.row + " " + styles.copyright}>
        <div className={styles["footer-menu"]}>
          <a href="1">Home</a>
          <a href="2">About</a>
          <a href="3">Contact</a>
          <a href="4">Blog</a>
          <a href="5">Social</a>
        </div>
        <p className={styles.pclass}>Copyright &copy; 2021 Foolish Developer</p>
      </div>
    </footer>
  );
};
