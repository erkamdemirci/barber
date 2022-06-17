import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import SectionHeader from './section-header';

const StyledServices = styled.section`
  min-height: 80vh;
  overflow: hidden;
  background: linear-gradient(180deg, #fcf2e4 80%, var(--main-color) 0%);
  padding: 50px 0;

  .services-container {
    max-width: 60%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    .content {
      display: flex;
      flex-direction: row;
    }

    h1 {
      color: #636363;
      font-weight: 700;
      font-size: 3rem;
      line-height: normal;
      margin-bottom: 20px;
    }

    .left,
    .right {
      flex: 1;
    }

    .left {
      display: flex;
      flex-direction: column;
      align-items: center;

      .cards {
        display: flex;
        flex-direction: row;
        gap: 35px;

        .cards-left,
        .cards-right {
          display: flex;
          flex-direction: column;
          gap: 35px;

          button {
            background-color: var(--secondary-color);
            color: white;
            padding: 15px 10px;
          }

          .card  {
            background-color: white;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 20px;
            display: flex;
            gap: 10px;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);
            width: 100%;
            height: 225px;

            :hover {
              transition: 0.2s;
              transform: scale(1.1);
            }

            span {
              position: relative;
              width: 60px;
              height: 60px;
              margin-bottom: 10px;
            }
            h4 {
              font-weight: 600;
            }
            p {
              font-weight: 300;
              font-size: 0.8rem;
              text-align: center;
              line-height: normal;
              color: var(--main-color);
              opacity: 0.75;
            }
          }
        }
      }
    }

    .right {
      padding: 20px;
      display: flex;
      flex-direction: column;
      gap: 30px;
      position: relative;

      .desc {
        padding-left: 20px;

        font-size: 1rem;
        font-weight: 400;
        text-indent: 20px;
        line-height: 25px;
      }

      .desc:before {
        content: '';
        position: absolute;
        top: 20px;
        left: 15px;
        width: 5px;
        height: 70px;
        background-color: var(--secondary-color);
      }

      .image {
        position: relative;
        width: 100%;
        height: 100%;
      }
    }
  }
`;

const Services = () => {
  return (
    <StyledServices>
      <div className="services-container">
        <SectionHeader title={'OUR SERVICES'} color={'#000'} />
        <div className="content">
          <div className="left">
            <h1>What We Provide To Our Customer</h1>
            <div className="cards">
              <div className="cards-left">
                <div className="card">
                  <span>
                    <Image src={'/services-1.jpeg'} layout="fill" objectFit="contain" alt="" />
                  </span>
                  <h4>Haircut Styles</h4>
                  <p>In this collection of new haircuts and hairstyles for guys you will find options for short..</p>
                </div>
                <div className="card">
                  <span>
                    <Image src={'/services-3.jpeg'} layout="fill" objectFit="contain" alt="" />
                  </span>
                  <h4>Smooth Shave</h4>
                  <p>Using a shaving gel or foam, make sure you lather it right. Apply the foam on your face using..</p>
                </div>
                <button>View More Services</button>
              </div>
              <div className="cards-right">
                <button style={{ opacity: 0 }}></button>
                <div className="card">
                  <span>
                    <Image src={'/services-2.jpeg'} layout="fill" objectFit="contain" alt="" />
                  </span>
                  <h4>Beard Triming</h4>
                  <p>The best way to trim your beard is to start with the longest hair length.</p>
                </div>
                <div className="card">
                  <span>
                    <Image src={'/services-4.jpeg'} layout="fill" objectFit="contain" alt="" />
                  </span>
                  <h4>Hair Straight</h4>
                  <p>Designed to straighten & style hair quickly with long, Keratin-infused ceramic plates.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <p className="desc">
              A barber is a person whose accupation is mainly to cut, dress, groom, style and shave men's and boys' hair. A barber's place of work is
              known as a 'barber shop'. Wash + Cut $13. Wash and cut with electric trimmer and / or scissors with a razor finish. Shave, $15 with
              blade. Preparation with foam and hot towel.
            </p>
            <div className="image">
              <Image src={'/services-image.jpeg'} layout="fill" objectFit="contain" alt="" />
            </div>
          </div>
        </div>
      </div>
    </StyledServices>
  );
};

export default Services;
