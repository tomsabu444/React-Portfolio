import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Dbms_Nptel_Certificate from '../assets/images/Data_Base_Management_System-1.webp'
import Offenso_certificate from '../assets/images/TOM_SABU_page-0001.webp';
import TKM_certificate from '../assets/images/cr_5.webp';
import IIT_Madras_certificate1 from '../assets/images/cr_3-1.webp';
import Blender_linkedin_certificate from '../assets/images/CertificateOfCompletion_Blender_3_Essential_Training_page-0001.webp';
import Linux_linkedin_certificate from '../assets/images/CertificateOfCompletion_Linux_Overview_and_Installation_page-0001.webp';
import IIT_Madras_certificate2 from '../assets/images/cr_4-1.webp';
import Wireless_network_linkedin_certificate from '../assets/images/cr_1.webp';
import GameIndustry_linkedin_certificate from '../assets/images/cr_2.webp';
import Tegmagi_Intership_certificate from '../assets/images/TOM_SABU_1_page-0001.webp';
import { FaChevronDown } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";

function Certificate() {
  return (
    <Layout>


      <Container >
       
      <article className="certificate active" >
        <header>
          <h2 className="h2 article-title">Certificate</h2>
        </header>
        <br/>

        <section className="projects">
          {/* <ul className="filter-list">
            <li className="filter-item">
              <button className="active" >All</button>
            </li>

            <li className="filter-item">
              <button >Linkedin</button>
            </li>

            <li className="filter-item">
              <button>Cyber security</button>
            </li>

            <li className="filter-item">
              <button>Web development</button>
            </li>
          </ul> 

           <div className="filter-select-box">
            <button className="filter-select">
              <div className="select-value">
                Select category
              </div>

              <div className="select-icon">
              <FaChevronDown />
              </div>
            </button>

            <ul className="select-list">
              <li className="select-item">
                <button>All</button>
              </li>

              <li className="select-item">
                <button>Linkedin</button>
              </li>

              <li className="select-item">
                <button>Cyber security</button>
              </li>

              <li className="select-item">
                <button>Web development</button>
              </li>
            </ul>
          </div> */}

          <ul className="project-list">
            <li className="project-item active">
              <a href="#Certificate-1">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                  <IoEyeOutline />
                  </div>

                  <img
                    src={Dbms_Nptel_Certificate}
                    alt="Data_Base_Management_System" loading="lazy" />
                </figure>
              </a>
            </li>

            <li className="project-item active">
              <a href="#Certificate-2">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <IoEyeOutline />
                  </div>

                  <img
                    src={Offenso_certificate }
                    alt="cyber security" loading="lazy" />
                </figure>
              </a>
            </li>

            <li className="project-item active">
              <a href="#Certificate-3">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <IoEyeOutline />
                  </div>

                  <img src={TKM_certificate}
                    alt="web development" loading="lazy" />
                </figure>
              </a>
            </li>

            <li className="project-item active">
              <a href="#Certificate-4">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <IoEyeOutline />
                  </div>

                  <img src={IIT_Madras_certificate1}
                    alt="web development" loading="lazy" />
                </figure>
              </a>
            </li>

            <li className="project-item active">
              <a href="#Certificate-5">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <IoEyeOutline />
                  </div>

                  <img
                    src={Blender_linkedin_certificate}
                    alt="linkedin" loading="lazy" />
                </figure>
              </a>
            </li>

            <li className="project-item active">
              <a href="#Certificate-6">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                  <IoEyeOutline />
                  </div>

                  <img
                 src={Linux_linkedin_certificate}
                    
                    alt="linkedin" loading="lazy" />
                </figure>
              </a>
            </li>

            <li className="project-item active">
              <a href="#Certificate-7">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                <IoEyeOutline />
                  </div>

                  <img src={IIT_Madras_certificate2}
                    alt="cyber security" loading="lazy" />
                </figure>
              </a>
            </li>

            <li className="project-item active" >
              <a href="#Certificate-8">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                   <IoEyeOutline />
                  </div>

                  <img src={Wireless_network_linkedin_certificate}
                    alt="linkedin" loading="lazy" />
                </figure>
              </a>
            </li>

            <li className="project-item active" >
              <a href="#Certificate-9">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                   <IoEyeOutline />
                  </div>

                  <img src={GameIndustry_linkedin_certificate}
                    alt="linkedin" loading="lazy" />
                </figure>
              </a>
            </li>

            <li className="project-item active" >
              <a href="#Certificate-10">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                   <IoEyeOutline />
                  </div>

                  <img
                    src={Tegmagi_Intership_certificate}
                    alt="cyber security" loading="lazy" />
                </figure>
              </a>
            </li>
          </ul>

          <div className="image-popup" id="imageModal">
            <span className="close">&times;</span>
            <img className="image-popup-content" id="modalImage" />
          </div>
        </section>
      </article>

      </Container>

      
    </Layout>
  )
}

export default Certificate

