import React,{useState} from "react";
import styles from "./startselling.module.css"
import { ToastContainer } from 'react-toastify';
import {MdOutlineAppRegistration} from "react-icons/md";
import {BsSpeedometer} from "react-icons/bs";
import{MdCalculate}from "react-icons/md";
import {TbSpray} from "react-icons/tb";
import {AiFillCamera} from "react-icons/ai";
import{FaAdversal}from "react-icons/fa";
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";

const cardData = [
        // Your card data objects
        { img: 'images/step1.svg', title: '  Add advertisement', content: 'PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard...' },
        { img: 'images/step2.svg', title: ' Complete the vehicle data', content: 'PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard...' },
        { img: 'images/step3.svg', title: '  Create a full description of the advertisement', content: 'PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard...' },
        { img: 'images/step4.svg', title: ' Add attractive photos', content: 'PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard...' },
        { img: 'images/step5.svg', title: ' Promote the advertisement', content: 'PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard...' },
        { img: 'images/step6.svg', title: 'Broccoli Cheese Soup', content: 'PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard...' },
    ];
  
        const questions = [
          "How many team members can I invite?",
          "What is the maximum file upload size?",
          "How do I reset my password?",
          "Can I cancel my subscription?",
          "Do you provide additional support?"
        ];
      
        const answers = [
          "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
          "No more than 2GB. All files in your account must fit your allotted storage space.",
          "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
          "Yes! Send us a message and we’ll process your request no questions asked.",
          "Chat and email support is available 24/7. Phone lines are open during normal business hours."
        ];

export const StartSelling = () => {

        
    const CardsPerPage = 3;


    const [currentPage, setCurrentPage] = useState(1);

    const startIndex = (currentPage - 1) * CardsPerPage;
    const visibleCards = cardData.slice(startIndex, startIndex + CardsPerPage);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    }



    const [activeIndex, setActiveIndex] = useState(null);
    
    const handleQuestionClick = (index) => {
      setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };
  
//     this.addEventListener("DOMContentLoaded", () =>{
//         const questions = document.querySelectorAll(".question")
//         questions.forEach((question) => question.addEventListener("click", () =>{
      
//             if(question.parentNode.classList.contains("active")){
//                 question.parentNode.classList.toggle("active")
//             }
//         else{
//         questions.forEach(question => question.parentNode.classList.remove("active"))
//         question.parentNode.classList.add("active")
//             }
    
