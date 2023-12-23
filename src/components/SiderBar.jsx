import React, {useState} from 'react'
import styled from 'styled-components';
import Tom_Photo from '../assets/images/tom_photo.webp'
import { FaChevronDown } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoCalendarOutline } from "react-icons/io5";
import HackerIcon from '../assets/images/hacker.svg';

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
      <aside className={`sidebar ${isSidebarActive ? 'active' : ''}`}>

        <div className="sidebar-info">
          <figure className="avatar-box">
            <img draggable="false"
              src={Tom_Photo} alt="Profile of TOM SABU" width="80" />
          </figure>

          <div className="info-content">
            <h1 className="name" title="TOM SABU">TOM SABU</h1>
            <p className="title">COMPUTER SCIENCE STUDENT</p>
          </div>

          <button className="info_more-btn" onClick={toggleSidebar}>
            <span>Show Contacts</span>
            <FaChevronDown />
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
                <a href="mailto:tomsabu0000@gmail.com" className="contact-link">tomsabu0000@</a>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <div className="service-icon-box">
                  <div className="hackericon">
                    <img src={HackerIcon} alt="hackericon" />
                  </div>
                </div>
              </div>

              <div className="contact-info">
                <p className="contact-title">TOM-HACKER</p>

                <a href="https://hacker.tomsabu.com" target="_blank" className="contact-link">tom.hacker</a>
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
          </ul>

          <div className="separator"></div>

          <ul className="social-list">
            <li className="social-item">
              <a href={linkedInURL} target="_blank" className="social-link">
                <FaLinkedin className='socials-icons' />
              </a>
            </li>

            <li className="social-item">
              <a href={githubURL} target="_blank" className="social-link">
                <FaGithub className='socials-icons'/>
              </a>
            </li>

            <li className="social-item">
              <a href={instagramURL} target="_blank" className="social-link">
                <FaInstagram className='socials-icons'/>
              </a>
            </li>
          </ul>
        </div>

      </aside>
    </Container>
  )
}

export default SiderBar

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
  filter: invert(77%) sepia(86%) saturate(294%) hue-rotate(344deg) brightness(101%) contrast(101%);
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


`;