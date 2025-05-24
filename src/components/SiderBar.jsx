import React, { useState } from "react";
import styled from "styled-components";
import Tom_Photo from "../assets/images/tom_photo.webp";
import { FaChevronDown } from "react-icons/fa";
import { MdMailOutline , MdOutlineFileDownload  } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaSkullCrossbonesSolid } from "react-icons/lia";

function SiderBar() {
  // URLS
  const linkedInURL = "https://www.linkedin.com/in/tomsabu444/";
  const githubURL = "https://github.com/tomsabu444";
  const instagramURL = "https://www.instagram.com/tom_vettithanam/";

  const [isSidebarActive, setSidebarActive] = useState(false);
  const toggleSidebar = () => {
    setSidebarActive(!isSidebarActive);
  };

  return (
    <Container>
      <aside className={`sidebar ${isSidebarActive ? "active" : ""}`}>
        <div className="sidebar-info">
          <figure className="avatar-box">
            <img
              draggable="false"
              src={Tom_Photo}
              alt="Profile of TOM SABU"
              width="80"
            />
          </figure>

          <div className="info-content">
            <h1 className="name" title="TOM SABU">
              TOM SABU
            </h1>
            <p className="title">Ethical Hacking | Web Dev</p>
          </div>

          <button
            className="info_more-btn"
            aria-label="Show Contacts"
            onClick={toggleSidebar}
          >
            <span>Show Contacts</span>
            <FaChevronDown className="ion-icon" />
          </button>
        </div>

        <div className="sidebar-info_more">
          <div className="separator"></div>

          <ul className="contacts-list">
            <li className="contact-item">
              <div className="icon-box">
                <MdMailOutline />
              </div>
              <div className="contact-info">
                <p className="contact-title">Email</p>
                <a href="mailto:tomsabu0000@gmail.com" className="contact-link">
                  tomsabu0000@
                </a>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <IoCalendarOutline />
              </div>

              <div className="contact-info">
                <p className="contact-title">Birthday</p>

                <time dateTime="19-04-2003">April 19, 2003</time>
              </div>
            </li>

            {/* <li className="contact-item">
              <div className="icon-box">
                <div className="service-icon-box">
                  <div className="icon-box">
                  <MdOutlineFileDownload />
                  </div>
                </div>
              </div>

              <div className="contact-info">
                {/* <p className="contact-title">Download My CV</p> 

                <a
                  href="resume/TomSabuResume.pdf" // Ensure the CV file is placed in the public folder
                  className="contact-link"
                  target="_blank"
                  rel="noopener noreferrer"  // Security measure when using target="_blank"

                >
                  <button
                    style={{
                      padding: "10px 20px",
                      fontSize: "16px",
                      cursor: "pointer",
                      color:`var(--orange-yellow-crayola)`,
                      backgroundColor:`var(--eerie-black-1)`,
                      borderRadius:"10px"
                    }}
                  >
                    Download CV
                  </button>
                </a>
              </div>
            </li> */}
            
          </ul>

          <div className="separator"></div>

          <ul className="social-list">
            <li className="social-item">
              <a
                href={linkedInURL}
                aria-label="LinkedIn"
                target="_blank"
                className="social-link"
              >
                <FaLinkedin className="socials-icons" />
              </a>
            </li>

            <li className="social-item">
              <a
                href={githubURL}
                aria-label="github"
                target="_blank"
                className="social-link"
              >
                <FaGithub className="socials-icons" />
              </a>
            </li>

            <li className="social-item">
              <a
                href={instagramURL}
                aria-label="Instagram"
                target="_blank"
                className="social-link"
              >
                <FaInstagram className="socials-icons" />
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </Container>
  );
}

export default SiderBar;