//         }))
//     }) 




  return (
   <div>

        <Header/>



        <div className={styles["startSelling"]}>




<div className={styles["heading"]}><h2> How to start selling at OTOMOTO?</h2></div>
           
      <div className={styles["timeline"]}>
        <div className={`${styles["container"]} ${styles["left-container"]}`}>
           <MdOutlineAppRegistration   className="icon"/>
        {/* <img src="./images/amazon.png"/> */}
        <div className={styles["text-box"]}>
         
         
        <h2>  Prepare registration certificate</h2>
        <small>Step Number 1</small>
        <p>
       
Click “ Add ” in the upper right corner of the page and log in to the Business Account. Please note that the default category for the new announcement is “ Passenger cars ”. If you want to change it, expand the list and select the appropriate category.
        </p>
        <span className={styles["left-container-arrow"]}></span>
        </div>
        </div>

        <div className={`${styles["container"] } ${styles["right-container"]}`}>
        <BsSpeedometer    className={styles["icon"]}/>
        <div className={styles["text-box"]}>
         
        <h2> Save vehicle mileage</h2>
        <small>Step Number 2</small>
        <p>
       
        Click “ Add ” in the upper right corner of the page and log in to the Business Account. Please note that the default category for the new announcement is “ Passenger cars ”. If you want to change it, expand the list and select the appropriate category.
        </p><span className={styles["right-container-arrow"]}></span>
        </div>
        </div>

        <div className={`${styles["container"] } ${styles["left-container"]}`}>
        <MdCalculate    className={styles["icon"]}/>
        <div className={styles["text-box"]}>
         
        <h2> Valuate your vehicle using the free tool</h2>
        <small>Step Number 3</small>
        <p>
       
Click “ Add ” in the upper right corner of the page and log in to the Business Account. Please note that the default category for the new announcement is “ Passenger cars ”. If you want to change it, expand the list and select the appropriate category.
        </p><span className={styles["left-container-arrow"]}></span>
        </div>
        </div>

        <div className={`${styles["container"] } ${styles["right-container"]}`}>
        <TbSpray    className={styles["icon"]}/>
        <div className={styles["text-box"]}>
         
        <h2> Clean the car inside and outside</h2>
        <small>Step Number 4</small>
        <p>
       
Click “ Add ” in the upper right corner of the page and log in to the Business Account. Please note that the default category for the new announcement is “ Passenger cars ”. If you want to change it, expand the list and select the appropriate category.
        </p><span className={styles["right-container-arrow"]}></span>
        </div>
        </div>


        <div className={`${styles["container"]} ${styles["left-container"]}`}>
        <AiFillCamera    className={styles["icon"]}/>
        <div className={styles["text-box"]}>

        <h2> Take photos of the vehicle from different sides</h2>
        <small>Step Number 5</small>
        <p>
       
Click “ Add ” in the upper right corner of the page and log in to the Business Account. Please note that the default category for the new announcement is “ Passenger cars ”. If you want to change it, expand the list and select the appropriate category.
        </p><span className={styles["left-container-arrow"]}></span>
        </div>
        </div>




        <div className={`${styles["container"] } ${styles["right-container"]}`}>
        <FaAdversal      className={styles["icon"]}/>
        <div className={styles["text-box"]}>
        
        <h2> You are ready to create an advertisement</h2>
        <small>Step Number 6</small>
        <p>
       
Click “ Add ” in the upper right corner of the page and log in to the Business Account. Please note that the default category for the new announcement is “ Passenger cars ”. If you want to change it, expand the list and select the appropriate category.
        </p><span className={styles["right-container-arrow"]}></span>
        </div>
        </div>


      </div>





    
<div className={styles["addSection"]}>
      <div className={styles["heading"]}><h2> Steps to create a perfect advertisement</h2></div>
      <div className={styles["card-container"]}>
{visibleCards.map((card, index) => (
    <div className={styles["cardc"]} key={index}>
        <img src={card.img} />
        <h3>{card.title}</h3>
        <p>{card.content}</p>
        <button className={styles["cardbttn"]}>Read More</button>
    </div>
))}
<div className={styles["pagination"]}>
    <button 
        onClick={() => handlePageChange(1)}
        className={  `${styles["pgbtn"]}  ${currentPage === 1 ? `${styles["active"]}` : `${styles[""]}`} `  }
    >
        1
    </button>
    <button 
        onClick={() => handlePageChange(2)}
        className={    `${styles["pgbtn"]}   ${currentPage === 2 ? `${styles["active"]}` : `${styles[""]}`  }` }
    >
        2
    </button>
</div>


</div>

</div>









<div className={styles["faq"]}>

      <div className={styles["wrapper"]}>
        <div className={styles["image__wrapper"]}>
          <div className={styles["image__wrapper_inner"]}>
            {/* Inner content of image wrapper */}
          </div>
          <img className={styles["box"]} src="images/illustration-box-desktop.svg" alt="box" />
        </div>
        <div className={styles["accordion__wrapper"]}>
          <h1 className={styles["title__accordion"]}>FAQ</h1>
          <div className={styles["questions__accordions"]}>
            {questions.map((question, index) => (
              <div
                key={index}
                className={`${styles['question-answer__accordion']} ${activeIndex === index ? `${styles["active"]}` : `${styles[""]}`}`}
                onClick={() => handleQuestionClick(index)}
              >
                <div className={styles["question"]}>
                  <h3 className={styles["title__question"]}>
                    {question}
                  </h3>
                  <img src="images/icon-arrow-down.svg" alt="arrow-down" />
                </div>
                <div className={styles["answer"]}>
                  {answers[index]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>






</div>




        <Footer/>
   </div>

  
  );
};
