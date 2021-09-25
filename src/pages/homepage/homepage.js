import React from "react";
import Directory from "../../components/directory/directory";
import styled from "styled-components";

const HomePage = () => {
  return (
    <HomePageStyled className="homepage">
      <Directory />
    </HomePageStyled>
  );
};

export default HomePage;

const HomePageStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 80px;
`;
