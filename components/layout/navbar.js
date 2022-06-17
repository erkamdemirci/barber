import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

const StyledNavbar = styled.div`
  background-color: var(--main-color);

  .navbar-inner {
    width: 90%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    height: var(--navbar-height);
  }

  nav {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    gap: 30px;
    color: white;
    font-weight: 500;
  }

  .nav-logo {
    position: relative;
    width: 100px;
    height: 100%;
  }

  .booking-icon {
    color: var(--secondary-color);
  }
`;

const Navbar = () => {
  return (
    <StyledNavbar>
      <style global jsx>{`
        :root {
          --navbar-height: 6rem;
        }
      `}</style>

      <div className="navbar-inner">
        <div className="nav-logo">
          <Image src="/logo.png" layout="fill" objectFit="contain" alt="" />
        </div>
        <nav>
          <Link href="#">
            <a>Home</a>
          </Link>
          <Link href="#">
            <a>About Us</a>
          </Link>
          <Link href="#">
            <a>Services</a>
          </Link>
          <Link href="#">
            <a>Pricing</a>
          </Link>
        </nav>
        <div className="booking-icon">
          <button>Book Appointment</button>
        </div>
      </div>
    </StyledNavbar>
  );
};

export default Navbar;
