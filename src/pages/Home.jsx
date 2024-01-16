import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import { tools_Icons_1, tools_Icons_2 } from "../assets/Skill-Icon.js";

function Home() {
  // console.log(tools_Icons_1);
  return (
    <Layout>
      <Container>
        <article className="about active">
          <header>
            <h2 className="h2 article-title">About me</h2>
          </header>

          <section className="about-text">
            <p>
              As an engineering student, I have a deep passion for becoming a
              Developer . I am eager to expand my knowledge and explore new
              technologies, with a strong willingness to apply what I have
              learned. I am actively seeking opportunities where I can
              demonstrate my acquired skills and contribute to the achievement
              of organizational goals. With a comprehensive approach, I aim to
              provide a detailed understanding of my abilities and aspirations
              in an informal tone. By delving in-depth into my passion for
              development and my commitment.
            </p>
          </section>

          {/* Horizontal Scrooll 1 */}

          <section className="tool-icon">
            <h3 className="h3 tool-icon-title">Language | Framework </h3>

            <ul className="tool-icon-list has-scrollbar">
              {tools_Icons_1.map((icon, index) => (
                <li key={index} className="tool-icon-item">
                  <img
                    draggable="false"
                    src={icon.src}
                    alt={icon.alt}
                    title={icon.title}
                    height={icon.height}
                  />
                </li>
              ))}
            </ul>
          </section>

          {/* Horizontal Scrooll 2*/}

          <section className="tool-icon">
            <h3 className="h3 tool-icon-title">Software I'm Using!</h3>

            <ul className="tool-icon-list has-scrollbar">
              {tools_Icons_2.map((icon, index) => (
                <li key={index} className="tool-icon-item">
                  <img
                    draggable="false"
                    src={icon.src}
                    alt={icon.alt}
                    title={icon.title}
                    height={icon.height}
                  />
                </li>
              ))}
            </ul>
          </section>
        </article>
      </Container>
    </Layout>
  );
}

export default Home;

const Container = styled.div`
  .about .article-title {
    margin-bottom: 15px;
  }

  .about-text {
    color: var(--light-gray);
    font-size: var(--fs-6);
    font-weight: var(--fw-300);
    line-height: 1.6;
  }

  .about-text p {
    margin-bottom: 15px;
  }

  /**
 * #service 
 */

  .service {
    margin-bottom: 35px;
  }

  .service-title {
    margin-bottom: 20px;
  }

  .service-list {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .service-item {
    position: relative;
    background: var(--border-gradient-onyx);
    padding: 20px;
    border-radius: 14px;
    box-shadow: var(--shadow-2);
    z-index: 1;
  }

  .service-item::before {
    content: "";
    position: absolute;
    inset: 1px;
    background: var(--bg-gradient-jet);
    border-radius: inherit;
    z-index: -1;
  }

  .service-icon-box {
    margin-bottom: 10px;
  }

  .service-icon-box img {
    margin: auto;
  }

  .service-content-box {
    text-align: center;
  }

  .service-item-title {
    margin-bottom: 7px;
  }

  .service-item-text {
    padding: 20px;
    display: grid;
    place-items: center;
    justify-content: center;
    grid-gap: 50px;
    grid-template-columns: 10px 10px 10px;
    grid-template-rows: 10px;
  }

  /**
 * #tool-icon 
 */

  .tool-icon {
    margin-bottom: 35px;
  }

  .tool-icon-title {
    text-align: center;
  }

  .tool-icon-list {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 15px;
    margin: 0 -15px;
    padding: 25px;
    padding-bottom: 25px;
    overflow-x: auto;
    scroll-behavior: smooth;
    overscroll-behavior-inline: contain;
    scroll-snap-type: inline mandatory;
    scroll-padding-inline: 25px;
  }

  .tool-icon-item {
    min-width: 25%;
    scroll-snap-align: center;
  }

   
  .has-scrollbar::-webkit-scrollbar-button {
     width: 10%;
   }

  /* .tool-icon-item img {
    width: 100%;
    filter: grayscale(1);
    transition: var(--transition-1);
  }

  .tool-icon-item img:hover {
    filter: grayscale(0);
  } */

  /* RESponsive 450px */
  @media (min-width: 450px) {
    /*
         service box
           */
    .service-item-text {
      grid-template-columns: 10px 10px 10px 10px;
    }

    /**
   * client
   */

    .tool-icon-item {
      min-width: calc(33.33% - 35px);
    }
  }

  @media (min-width: 580px) {
    /**
   * #ABOUT
   */

    .about .article-title {
      margin-bottom: 20px;
    }

    .about-text {
      margin-bottom: 40px;
    }

    /* service */

    .service-item {
      display: block;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 18px;
      padding: 30px;
    }

    .service-icon-box {
      margin-bottom: 0;
      margin-top: 5px;
    }

    .service-icon-box .hackericon img {
      padding-top: 0%;
      width: 50%;
    }

    .service-content-box {
      text-align: center;
    }

    .service-item-text {
      grid-template-columns: 10px 10px 10px 10px;
    }

    /*
     tool-icon
      */

    .tool-icon-list {
      gap: 50px;

      padding: 45px;
      scroll-padding-inline: 45px;
    }

    .tool-icon-item {
      min-width: calc(33.33% - 60px);
    }
  }

  @media (min-width: 768px) {
    /**
   * ABOUT
   */
    .service-content-box {
      text-align: left;
    }

    .service-item-text {
      justify-content: left;
      grid-gap: 55px;
      grid-template-columns: 10px 10px 10px 10px 10px 10px 10px 10px 10px;
    }
    .tool-icon-item {
      min-width: calc(33.33% - 150px);
    }
  }

  @media (min-width: 1024px) {
    /**
   * ABOUT
   */

    /* service */

    .service-list {
      gap: 20px 25px;
    }

    .service-item-text {
      padding-top: 35px;
      grid-gap: 90px;
      grid-template-columns: 10px 10px 10px 10px 10px 10px 10px 10px 10px;
      grid-template-rows: 10px;
    }

    /*
     tool-icon
     */

    .tool-icon-item {
      min-width: calc(20% - 80px);
    }
  }
  @media (min-width: 1250px) {
    /**
   * ABOUT
   */

    /* service */

    .service-item-text {
      padding-top: 35px;
      grid-gap: 80px;
      grid-template-columns: 10px 10px 10px 10px 10px 10px 10px 10px 10px;
      grid-template-rows: 10px;
    }
  }
`;
