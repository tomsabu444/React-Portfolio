import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";

function Home() {
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

  {/*        <section className="service">
            <h3 className="h3 service-title"> Tools i'm Using!</h3>

            <ul className="service-list">
               <li className="service-item">
                <div className="service-content-box">
                  <div className="service-item-text">
                    <img
                      draggable="false"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
                      alt="figma"
                      title="Figma"
                      width="40"
                    />
                    <img
                      draggable="false"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                      alt="HTML"
                      title="HTML"
                      width="40"
                    />
                    <img
                      draggable="false"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                      alt="CSS"
                      title="CSS"
                      width="40"
                    />
                    <img
                      draggable="false"
                      src="https://skillicons.dev/icons?i=js"
                      alt="Java Script"
                      title="Java Script"
                      width="40"
                    />
                    <img
                      draggable="false"
                      src="https://skillicons.dev/icons?i=react"
                      height="40"
                      alt="react logo"
                      title="React"
                    />
                    <img
                      draggable="false"
                      src="https://skillicons.dev/icons?i=bootstrap"
                      alt="Bootstrap"
                      title="Bootstrap"
                      width="40"
                    />
                    <img
                      draggable="false"
                      src="https://skillicons.dev/icons?i=php"
                      alt="PHP"
                      title="PHP"
                      width="40"
                    />
                    <img
                      draggable="false"
                      src="https://cdn.simpleicons.org/apache/D22128"
                      height="40"
                      title="Apache"
                      alt="apache logo"
                    />
                    <img
                      draggable="false"
                      src="https://cdn.simpleicons.org/mysql/4479A1"
                      height="40"
                      title="MySQL"
                      alt="mysql logo"
                    />
                  </div>
                </div>
              </li> */}
              {/* 
              <li className="service-item">
                <div className="service-content-box">
                  <div className="service-item-text">
                    <img
                      draggable="false"
                      src="https://skillicons.dev/icons?i=flutter"
                      height="40"
                      alt="flutter logo"
                      title="Flutter"
                    />
                    <img
                      draggable="false"
                      src="https://skillicons.dev/icons?i=dart"
                      height="40"
                      alt="dart logo"
                      title="Dart"
                    />
                    <img
                      draggable="false"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg"
                      height="40"
                      alt="androidstudio logo"
                      title="Android Studio"
                    />
                    <img
                      draggable="false"
                      src="https://skillicons.dev/icons?i=nodejs"
                      height="40"
                      alt="nodejs logo"
                      title="Nodejs"
                    />
                    <img
                      draggable="false"
                      src="https://cdn.simpleicons.org/android/3DDC84"
                      height="40"
                      alt="android logo"
                      title="Android"
                    />
                    <img
                      draggable="false"
                      src="https://skillicons.dev/icons?i=git"
                      height="40"
                      alt="git logo"
                      title="Git"
                    />
                  </div>
                </div>
              </li> */}
{/* 
              <li className="service-item">
                <div className="service-content-box">
                  <div className="service-item-text">
                    <img
                      src="https://skillicons.dev/icons?i=ae"
                      height="40"
                      alt="adobeaftereffects logo"
                      title="Adobe After Effects "
                    />
                    <img
                      src="https://skillicons.dev/icons?i=pr"
                      height="40"
                      alt="adobepremierepro logo"
                      title="Adobe Premiere Pro"
                    />
                    <img
                      src="https://skillicons.dev/icons?i=ps"
                      height="40"
                      alt="adobephotoshop logo"
                      title="Adobe Photoshop"
                    />
                    <img
                      src="https://skillicons.dev/icons?i=ai"
                      height="40"
                      alt="adobeillustrator logo"
                      title="Adobe Illustrator"
                    />
                    <img
                      src="https://skillicons.dev/icons?i=blender"
                      height="40"
                      alt="blender logo"
                      title="Blender"
                    />
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maya/maya-original.svg"
                      height="40"
                      alt="maya logo"
                      title="Maya"
                    />
                  </div>
                </div>
              </li>

              <li className="service-item">
                <div className="service-content-box">
                  <div className="service-item-text">
                    <img
                      draggable="false"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
                      height="40"
                      alt="vscode logo"
                      title="Visual Studio Code"
                    />
                    <img
                      draggable="false"
                      src="https://skillicons.dev/icons?i=discord"
                      height="40"
                      alt="discord logo"
                      title="Discord"
                    />
                    <img
                      draggable="false"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg"
                      height="40"
                      alt="googlecloud logo"
                      title="Google Cloud"
                    />
                    <img
                      draggable="false"
                      src="https://cdn.simpleicons.org/c/A8B9CC"
                      height="40"
                      alt="c logo"
                      title="C Programing"
                    />
                    <img
                      draggable="false"
                      src="https://skillicons.dev/icons?i=java"
                      height="40"
                      alt="java logo"
                      title="Java"
                    />
                    <img
                      draggable="false"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                      height="40"
                      alt="python logo"
                      title="Python"
                    />
                  </div>
                </div>
              </li>
            </ul>
          </section> */}

          <section className="clients">
            <h3 className="h3 clients-title">Tools I'm Using!</h3>

            <ul className="clients-list has-scrollbar">
              <li className="clients-item">
                <img
                  draggable="false"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
                  alt="figma"
                  title="Figma"
                  height="50"
                />
              </li>
              <li className="clients-item">
                <img
                  draggable="false"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                  alt="HTML"
                  title="HTML"
                  height="50"
                />
              </li>
              <li className="clients-item">
                <img
                  draggable="false"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                  alt="CSS"
                  title="CSS"
                  height="50"
                />
              </li>
              <li className="clients-item">
                <img
                  draggable="false"
                  src="https://skillicons.dev/icons?i=js"
                  alt="Java Script"
                  title="Java Script"
                  height="50"
                />
              </li>
              <li className="clients-item">
                <img
                  draggable="false"
                  src="https://skillicons.dev/icons?i=react"
                  height="50"
                  alt="react logo"
                  title="React"
                />
              </li>
              <li className="clients-item">
                <img
                  draggable="false"
                  src="https://skillicons.dev/icons?i=bootstrap"
                  alt="Bootstrap"
                  title="Bootstrap"
                  height="50"
                />
              </li>
              <li className="clients-item">
                <img
                  draggable="false"
                  src="https://skillicons.dev/icons?i=php"
                  alt="PHP"
                  title="PHP"
                  height="50"
                />
              </li>
              <li className="clients-item">
                <img
                  draggable="false"
                  src="https://cdn.simpleicons.org/apache/D22128"
                  height="50"
                  title="Apache"
                  alt="apache logo"
                />
              </li>
              <li className="clients-item">
                <img
                  draggable="false"
                  src="https://cdn.simpleicons.org/mysql/4479A1"
                  height="50"
                  title="MySQL"
                  alt="mysql logo"
                />
              </li>
              <li className="clients-item">
                <img
                  draggable="false"
                  src="https://skillicons.dev/icons?i=flutter"
                  height="40"
                  alt="flutter logo"
                  title="Flutter"
                />
              </li>
              <li className="clients-item">
                <img
                  draggable="false"
                  src="https://skillicons.dev/icons?i=dart"
                  height="40"
                  alt="dart logo"
                  title="Dart"
                />
              </li>
              <li className="clients-item">
                <img
                  draggable="false"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg"
                  height="40"
                  alt="androidstudio logo"
                  title="Android Studio"
                />
              </li>
              <li className="clients-item">

              <img
                draggable="false"
                src="https://skillicons.dev/icons?i=nodejs"
                height="40"
                alt="nodejs logo"
                title="Nodejs"
                />
                </li>
              <li className="clients-item">
                <img
                  draggable="false"
                  src="https://cdn.simpleicons.org/android/3DDC84"
                  height="40"
                  alt="android logo"
                  title="Android"
                />
              </li>
              <li className="clients-item">
                <img
                  draggable="false"
                  src="https://skillicons.dev/icons?i=git"
                  height="40"
                  alt="git logo"
                  title="Git"
                />
              </li>

              <li className="clients-item">
                <img
                  src="https://skillicons.dev/icons?i=ae"
                  height="40"
                  alt="adobeaftereffects logo"
                  title="Adobe After Effects "
                />
              </li>
              <li className="clients-item">
                <img
                  src="https://skillicons.dev/icons?i=pr"
                  height="40"
                  alt="adobepremierepro logo"
                  title="Adobe Premiere Pro"
                />
              </li>
              <li className="clients-item">
                <img
                  src="https://skillicons.dev/icons?i=ps"
                  height="40"
                  alt="adobephotoshop logo"
                  title="Adobe Photoshop"
                />
              </li>
              <li className="clients-item">
                <img
                  src="https://skillicons.dev/icons?i=ai"
                  height="40"
                  alt="adobeillustrator logo"
                  title="Adobe Illustrator"
                />
              </li>
              <li className="clients-item">
                <img
                  src="https://skillicons.dev/icons?i=blender"
                  height="40"
                  alt="blender logo"
                  title="Blender"
                />
              </li>
              <li className="clients-item">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maya/maya-original.svg"
                  height="40"
                  alt="maya logo"
                  title="Maya"
                />
              </li>
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
 * #clients 
 */

  .clients {
    margin-bottom: 15px;
  }

  .clients-list {
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

  .clients-item {
    min-width: 50%;
    scroll-snap-align: start;
  }

  /* .clients-item img {
    width: 100%;
    filter: grayscale(1);
    transition: var(--transition-1);
  }

  .clients-item img:hover {
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

    .clients-item {
      min-width: calc(33.33% - 10px);
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
     clients
      */

    .clients-list {
      gap: 50px;

      padding: 45px;
      scroll-padding-inline: 45px;
    }

    .clients-item {
      min-width: calc(33.33% - 35px);
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
     clients
     */

    .clients-item {
      min-width: calc(20% - 40px);
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
