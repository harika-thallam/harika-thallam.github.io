import React from "react";
import styled from "styled-components";
import { education } from "../../data/constants";
import EducationCard from "../cards/EducationCard";

const Container = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column; /* Stack cards vertically */
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  max-width: 1100px; /* Control the max width to match other components */
  padding: 0 20px; /* Add some padding for better alignment */
`;

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

const Education = () => {
  return (
    <Container id="Education">
      <Title>Education</Title>
      <Desc style={{ marginBottom: "40px" }}>
        Passion for problem-solving and logical reasoning drove me to earn degrees in Computer Science. Here are more details.
      </Desc>
      <Wrapper>
        {education.map((edu, index) => (
          <EducationCard key={`education-${index}`} education={edu} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default Education;
