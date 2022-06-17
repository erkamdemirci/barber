import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import SectionHeader from './section-header';

const StyledTeam = styled.section`
  min-height: 80vh;
  background-color: var(--main-color);
  padding: 50px 0;

  .gallery-container {
    max-width: 70%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    color: #636363;
    font-size: 3.5rem;
    font-family: 'Academy Engraved LET';
  }

  .image {
    position: relative;
  }

  .content {
    display: flex;
    flex-direction: column;

    .barbers {
      display: flex;
      flex-direction: row;
      gap: 20px;
    }
  }
`;

const Gallery = () => {
  return (
    <StyledTeam>
      <div className="gallery-container">
        <SectionHeader title={'OUR TEAM'} color={'#fff'} />
        <h1>Our Top 5 Barbers</h1>
        <div className="content">
          <div className="barber">
            <div className="image">
              <Image alt="" src="/gallery-1.jpeg" layout="fill" objectFit="cover" />
            </div>
            <div className="info">
              <div className="title">David B. Finklea</div>
              <div className="desc">
                Barber is a person whose accupation is mainly to cut dress style. Barber is a person whose occupation is mainly to cut dress style.
              </div>
              <div className="clients"></div>
              <div className="sign"></div>
            </div>
          </div>
          <div className="barbers">
            <div>A</div>
            <div>B</div>
            <div>C</div>
            <div>D</div>
            <div>E</div>
          </div>
        </div>
      </div>
    </StyledTeam>
  );
};

export default Gallery;
