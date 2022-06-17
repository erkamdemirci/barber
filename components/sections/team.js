import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import SectionHeader from './section-header';

const StyledTeam = styled.section`
  min-height: 80vh;
  background-color: var(--main-color);

  .gallery-container {
    max-width: 60%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .image {
    position: relative;
  }

  .content {
    display: flex;
    flex-direction: column;

    .barber {
      display: flex;
      flex-direction: row;
      background-color: var(--main-color-2);
      padding: 30px;
      border-radius: 50%/120%;
      border-bottom-right-radius: 0;
      align-items: center;
      gap: 30px;
      box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.15);

      .image,
      .info {
        flex: 1;
      }

      .image {
        max-width: 40%;
        aspect-ratio: 1;
        border-radius: 50%;
        overflow: hidden;
        flex-grow: 1;
      }

      .info {
        display: flex;
        flex-direction: column;
        gap: 30px;
        .title {
          font-family: 'Academy Engraved LET';
          color: var(--secondary-color);
          font-size: 3rem;
          font-family: ;
        }

        .desc {
          color: white;
          font-weight: 300;
          width: 85%;
          line-height: 25px;
          text-indent: 20px;
        }

        .sign {
          aspect-ratio: 2.5;
          width: 50%;
          position: relative;
        }
      }
    }

    .barbers {
      width: 60%;
      margin: 0 auto;
      display: flex;
      flex-direction: row;
      gap: 20px;
      justify-content: space-evenly;
      padding: 40px 0;
      cursor: pointer;

      .image {
        width: 90px;
        aspect-ratio: 1;
        border-radius: 50%;
        overflow: hidden;
        border: 3px solid lightgray;

        :hover {
          img {
            transition-duration: 300ms;
            transform: scale(1.1);
          }
        }
      }
    }
  }
`;

const Gallery = () => {
  return (
    <StyledTeam>
      <div className="gallery-container">
        <SectionHeader title={'THE TEAM'} color={'#fff'} />
        <div className="content">
          <div className="barber">
            <div className="image">
              <Image alt="" src="/gallery-4.jpeg" layout="fill" objectFit="cover" />
            </div>
            <div className="info">
              <div className="title">David B. Finklea</div>
              <div className="desc">
                Barber is a person whose accupation is mainly to cut dress style. Barber is a person whose occupation is mainly to cut dress style.
              </div>
              <div className="sign">
                <Image alt="" src="/signature.png" layout="fill" objectFit="contain" />
              </div>
            </div>
          </div>
          <div className="barbers">
            <div className="image">
              <Image alt="" src="/gallery-1.jpeg" layout="fill" objectFit="cover" />
            </div>
            <div className="image">
              <Image alt="" src="/gallery-2.jpeg" layout="fill" objectFit="cover" />
            </div>
            <div className="image">
              <Image alt="" src="/gallery-3.jpeg" layout="fill" objectFit="cover" />
            </div>
            <div className="image">
              <Image alt="" src="/gallery-4.jpeg" layout="fill" objectFit="cover" />
            </div>
            <div className="image">
              <Image alt="" src="/gallery-5.jpeg" layout="fill" objectFit="cover" />
            </div>
          </div>
        </div>
      </div>
    </StyledTeam>
  );
};

export default Gallery;
