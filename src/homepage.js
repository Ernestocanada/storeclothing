import React from "react";
import "./homepage.scss";
import styled from "styled-components";

const HomePage = () => (
  <HomePageStyled>
    <div className="homepage">
      <h1>Welcome to my Homepage</h1>
      <div className="directory-menu">
        <div className="menu-item">
          <div className="content">
            <div className="title">HATS</div>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <div className="title">JACKETS</div>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <div className="title">SHOES</div>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <div className="title">WOMENS</div>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <div className="title">MENS</div>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </div>
      </div>
    </div>
  </HomePageStyled>
);

export default HomePage;

const HomePageStyled = styled.div`
  .homepage {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 80px;
  }

  .directory-menu {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .menu-item {
    min-width: 30%;
    height: 240px;
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    margin: 0 7.5px 15px;

    &:first-child {
      margin-right: 7.5px;
    }

    &:last-child {
      margin-left: 7.5px;
    }

    .content {
      height: 90px;
      padding: 0 25px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border: 1px solid black;

      .title {
        font-weight: bold;
        margin-bottom: 6px;
        font-size: 22px;
        color: #4a4a4a;
      }

      .subtitle {
        font-weight: lighter;
        font-size: 16px;
      }
    }
  }
`;
