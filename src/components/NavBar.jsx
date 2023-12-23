import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'; 

function NavBar() {
  return (

    <Container>


      <nav className="navbar">
        <ul className="navbar-list">


          {/* <li className="navbar-item">
            <ion-icon className="dark-white-mode navbar-link" name="contrast-outline" id="dark-white-mode"></ion-icon>
          </li> */}

          <li className="navbar-item">
            <Link  to="/"  className="navbar-link active">About</Link>
          </li>

          <li className="navbar-item">
            <Link to="/resume" className="navbar-link" >Resume</Link>
          </li>

          <li className="navbar-item">
            <Link to="/certificate" className="navbar-link" >Certificate</Link>
          </li>

          
          {/* <li className="navbar-item">
          <Link to="/projects" className="navbar-link" data-nav-link>Projects</Link>
          </li>
           */}
          
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
  background: hsla(240, 1%, 17%, 0.75);
  backdrop-filter: blur(10px);
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
`;