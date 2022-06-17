import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import SectionHeader from './section-header';

const StyledAbout = styled.section`
  min-height: 80vh;
  overflow: hidden;
  background-color: var(--main-color);
  padding: 50px 0;

  .about-container {
    max-width: 70%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 40px;
    border: 1px solid rgba(44, 44, 46, 1);
    border-radius: 30px;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.25);
  }

  h1 {
    color: #636363;
    font-size: 3.5rem;
    font-family: 'Academy Engraved LET';
  }

  .content {
    padding: 50px 0;
    height: 100%;
    display: flex;
    flex-direction: row;
    color: white;
    gap: 20px;

    .left,
    .right {
      flex: 1;
    }

    .left {
      position: relative;
      flex: 1;
    }

    .right {
      flex: 1.25;
      display: flex;
      flex-direction: column;
      gap: 10px;
      .title {
        font-weight: 700;
        font-size: 3rem;
        line-height: normal;
      }
      .desc {
        font-weight: 200;
        font-size: 1.15rem;
        text-indent: 20px;
      }
      .right-bottom {
        display: flex;
        flex-direction: row;
        .data {
          display: flex;
          flex-direction: column;
          flex: 1;
          color: var(--secondary-color);
          line-height: normal;

          .data-number {
            font-size: 4rem;
            font-weight: 800;
          }
          .data-title {
            font-weight: 200;
            font-size: 1.5rem;
          }
        }
      }
    }
  }
`;

const About = () => {
  return (
    <StyledAbout>
      <div className="about-container">
        <SectionHeader title={'ABOUT US'} color={'#fff'} />
        <h1>The Barber Shop Since 1991</h1>
        <article className="content">
          <div className="left">
            <Image src="/about-image.png" layout="fill" objectFit="contain" alt="" />
          </div>
          <div className="right">
            <h2 className="title">We Will Change Your Out Looks!</h2>
            <span className="desc">
              Barber is a person whose accupation is mainly to cut dress groom style and shave men&apos;s and boys&apos; hair. A barber&apos;s place
              of work is known as a barbershop or a barber&apos;s. Barbershops are also places of social inmteraction and public discourse. In some
              instances, barbershops are also public forums.
            </span>
            <div className="right-bottom">
              <div className="data">
                <span className="data-number">22</span>
                <span className="data-title">Years of Experience</span>
              </div>
              <div className="data">
                <span className="data-number">26</span>
                <span className="data-title">Our Awesome Expert</span>
              </div>
            </div>
          </div>
        </article>
      </div>
    </StyledAbout>
  );
};

export default About;
