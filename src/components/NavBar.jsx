import React from 'react'
import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom';

function NavBar() {

  const location = useLocation(); // used for changing then active state of the NavBar

  return (

    <Container>


      <nav className="navbar">
        <ul className="navbar-list">


          {/* <li className="navbar-item">
            <ion-icon className="dark-white-mode navbar-link" name="contrast-outline" id="dark-white-mode"></ion-icon>
          </li> */}

          <li className="navbar-item">
            <Link to="/" className={`navbar-link ${location.pathname === '/' ? 'active' : ''}`}>About</Link>
          </li>

          <li className="navbar-item">
            <Link to="/resume" className={`navbar-link ${location.pathname === '/resume' ? 'active' : ''}`}>Resume</Link>
          </li>

          {/* <li className="navbar-item">
            <Link to="/certificat" className={`navbar-link ${location.pathname === '/certificate' ? 'active' : ''}`}>Certificate</Link>
          </li> */}


          <li className="navbar-item">
          <Link to="/projects" className={`navbar-link ${location.pathname === '/projects' ? 'active' : ''}`}>Projects</Link>
          </li>
          

          {/* <li className="navbar-item">
          <Link className="navbar-link" data-nav-link>Contact</Link>
          </li> */}

        </ul>
      </nav>
    </Container>
  )
}

export default NavBar

const Container = styled.div`
.navbar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  /* background: hsla(240, 1%, 17%, 0.75); */
  background-color: var(--eerie-black-3);
  backdrop-filter: blur(100px);
  border: 1px solid var(--jet);
  border-radius: 12px 12px 0 0;
  box-shadow: var(--shadow-2);
  z-index: 5;
}

.navbar-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
}

.navbar-link {
  color: var(--light-gray);
  font-size: var(--fs-8);
  padding: 20px 7px;
  transition: color var(--transition-1);
}

.navbar-link:hover,
.navbar-link:focus {
  color: var(--light-gray-70);
}

.navbar-link.active {
  color: var(--orange-yellow-crayola);
}

/**
 * responsive larger than 580px screen
 */

@media (min-width: 580px) {
  
  /**
   * #NAVBAR
   */

  .navbar {
    border-radius: 20px 20px 0 0;
  }

  .navbar-list {
    gap: 20px;
  }

  .navbar-link {
    --fs-8: 14px;  //need to fix remember
  }

}

/**
 * responsive larger than 768px screen
 */

@media (min-width: 768px) {

  /**
   * NAVBAR
   */

  .navbar-link {
    --fs-8: 15px;
  }
}


/**
 * responsive larger than 1024px screen
 */

@media (min-width: 1024px) {


   /**
   * NAVBAR
   */

   .navbar {
    position: absolute;
    bottom: auto;
    top: 0;
    left: auto;
    right: 0;
    width: max-content;
    border-radius: 0 20px;
    padding: 0 20px;
    box-shadow: none;
  }

  .navbar-list {
    gap: 30px;
    padding: 0 20px;
  }

  .navbar-link {
    font-weight: var(--fw-500);
  }


}


`;