const Container = styled.div`
  .sidebar {
    margin-bottom: 15px;
    max-height: 112px;
    overflow: hidden;
    transition: var(--transition-2);
  }

  .sidebar.active {
    max-height: 405px;
  }
  .sidebar-info {
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 15px;
  }

  /* .avatar-box {
  background: var(--bg-gradient-onyx);
  border-radius: 20px;
} */

  .avatar-box img {
    width: 65px;
    border-radius: 10px;
  }

  .info-content .name {
    color: var(--white-2);
    font-size: var(--fs-3);
    font-weight: var(--fw-500);
    letter-spacing: -0.25px;
    margin-bottom: 10px;
  }

  .info-content .title {
    color: var(--white-1);
    background: var(--onyx);
    font-size: var(--fs-8);
    font-weight: var(--fw-300);
    width: max-content;
    padding: 3px 12px;
    border-radius: 8px;
  }

  .service-icon-box .hackericon {
    display: flex;
    align-items: center;
  }

  .service-icon-box .hackericon img {
    width: 70%;
    object-fit: contain; /* or cover, depending on your preference */
    padding-top: 10px;
    padding-left: 5px;
  }
  .hackericon img {
    filter: invert(77%) sepia(86%) saturate(294%) hue-rotate(344deg)
      brightness(101%) contrast(101%);
  }

  .info_more-btn {
    position: absolute;
    top: -15px;
    right: -15px;
    border-radius: 0 15px;
    font-size: 13px;
    color: var(--orange-yellow-crayola);
    background: var(--border-gradient-onyx);
    padding: 10px;
    box-shadow: var(--shadow-2);
    transition: var(--transition-1);
    z-index: 1;
  }

  .info_more-btn::before {
    content: "";
    position: absolute;
    inset: 1px;
    border-radius: inherit;
    background: var(--bg-gradient-jet);
    transition: var(--transition-1);
    z-index: -1;
  }

  .info_more-btn:hover,
  .info_more-btn:focus {
    background: var(--bg-gradient-yellow-1);
  }

  .info_more-btn:hover::before,
  .info_more-btn:focus::before {
    background: var(--bg-gradient-yellow-2);
  }

  .info_more-btn span {
    display: none;
  }

  .sidebar-info_more {
    opacity: 0;
    visibility: hidden;
    transition: var(--transition-2);
  }

  .sidebar.active .sidebar-info_more {
    opacity: 1;
    visibility: visible;
  }

  .contacts-list {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .contact-item {
    min-width: 100%;
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .contact-info {
    max-width: calc(100% - 46px);
    width: calc(100% - 46px);
  }

  .contact-title {
    color: var(--light-gray-70);
    font-size: var(--fs-8);
    text-transform: uppercase;
    margin-bottom: 2px;
  }

  .contact-info :is(.contact-link, time, address) {
    color: var(--white-2);
    font-size: var(--fs-7);
  }

  .contact-info address {
    font-style: normal;
  }

  .social-list {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 15px;
    padding-bottom: 4px;
    padding-left: 7px;
  }

  .social-item .social-link {
    color: var(--light-gray-70);
    font-size: 18px;
  }

  .social-item .social-link:hover {
    color: var(--light-gray);
  }

  /**
 * responsive larger than 580px screen
 */

  @media (min-width: 580px) {
    /**
   * #SIDEBAR
   */

    .sidebar {
      max-height: 180px;
      margin-bottom: 30px;
    }

    .sidebar.active {
      max-height: 584px;
    }

    .sidebar-info {
      gap: 25px;
    }

    .avatar-box {
      border-radius: 10px;
    }

    .avatar-box img {
      width: 105px;
      border-radius: 15px;
    }

    .info-content .name {
      margin-bottom: 15px;
    }

    .info-content .title {
      padding: 5px 18px;
    }

    .light-mode .hackericon {
      fill: var(--go);
    }

    .info_more-btn {
      top: -30px;
      right: -30px;
      padding: 12px 15px;
    }

    .info_more-btn span {
      display: block;
      font-size: var(--fs-8);
    }

    .info_more-btn .ion-icon {
      display: none;
    }

    .separator {
      margin: 32px 0;
    }

    .contacts-list {
      gap: 20px;
    }

    .contact-info {
      max-width: calc(100% - 64px);
      width: calc(100% - 64px);
    }
  }

  /**
 * responsive larger than 768px screen
 */

  @media (min-width: 768px) {
    /**
   * SIDEBAR
   */

    .contacts-list {
      grid-template-columns: 1fr 1fr;
      gap: 30px 15px;
    }
  }

  /**
 * responsive larger than 1250px screen
 */

  @media (min-width: 1250px) {
    /**
   * SIDEBAR
   */

    .sidebar {
      position: sticky;
      top: 60px;
      max-height: max-content;
      /* height: 100%; */
      margin-bottom: 0;
      padding-top: 60px;
      z-index: 1;
    }

    .sidebar-info {
      flex-direction: column;
    }

    .avatar-box img {
      width: 150px;
      border-radius: 20px;
    }

    .info-content .name {
      white-space: nowrap;
      text-align: center;
    }

    .info-content .title {
      margin: auto;
    }

    .info_more-btn {
      display: none;
    }

    .sidebar-info_more {
      opacity: 1;
      visibility: visible;
    }

    .contacts-list {
      grid-template-columns: 1fr;
    }

    .contact-info :is(.contact-link) {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .contact-info :is(.contact-link, time, address) {
      --fs-7: 14px;
      font-weight: var(--fw-300);
    }

    .separator:last-of-type {
      margin: 15px 0;
      opacity: 0;
    }

    .social-list {
      justify-content: center;
    }
  }
`;
