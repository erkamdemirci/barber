import React from 'react';
import styled from 'styled-components';

const StyledDiscount = styled.section`
  height: 370px;
  display: flex;
  background-color: var(--main-color);

  .discount-container {
    width: 60%;
    max-width: 70vw;
    height: 100%;
    margin: 0 auto;
    padding: 3%;
    display: flex;
    flex-direction: column;
    gap: 30px;
    background: url('/discount-bg.jpeg');
    background-repeat: no-repeat;
    background-position: right;
    background-size: auto 100%;
    background-color: #fcf2e4;

    h1 {
      font-weight: 700;
      font-size: 3rem;
      line-height: normal;
    }

    p {
      font-size: 1.5rem;
      font-weight: 300;
    }
  }
`;

const Discount = () => {
  return (
    <StyledDiscount>
      <div className="discount-container">
        <h1>
          Get 20% Discount
          <br />
          off your first booking
        </h1>
        <p>
          Get your discount by book appointment from
          <br />
          25th Dec 2021 - 1st Dec 2022
        </p>
      </div>
    </StyledDiscount>
  );
};

export default Discount;
