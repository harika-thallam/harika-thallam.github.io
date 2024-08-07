import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(17, 25, 40, 0.83);
  border: 1px solid rgba(255, 255, 255, 0.125);
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 40px 20px;
  color: ${({ theme }) => theme.text_primary};
  text-align: center;
  height: 250px;
  max-width: 600px; /* Ensure the card does not stretch too wide */
  margin: 0 auto; /* Center the card */
`;

const Quote = styled.div`
  font-size: 18px;
  font-style: italic;
  margin-bottom: 20px;
  position: relative;

  &::before,
  &::after {
    content: '"';
    font-size: 24px;
    position: absolute;
    top: -10px;
  }

  &::before {
    left: -10px;
  }

  &::after {
    right: -10px;
  }
`;

const Name = styled.div`
  font-size: 16px;
  font-weight: 600;
  margin-top: 10px;
  color: ${({ theme }) => theme.text_secondary};
`;

const Designation = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 80};
`;

const Link = styled.a`
  font-size: 14px;
  color: ${({ theme }) => theme.primary};
  margin-top: 5px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const TestimonialCard = ({ testimonial }) => {
  return (
    <Card>
      <Quote>{testimonial.text}</Quote>
      <Name>{testimonial.name}</Name>
      <Designation>{testimonial.designation}</Designation>
      <Link href={testimonial.link} target="_blank" rel="noopener noreferrer">
        View Full Recommendation
      </Link>
    </Card>
  );
};

export default TestimonialCard;
