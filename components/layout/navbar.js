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

  .nav-logo {
    height: 100%;
    aspect-ratio: 1;
    position: relative;
    margin: 0 auto;
  }
`;

const Navbar = () => {
  return (
    <StyledNavbar>
      <style global jsx>{`
        :root {
          --navbar-height: 8rem;
        }
      `}</style>

      <div className="navbar-inner">
        <div className="nav-logo">
          <Image src="/logo.png" layout="fill" objectFit="contain" alt="" />
        </div>
      </div>
    </StyledNavbar>
  );
};

export default Navbar;
