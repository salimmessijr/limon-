import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import userAvatar from "../../images/user-avatar.png";
import ReviewCard from "../ReviewCard/ReviewCard";
import "./testimonials.scss";

const Testimonials = () => {
  const testimonialsContent = [
    {
      avatar: userAvatar,
      name: "Sara Lopez",
      username: "saralopez20",
      testimonial:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis quidem sit officia cupiditate! Explicabo, quis totam. Delectus amet molestias facere.",
    },
    {
      avatar: userAvatar,
      name: "Sara Lopez",
      username: "saralopez20",
      testimonial:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis quidem sit officia cupiditate! Explicabo, quis totam. Delectus amet molestias facere.",
    },
    {
      avatar: userAvatar,
      name: "Sara Lopez",
      username: "saralopez20",
      testimonial:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis quidem sit officia cupiditate! Explicabo, quis totam. Delectus amet molestias facere.",
    },
    {
      avatar: userAvatar,
      name: "Sara Lopez",
      username: "saralopez20",
      testimonial:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis quidem sit officia cupiditate! Explicabo, quis totam. Delectus amet molestias facere.",
    },
  ];

  const [sliderSettings, setSliderSettings] = useState({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  useEffect(() => {
    const updateSliderSettings = () => {
      if (window.innerWidth >= 1024) {
        setSliderSettings((prev) => ({
          ...prev,
          slidesToShow: 3,
          slidesToScroll: 1,
        }));
      } else {
        setSliderSettings((prev) => ({
          ...prev,
          slidesToShow: 1,
          slidesToScroll: 1,
        }));
      }
    };

    updateSliderSettings();

    window.addEventListener("resize", updateSliderSettings);

    return () => window.removeEventListener("resize", updateSliderSettings);
  }, []);

  return (
    <div className="testimonials-wrapper">
      <div className="title">What our customers say!</div>
      <div className="cards">
        <Slider {...sliderSettings}>
          {testimonialsContent.map((card, index) => (
            <ReviewCard {...card} key={index + 1} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
