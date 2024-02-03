import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";

//maping
import { Project_list_1 } from "../assets/Project-list";

//test phase
import dribbleimg from "../assets/projects-img/dribbble_1.gif";

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
              {/* map through the array of project objects and create a li for each one */}
              {Project_list_1.map((pro_img, index) => (
                <li key={index} className="blog-post-item">
                  <a href={pro_img.link} target="_blank">
                    <figure className="blog-banner-box">
                      <img src={pro_img.src} alt={pro_img.alt} loading="lazy" />
                    </figure>

                    <div className="blog-content">
                      <h3 className="h3 blog-item-title">
                        {pro_img.blog_title}
                      </h3>

                      <p className="blog-text">{pro_img.blog_text}</p>
                    </div>
                  </a>
                </li>
              ))}
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
