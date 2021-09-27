import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "./logo1.svg";
export const Headers = () => {
  return (
    <HEaderStyled>
      <Link className="logo-container" to="/">
        <img src={Logo} alt="logo" className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
      </div>
    </HEaderStyled>
  );
};

const HEaderStyled = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  .logo {
    height: 100%;
    width: 90px;
    padding-left: 15px;
  }

  .options {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .option {
      padding: 10px 15px;
    }
  }
`;
