// import Slider from "react-slick";
// import "./slider_section.css";
// import { useNavigate } from "react-router-dom";
// export const SliderSection = () => {
//     const navigate = useNavigate();
// const imgs = [
//     "https://images.wallpaperscraft.com/image/single/lamborghini_gallardo_cars_car_79728_1280x720.jpg",
//     "https://cdn.wallpapersafari.com/85/82/vHelWo.jpg",
//     "https://cdn.wallpapersafari.com/34/93/BoHWDp.jpg",
//   ];
//   const settings = {
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     arrows: true,
//   };
// return (
//     <div className="slider"> 
//         <div className="slider-left">
//             <Slider {...settings}>
//             {imgs.map((ele) => {
//             return (
//                 <div
//                 className="img-wrapper"
//                 onClick={() => navigate("/detail")}
//                 >
//                 <img src={ele} className="head-imgs" alt={ele} />
//                 </div>
//             );
//             })}
//             </Slider>
//         </div>
//         <div className="slider-left"></div>
//     </div>
// )

// }
// import React from "react";
// import Slider from "react-slick";
// import "./slider_section.css";
// import { useNavigate } from "react-router-dom";

// export const SliderSection = () => {
//   const navigate = useNavigate();

//   const cards = [
//     {
//       imgUrl:
//         "https://images.wallpaperscraft.com/image/single/lamborghini_gallardo_cars_car_79728_1280x720.jpg",
//       title: "Lamborghini Gallardo",
//       description: "Description for Lamborghini Gallardo",
//     },
//     {
//       imgUrl: "https://cdn.wallpapersafari.com/85/82/vHelWo.jpg",
//       title: "Cool Car Image",
//       description: "Description for Cool Car Image",
//     },
//     {
//       imgUrl: "https://cdn.wallpapersafari.com/34/93/BoHWDp.jpg",
//       title: "Another Car",
//       description: "Description for Another Car",
//     },
//   ];

//   const sliderSettings = {
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     arrows: true,
//   };

//   return (
//     <div className="slider">
//       <div className="slider-left">
//         <Slider {...sliderSettings}>
//           {cards.map((card, index) => (
//             <div
//               key={index}
//               className="img-wrapper"
//               onClick={() => navigate("/detail")}
//             >
//               <div className="card">
//                 <img
//                   src={card.imgUrl}
//                   className="head-imgs"
//                   alt={`Card ${index}`}
//                 />
//                 <div className="card-details">
//                   <h3>{card.title}</h3>
//                   <p>{card.description}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//       <div className="slider-right"></div>
//     </div>
//   );
// };
// import React from "react";
// import Slider from "react-slick";
// import "./slider_section.css";
// import { useNavigate } from "react-router-dom";

// export const SliderSection = () => {
//   const navigate = useNavigate();

//   const cards = [
//     {
//       imgUrl:
//         "https://images.wallpaperscraft.com/image/single/lamborghini_gallardo_cars_car_79728_1280x720.jpg",
//       title: "Lamborghini Gallardo",
//     },
//     {
//       imgUrl: "https://cdn.wallpapersafari.com/85/82/vHelWo.jpg",
//       title: "Cool Car Image",
//     },
//     {
//       imgUrl: "https://cdn.wallpapersafari.com/34/93/BoHWDp.jpg",
//       title: "Another Car",
//     },
//   ];

//   const sliderSettings = {
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     arrows: true,
//   };

//   return (
//     <div className="slider">
//       <div className="slider-left">
//         <Slider {...sliderSettings}>
//           {cards.map((card, index) => (
//             <div
//               key={index}
//               className="img-wrapper"
//               onClick={() => navigate("/detail")}
//             >
//               <div className="card">
//                 <img
//                   src={card.imgUrl}
//                   className="head-imgs"
//                   alt={`Card ${index}`}
//                 />
//                 <div className="card-details">
//                   <h3>{card.title}</h3>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//       <div className="slider-right"></div>
//     </div>
//   );
// };
// import React from "react";
// import Slider from "react-slick";
// import "./slider_section.css";
// import { useNavigate } from "react-router-dom";

// export const SliderSection = () => {
//   const navigate = useNavigate();

//   const images = [
//     "https://images.wallpaperscraft.com/image/single/lamborghini_gallardo_cars_car_79728_1280x720.jpg",
//     "https://cdn.wallpapersafari.com/85/82/vHelWo.jpg",
//     "https://cdn.wallpapersafari.com/34/93/BoHWDp.jpg",
//     "https://example.com/image4.jpg",
//     "https://example.com/image5.jpg",
//     // Add more image URLs as needed
//   ];

//   const sliderSettings = {
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4, // Show 4 images at a time
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     responsive: [
//       {
//         breakpoint: 768, // Adjust the breakpoint as needed
//         settings: {
//           slidesToShow: 2, // Show 2 images at a time on smaller screens
//         },
//       },
//     ],
//   };

//   return (
//     <div className="slider">
//       <div className="slider-left">
//         <Slider {...sliderSettings}>
//           {images.map((imageUrl, index) => (
//             <div
//               key={index}
//               className="img-wrapper"
//               onClick={() => navigate("/detail")}
//             >
//               <div className="card">
//                 <img
//                   src={imageUrl}
//                   className="head-imgs"
//                   alt={`Image ${index + 1}`}
//                 />
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//       <div className="slider-right"></div>
//     </div>
//   );
// };
import React from "react";
import Slider from "react-slick";
import "./slider_section.css";
import { useNavigate } from "react-router-dom";

export const SliderSection = () => {
  const navigate = useNavigate();

  const cars = [
    {
      imgUrl:
        "./images/car1.jpg",
      title: "Audi R8",
      description: "Audi R8 is a powerful and luxurious sports car.",
    },
    {
      imgUrl:
        "./images/car4.jpg",
      title: "Ferrari 458",
      description: "Ferrari 458 is an iconic Italian supercar.",
    },
    {
      imgUrl:
        "./images/car3.jpg",
      title: "Lamborghini Huracan",
      description: "Lamborghini Huracan is a masterpiece of engineering and design.",
    },
    {
      imgUrl:
        "./images/car2.jpg",
      title: "Porsche 911",
      description: "Porsche 911 is a classic sports car known for its performance.",
    },
    {
        imgUrl:
          "./images/car1.jpg",
        title: "Porsche 911",
        description: "Porsche 911 is a classic sports car known for its performance.",
      },
      {
        imgUrl:
          "./images/car2.jpg",
        title: "Porsche 911",
        description: "Porsche 911 is a classic sports car known for its performance.",
      },
      {
        imgUrl:
          "./images/car3.jpg",
        title: "Porsche 911",
        description: "Porsche 911 is a classic sports car known for its performance.",
      },
  ];

  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Show 4 images at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768, // Adjust the breakpoint as needed
        settings: {
          slidesToShow: 2, // Show 2 images at a time on smaller screens
        },
      },
    ],
  };

  return (
    <> <div className="heading"><h1> Featured Offers</h1></div>
    
    <div className="slider">
      
      <div className="slider-left">
        <Slider {...sliderSettings}>
          {cars.map((car, index) => (
            <div
              key={index}
              className="img-wrapper"
              onClick={() => navigate("/detail")}
            >
              <div className="card">
                <img
                  src={car.imgUrl}
                  className="head-imgs"
                  alt={`Car ${index + 1}`}
                />
                <div className="card-details">
                  <h3>{car.title}</h3>
                  <p>{car.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="slider-right"></div>
    </div></>
    
  );
};
