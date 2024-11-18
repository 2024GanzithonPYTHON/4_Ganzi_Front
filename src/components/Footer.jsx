import React from "react";
import styled from "styled-components";

const FooterContainer = styled.header`
  display: flex;

  width: 100%;
  height: 50px;

  background-color: #333;
  color: white;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <h1>My App</h1>
    </FooterContainer>
  );
};

export default Footer;
