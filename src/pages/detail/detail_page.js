
import React, { useState } from "react";
import { FaBeer } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { BsPinterest } from "react-icons/bs";
import { BsWhatsapp } from 'react-icons/bs';

import styles from "./details.module.css";

export const Detail = () => {
  const [selectedImgId, setSelectedImgId] = useState(1);

  return (
    <div className={styles["card-wrapper"]}>
      <div className={styles["product-imgs"]}>
        <div className={styles["img-showcase"]} style={{ height: '550px', width: '100%' }}>
          <img style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            src={`./images/car${selectedImgId}.jpg`}
            alt="car-image" />
        </div>
        <div className={styles["img-select"]}>
          <div className={styles["img-item"]}>
            <a href="#" data-id="1" onClick={() => setSelectedImgId(1)}>
              <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src="./images/car1.jpg" alt="car image" />
            </a>
          </div>
          <div className={styles["img-item"]}>
            <a href="#" data-id="2" onClick={() => setSelectedImgId(2)}>
              <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src="./images/car2.jpg" alt="car image" />
            </a>
          </div>
          <div className={styles["img-item"]}>
            <a href="#" data-id="3" onClick={() => setSelectedImgId(3)}>
              <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src="./images/car3.jpg" alt="car image" />
            </a>
          </div>
          <div className={styles["img-item"]}>
            <a href="#" data-id="4" onClick={() => setSelectedImgId(4)}>
              <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src="./images/car4.jpg" alt="car image" />
            </a>
          </div>
        </div>
      </div>

      <div className={styles["product-content"]} style={{ height: '100%' }}>
        <h2 className={styles["product-title"]}>Hyundai Tucson 1.6 T-GDI Comfort 2WD</h2>
        <a href="#" className={styles["product-link"]}>visit nike store</a>
        <div className={styles["product-rating"]}>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star-half-alt"></i>
          <span>4.7(21)</span>
        </div>

        <div className={styles["product-price"]}>
          <p className={styles["last-price"]}>Old Price: <span>$257.00</span></p>
          <p className={styles["new-price"]}>New Price: <span>$249.00 (5%)</span></p>
        </div>

        <div className={styles["product-detail"]}>
          <h2>about this item: </h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eveniet veniam tempora fuga tenetur placeat sapiente architecto illum soluta consequuntur, aspernatur quidem at sequi ipsa!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, perferendis eius. Dignissimos, labore suscipit. Unde.</p>
          <ul>
            <li>Color: <span>Black</span></li>
            <li>Available: <span>in stock</span></li>
            <li>Category: <span>SUV</span></li>
            <li>Mileage: <span>22 KM/hr</span></li>
            <li>Type: <span>Gas</span></li>
          </ul>
        </div>

        <div className={styles["purchase-info"]}>
          <input type="number" min="0" value="1" />
          <button type="button" className={styles["btn"]}>Contact with the seller</button>
          <button type="button" className={styles["btn"]}>
            View Number <i className="fas fa-shopping-cart"></i>
          </button>
        </div>

        <div className={styles["social-links"]}>
          <p>Share At: </p>
          <a href="#">
            <i className="fab fa-facebook-f"><AiFillFacebook /></i>
            </a>
          <a href="#">
            <i className="fab fa-twitter"><AiOutlineTwitter /></i>
          </a>
          <a href="#">
            <i className="fab fa-instagram"><AiOutlineInstagram /></i>
          </a>
          <a href="#">
            <i className="fab fa-whatsapp"><BsPinterest /></i>
          </a>
          <a href="#">
            <i className="fab fa-pinterest"><BsWhatsapp /></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Detail;

