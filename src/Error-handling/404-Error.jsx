import React from "react";
import styled from "styled-components";
import Layout_SideBar from "../components/Layout_SideBar";
const NotFound = () => {
  return (
    <Layout_SideBar>
      <Container>
        <div className="glitch-404">
          <div className="notfound">
            <div className="notfound-404">
              <h1>404</h1>
              <h2>Page not found</h2>
            </div>
            <a href="/">Homepage</a>
          </div>
        </div>
      </Container>
    </Layout_SideBar>
  );
};

export default NotFound;

const Container = styled.div`
  /* .glitch-404 {
    position: relative;
    height: 100vh;
    background: #030005
} */

  .glitch-404 .notfound {
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  .notfound {
    max-height: 80%;
    max-width: 767px;
    width: 100%;
    line-height: 1.4;
    text-align: center;
  }

  .notfound .notfound-404 {
    position: relative;
    height: 180px;
    margin-bottom: 20px;
    z-index: -1;
  }

  .notfound .notfound-404 h1 {
    font-family: montserrat, sans-serif;
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    font-size: 224px;
    font-weight: 900;
    margin-top: 25px;
    margin-bottom: 0;
    margin-left: -12px;
    color: #030005;
    text-transform: uppercase;
    text-shadow: -1px -1px 0 var(--vegas-gold), 1px 1px 0 var(--white-1);
    letter-spacing: -20px;
  }

  .notfound .notfound-404 h2 {
    font-family: montserrat, sans-serif;
    position: absolute;
    left: 0;
    right: 0;
    top: 110px;
    font-size: 42px;
    font-weight: 700;
    color: #fff;
    text-transform: uppercase;
    text-shadow: 0 2px 0 #8400ff;
    letter-spacing: 13px;
    margin: 0;
  }

  .notfound a {
    margin-top: 20px;
    font-family: montserrat, sans-serif;
    display: inline-block;
    text-transform: uppercase;
    color: #ffffff;
    text-decoration: none;
    border: 2px solid;
    background: 0 0;
    padding: 10px 40px;
    font-size: 14px;
    font-weight: 700;
    -webkit-transition: 0.2s all;
    transition: 0.2s all;
    margin-top: 100px;
  }

  .notfound a:hover {
    color: var(--vegas-gold);
  }

  // responsive below 1246px

  @media only screen and (min-width: 1024px) and (max-width: 1246px) {
    .notfound {
      margin-top: 5%;
    }


    .notfound .notfound-404 h2 {

    left: -500px;
    right: -500px;
    top: 110px;
    font-size: 42px;
    font-weight: 700;

  }

  .notfound a {
   position: absolute;
   left: -100px;

   
   
  }

  }

  // responsive below 767px
  @media only screen and (max-width: 767px) {
    
    .notfound .notfound-404 h2 {
      font-size: 34px;
    }
  }

  // responsive below 480px
  @media only screen and (max-width: 480px) {
    .notfound .notfound-404 h1 {
      font-size: 182px;
    }
  }
`;