const Container = styled.div`


.filter-list {
  display: none;
}

.filter-select-box {
  position: relative;
  margin-bottom: 25px;
}

.filter-select {
  background: var(--eerie-black-2);
  color: var(--light-gray);
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 12px 16px;
  border: 1px solid var(--jet);
  border-radius: 14px;
  font-size: var(--fs-6);
  font-weight: var(--fw-300);
}

.filter-select.active .select-icon {
  transform: rotate(0.5turn);
}

.select-list {
  background: var(--eerie-black-2);
  position: absolute;
  top: calc(100% + 6px);
  width: 100%;
  padding: 6px;
  border: 1px solid var(--jet);
  border-radius: 14px;
  z-index: 2;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: 0.15s ease-in-out;
}

.filter-select.active+.select-list {
  opacity: 1;
  visibility: visible;
  pointer-events: all;
}

.select-item button {
  background: var(--eerie-black-2);
  color: var(--light-gray);
  font-size: var(--fs-6);
  font-weight: var(--fw-300);
  text-transform: capitalize;
  width: 100%;
  padding: 8px 10px;
  border-radius: 8px;
}

.select-item button:hover {
  --eerie-black-2: hsl(240, 2%, 20%);
}

.project-list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  margin-bottom: 10px;
}

.project-item {
  display: none;
}

.project-item.active {
  display: block;
  animation: scaleUp 0.25s ease forwards;
}

@keyframes scaleUp {
  0% {
    transform: scale(0.5);
  }

  100% {
    transform: scale(1);
  }
}

.project-item>a {
  width: 100%;
}

.project-img {
  position: relative;
  width: 100%;
  height: auto;
  border-radius: 16px;
  overflow: hidden;
  margin: auto;
}

.project-img::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  z-index: 1;
  transition: var(--transition-1);
}

.project-item>a:hover .project-img::before {
  background: hsla(0, 0%, 0%, 0.5);
}

.project-item-icon-box {
  --scale: 0.8;

  background: var(--jet);
  color: var(--orange-yellow-crayola);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(var(--scale));
  font-size: 20px;
  padding: 18px;
  border-radius: 12px;
  opacity: 0;
  z-index: 1;
  transition: var(--transition-1);
}

.project-item>a:hover .project-item-icon-box {
  --scale: 1;
  opacity: 1;
}

.project-item-icon-box ion-icon {
  --ionicon-stroke-width: 50px;
}

.project-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: var(--transition-1);
}

.project-item>a:hover img {
  transform: scale(1.1);
}

.project-title,
.project-category {
  margin-left: 10px;
}

.project-title {
  color: var(--white-2);
  font-size: var(--fs-5);
  font-weight: var(--fw-400);
  text-transform: capitalize;
  line-height: 1.3;
}

.project-category {
  color: var(--light-gray-70);
  font-size: var(--fs-6);
  font-weight: var(--fw-300);
}

.image-popup {
  display: none;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.8);
  animation-name: fadeIn;
  animation-duration: 1s;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.image-popup-content {
  display: block;
  margin: auto;
  margin-top: 5%;
  max-width: 100%;
  max-height: 100%;
}

.close {
  position: absolute;
  top: 20px;
  right: 30px;
  font-size: 30px;
  cursor: pointer;
  color: white;
}

.close:hover {
  color: #ccc;
}



/**
 * responsive larger than 450px screen
 */

@media (min-width: 450px) {

  /**
   * #PORTFOLIO, BLOG 
   */

  .project-img{
    height: auto;
  }

}


/**
 * responsive larger than 540px screen
 */

@media (min-width: 540px) {
  .image-popup-content {
    margin-top: 25%;
  }
}


/**
 * responsive larger than 580px screen
 */

@media (min-width: 580px) {
  
 /**
   * #PORTFOLIO, BLOG
   */

 .project-img,
  .blog-banner-box {
    border-radius: 16px;
  }

  .blog-posts-list {
    gap: 30px;
  }

  .blog-content {
    padding: 25px;
  }

  /*
Image POP_UP

*/
  .image-popup-content {

    margin-top: 20%;

  }

}

/**
 * responsive larger than 768px screen
 */

@media (min-width: 768px) {

   /**
   * PORTFOLIO
   */

   .article-title {
    padding-bottom: 20px;
  }

  .filter-select-box {
    display: none;
  }

  .filter-list {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 25px;
    padding-left: 5px;
    margin-bottom: 30px;
  }

  .filter-item button {
    color: var(--light-gray);
    font-size: var(--fs-5);
    transition: var(--transition-1);
  }

  .filter-item button:hover {
    color: var(--light-gray-70);
  }

  .filter-item button.active {
    color: var(--orange-yellow-crayola);
  }

  /* portfolio and blog grid */

  .project-list,
  .blog-posts-list {
    grid-template-columns: 1fr 1fr;
  }

  /*
Image POP_UP

*/
  .image-popup-content {

    margin-top: 10%;

  }

}

@media (min-width: 1024px) {

 /**
   * PORTFOLIO
   */

 .project-list {
    grid-template-columns: repeat(3, 1fr);
  }

  /*
Image POP_UP

*/
  .image-popup-content {

    margin-top: 5%;

  }

}

/**
 * responsive larger than 1250px screen
 */

@media (min-width: 1250px) {

    /*
Image POP_UP

*/
.image-popup-content {

margin-top: 5%;

}

}
`;