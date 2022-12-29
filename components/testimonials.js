import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Thumbs } from "swiper";
import testimonialImage1 from "../assets/images/temoinage.png";
import testimonialImage2 from "../assets/images/temoinage.png";
import testimonialImage3 from "../assets/images/temoinage.png";
import testimonialImage4 from "../assets/images/temoinage.png";
import testimonialImage5 from "../assets/images/temoinage.png";
import testimonialImage6 from "../assets/images/temoinage.png";

SwiperCore.use([Autoplay, Thumbs]);

const TESTIMONIALS_DATA = [
  {
    title: "Temoignage1",
    content:
      "This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: testimonialImage1
  },
  {
    title: "Temoignage2",
    content:
      "This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: testimonialImage2
  },
  {
    title: "Temoignage2",
    content:
      "This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: testimonialImage3
  },
  {
    title: "Temoignage3",
    content:
      "This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: testimonialImage4
  },
  {
    title: "Temoignage4",
    content:
      "This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: testimonialImage5
  },
  {
    title: "Temoignage5",
    content:
      "This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: testimonialImage6
  }
];

const Testimonials = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const testimonialsCarouselOption = {
    spaceBetween: 0,
    slidesPerView: 1,
    autoplay: {
      delay: 5000
    }
  };
  const testimonialsThumOption = {
    spaceBetween: 0,
    slidesPerView: 1,
    speed: 1400,
    autoplay: {
      delay: 5000
    }
  };
  return (
    <section className="testimonials" id="testimonials"> 
      <Container>
        <Row>
          <Col lg={6} className="d-flex">
            <div className="auto">
              <div id="testimonials-slider-pager">
                <div className="testimonials-slider-pager-one">
                  {TESTIMONIALS_DATA.map(({ image }, index) => (
                    <span key={index} className="pager-item">
                      <img src={image} alt="Image" />
                    </span>
                  ))}
                </div>
                <Swiper
                  {...testimonialsThumOption}
                  className="testimonials-slider-pager-two"
                  onSwiper={setThumbsSwiper}
                >
                  {TESTIMONIALS_DATA.map(({ image }, index) => (
                    <SwiperSlide key={index}>
                      <img src={image} alt="Image" />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </Col>
          <Col lg={6}>
          <div className={`block-title textleft`}>
      <h2>People Says.</h2>
      </div>
            

            <Swiper
              {...testimonialsCarouselOption}
              thumbs={{ swiper: thumbsSwiper }}
              className="slider testimonials-slider"
            >
              {TESTIMONIALS_DATA.map(({ title, content }, index) => (
                <SwiperSlide
                  key={`testimonials-card-${index}`}
                  className="slide-item"
                >
                  <div className="single-testi-one">
                    <p>{content}</p>
                    <h3>{title}</h3>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
