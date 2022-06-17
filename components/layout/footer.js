import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: var(--main-color);
  border-top: 1px solid rgba(0, 0, 0, 0.6);
  padding: 20px 10%;
  color: white;
  font-weight: 200;
  text-align: center;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <div>
        © 2022 Barber Shop powered by
        <a href="https://erkamdemirci.com" className="font-bold ml-1">
          Erkam Demirci
        </a>
      </div>
    </StyledFooter>
  );
};

export default Footer;
