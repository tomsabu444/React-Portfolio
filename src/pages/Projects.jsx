import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";

//test phase
import dribbleimg from "../assets/projects-img/dribbble_1.gif";
import calculatorimg from "../assets/projects-img/calculator.png";
import todo_listimg from "../assets/projects-img/todo-list.png";
import login_pageimg from "../assets/projects-img/login-page.png";
function Projects() {
  return (
    <Layout>
      <Container>
        <article className="blog active">
          <header>
            <h2 className="h2 article-title">Projects</h2>
          </header>

          <section className="blog-posts">
            <ul className="blog-posts-list">
              <li className="blog-post-item">
                <a href="https://todo.tomsabu.com" target="_blank">
                  <figure className="blog-banner-box">
                    <img
                      src={todo_listimg}
                      alt="Todo List Project"
                      loading="lazy"
                    />
                  </figure>

                  <div className="blog-content">
                    <h3 className="h3 blog-item-title">Todo List</h3>

                    <p className="blog-text">
                      A React-based to-do list app with add, edit, and delete
                      functionality, featuring reminders and completion tracking
                      ~!
                    </p>
                  </div>
                </a>
              </li>

              <li className="blog-post-item">
                <a href="https://tomsabu444.github.io/FrontEnd-DEV/FuturisticCalculator/" target="_blank">
                  <figure className="blog-banner-box">
                    <img
                      src={calculatorimg}
                      alt="Best fonts every designer"
                      loading="lazy"
                    />
                  </figure>

                  <div className="blog-content">
                    <h3 className="h3 blog-item-title">
                      Simple Calculator App
                    </h3>

                    <p className="blog-text">
                      Simple Calculator App the easy-to-use , a clean interface,
                      large display, and memory functions for efficient. ~
                    </p>
                  </div>
                </a>
              </li>

              <li className="blog-post-item">
                <a href="https://tomsabu444.github.io/FrontEnd-DEV/simple-loginpage/">
                  <figure className="blog-banner-box">
                    <img
                      src={login_pageimg}
                      alt="Design digest #80"
                      loading="lazy"
                    />
                  </figure>

                  <div className="blog-content">
                    {/* <div className="blog-meta">
                      <p className="blog-category">Design</p>

                      <span className="dot"></span>

                      <time dateTime="2022-02-23">Fab 23, 2022</time>
                    </div> */}

                    <h3 className="h3 blog-item-title">Login Page Design</h3>

                    <p className="blog-text">
                      Streamlined and stylish, our Login Page Design offers a
                      fuss-free entry point. Experience simplicity and security
                      seamlessly blended into one
                    </p>
                  </div>
                </a>
              </li>
            </ul>
          </section>
        </article>
      </Container>
    </Layout>
  );
}

export default Projects;

const Container = styled.div`
  .article-title {
    margin-bottom: 30px;
  }

  .blog-posts {
    margin-bottom: 10px;
  }

  .blog-posts-list {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .blog-post-item > a {
    position: relative;
    background: var(--border-gradient-onyx);
    height: 100%;
    box-shadow: var(--shadow-4);
    border-radius: 16px;
    z-index: 1;
  }

  .blog-post-item > a::before {
    content: "";
    position: absolute;
    inset: 1px;
    border-radius: inherit;
    background: var(--eerie-black-1);
    z-index: -1;
  }

  .blog-banner-box {
    width: 100%;
    height: 200px;
    border-radius: 12px;
    overflow: hidden;
  }

  .blog-banner-box img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: var(--transition-1);
  }

  .blog-post-item > a:hover .blog-banner-box img {
    transform: scale(1.1);
  }

  .blog-content {
    padding: 15px;
  }

  .blog-meta {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 7px;
    margin-bottom: 10px;
  }

  .blog-meta :is(.blog-category, time) {
    color: var(--light-gray-70);
    font-size: var(--fs-6);
    font-weight: var(--fw-300);
  }

  .blog-meta .dot {
    background: var(--light-gray-70);
    width: 4px;
    height: 4px;
    border-radius: 4px;
  }

  .blog-item-title {
    margin-bottom: 10px;
    line-height: 1.3;
    transition: var(--transition-1);
  }

  .blog-post-item > a:hover .blog-item-title {
    color: var(--orange-yellow-crayola);
  }

  .blog-text {
    color: var(--light-gray);
    font-size: var(--fs-6);
    font-weight: var(--fw-300);
    line-height: 1.6;
  }

  @media (min-width: 450px) {
    /**
 * # BLOG 
 */

    .blog-banner-box {
      height: auto;
    }

    /**
 * responsive larger than 580px screen
 */

    @media (min-width: 580px) {
      /**
   * # BLOG
   */

      .blog-banner-box {
        border-radius: 16px;
      }

      .blog-posts-list {
        gap: 30px;
      }

      .blog-content {
        padding: 25px;
      }
    }

    /**
 * responsive larger than 768px screen
 */

    @media (min-width: 768px) {
      /* blog grid */
      .blog-posts-list {
        grid-template-columns: 1fr 1fr;
      }
    }

    /**
 * responsive larger than 1024px screen
 */

    @media (min-width: 1024px) {
      /**
   * BLOG
   */

      .blog-banner-box {
        height: 230px;
      }
    }
  }
`;
