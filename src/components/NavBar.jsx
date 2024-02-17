import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { path: "/", label: "About" },
  { path: "/resume", label: "Resume" },
  { path: "/projects", label: "Projects" },
];

function NavBar() {
  const location = useLocation();

  return (
    <Container>
      <nav className="navbar">
        <ul className="navbar-list">
          {navItems.map((item, index) => (
            <li key={index} className="navbar-item">
              <Link
                to={item.path}
                className={`navbar-link ${
                  location.pathname === item.path ? "active" : ""
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </Container>
  );
}

export default NavBar;

const Container = styled.div`
  .navbar {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
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
      --fs-8: 14px;
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
