import React from 'react';
import styled from 'styled-components';
import FancyButton from '../ui/fancy-button';

const StyledHeader = styled.section`
  height: 70vh;
  background-color: var(--main-color);

  .header-container {
    width: var(--main-container-width);
    background: url('/header-bg.png');
    background-repeat: no-repeat;
    background-position: right;
    background-size: auto 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    color: white;
    gap: 35px;
    z-index: 100;

    h1 {
      font-size: 4rem;
      font-weight: 600;
      line-height: normal;
    }

    p {
      width: 40%;
    }

    button {
      padding: 15px 10px;
      width: fit-content;
      font-size: 0.85rem;
      font-weight: 500;
      background-position: (100%, 100%);

      :hover {
        background-color: var(--secondary-color);
        background-position: 100%;
      }
    }
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <div className="header-container">
        <h1>
          We will give you an
          <br />
          Impeccable Look
        </h1>
        <p>You will leave lookin shara, relaxed and ready to take on the world, with that swagger in your stride.</p>
        <FancyButton title={'Book Appointment'} color={'red'} />
      </div>
    </StyledHeader>
  );
};

export default Header;
