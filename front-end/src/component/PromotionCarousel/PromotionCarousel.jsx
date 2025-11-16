import React from "react";
import Slider from "react-slick";
import "./PromotionCarousel.css";
import test1 from '../../assets/image/test.jpg'
import test5 from '../../assets/image/test5.png'
import test from '../../assets/image/test.jpg'
import test3 from '../../assets/image/Promoting Handmade Crafts Online.png'

const promotions = [
  {
    id: 1,
    title: "Big Sale 50% Off!",
    description: "Get the best deals on all products this weekend.",
    image: test,
  },
  {
    id: 2,
    title: "New Arrivals!",
    description: "Check out our latest products for this season.",
    // image: "https://via.placeholder.com/800x300?text=Promotion+2",
    image: test1,
  },
  {
    id: 3,
    title: "Limited Time Offer",
    description: "Hurry up! Offer ends soon.",
    // image: "https://via.placeholder.com/800x300?text=Promotion+3",
    image: test3,
  },
  {
    id: 3,
    title: "Limited Time Offer",
    description: "Hurry up! Offer ends soon.",
    // image: "https://via.placeholder.com/800x300?text=Promotion+3",
    image: test5,
  },
];

const PromotionCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {promotions.map((promo) => (
          <div key={promo.id} className="carousel-slide">
            <img src={promo.image} alt={promo.title} />
            <div className="carousel-text">
              <h2>{promo.title}</h2>
              <p>{promo.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PromotionCarousel;
