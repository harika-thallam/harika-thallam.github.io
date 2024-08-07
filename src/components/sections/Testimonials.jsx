import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialCard from "../cards/TestimonialCard";
import {testimonials} from '../../data/constants';

const CarouselContainer = styled.div`
  width: 100%;
  padding: 40px 0;
  background-color: ${({ theme }) => theme.bg_secondary};
  max-width: 800px; /* Set a max-width for the container */
  margin: 0 auto; /* Center the container */
`;


const TestimonialCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const Title = styled.div`
    font-size: 52px;
    text-align: center;
    font-weight: 600;
    margin-top: 20px;
    color: ${({ theme }) => theme.text_primary};
    @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
    }
  `;

  const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    font-weight: 600;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
      font-size: 16px;
    }
  `;

  return (
    <CarouselContainer>
      <Title>Testimonials</Title>
      <Desc style={{ marginBottom: "40px" }}>
        Here are some brief excerpts from testimonials by colleagues and peers, showcasing the quality and impact of my work.
      </Desc>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </Slider>
    </CarouselContainer>
  );
};

export default TestimonialCarousel;
