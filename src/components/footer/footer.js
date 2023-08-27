import React from "react";
import "./footer.css";

export const Footer = () => {
  return (
    <footer>
      <div class="row primary">
        <div class="column about">
          <h3>Foolish Developer</h3>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
            voluptatem corporis error non,
          </p>

          <div class="social">
            <i className="fi fi-brands-facebook"></i>
            <i className="fi fi-brands-instagram"></i>
            <i class="fi fi-brands-twitter"></i>
            <i class="fi fi-brands-youtube"></i>
            <i class="fi fi-brands-whatsapp"></i>
          </div>
        </div>

        <div class="column links">
          <h3>Some Links</h3>

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

        <div class="column links">
          <h3>Some Links</h3>
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

        <div class="column subscribe">
          <h3>Newsletter</h3>
          <div>
            <input type="email" placeholder="Your email id here" />
            <button className="sub-btn">Subscribe</button>
          </div>
        </div>
      </div>

      <div class="copyright">
        <p>Copyright &copy; 2021 Foolish Developer</p>
      </div>
    </footer>
  );
};
