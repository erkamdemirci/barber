import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const StyledContact = styled.section`
  background-color: var(--main-color);

  .contact-container {
    max-width: 75%;
    margin: 0 auto;

    display: grid;
    grid-template-columns: [col] 100px [col] 100px;
    grid-template-rows: [row] auto [row] auto [row];
    background-color: #fff;
    color: #444;
  }

  .top {
    grid-column: col / span 4;
    grid-row: row;
    height: 300px;
    background-color: var(--main-color-2);
    border: 1px solid rgba(0, 0, 0, 0.6);
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;

    /* background: url('/gallery-6.jpeg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top; */

    .image {
      margin: 0 auto;
      position: relative;
      width: 150px;
      height: 150px;
    }

    p {
      max-width: 70%;
      margin: 0 auto;
      text-align: center;
      line-height: 30px;
      color: white;
      font-weight: 200;
    }
  }
  .bottom {
    grid-column: col / span 4;
    grid-row: row 2;

    display: grid;
    grid-template-columns: [col] auto [col];
    grid-template-rows: [row] auto [row];

    .left,
    .right {
      padding: 50px 30px;
      background-color: var(--main-color-2);
      display: flex;
      flex-direction: column;
      gap: 20px;
      border: 1px solid rgba(0, 0, 0, 0.6);
      border-bottom: none;

      h1 {
        color: var(--secondary-color);
        font-weight: 700;
        font-size: 1.5rem;
        text-align: center;
      }

      .table {
        display: flex;
        flex-direction: row;
        gap: 20px;

        .table-left,
        .table-right {
          display: flex;
          flex-direction: column;
          flex-basis: 100%;
          gap: 5px;

          .row-title {
            color: var(--secondary-color);
            font-weight: 300;
          }

          .row-content  {
            color: white;
            font-weight: 200;
          }
        }
      }
    }

    .left {
      grid-column: col / span 2;
      grid-row: row;
    }
    .right {
      grid-column: col 3 / span 2;
      grid-row: row;
    }
  }
`;

const Gallery = () => {
  return (
    <StyledContact>
      <div className="contact-container">
        <div className="top">
          <div className="image">
            <Image alt="" src="/logo.png" layout="fill" objectFit="cover" />
          </div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="bottom">
          <div className="left">
            <h1>CONTACT INFO</h1>
            <div className="table">
              <div className="table-left">
                <div>
                  <span className="row-title">Address - </span>
                  <span className="row-content">962 Fifth Avenue, 3rd Floor, New York, NY100022</span>
                </div>
              </div>
              <div className="table-right">
                <div>
                  <span className="row-title">Email - </span>
                  <span className="row-content">hello@barbershop.net</span>
                </div>
                <div>
                  <span className="row-title">Phone - </span>
                  <span className="row-content"> (+123) 456 789 101</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <h1>HOURS</h1>
            <div className="table">
              <div className="table-left">
                <div>
                  <span className="row-title">Monday - Friday : </span>
                  <span className="row-content">11:30am - 2:00pm</span>
                </div>
                <div>
                  <span className="row-title">Monday - Friday : </span>
                  <span className="row-content">11:30am - 2:00pm</span>
                </div>
              </div>
              <div className="table-right">
                <div>
                  <span className="row-title">Saturday - Sunday : </span>
                  <span className="row-content">09:00am - 08:00pm</span>
                </div>
                <div>
                  <span className="row-title">Saturday - Sunday : </span>
                  <span className="row-content">09:00am - 08:00pm</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledContact>
  );
};

export default Gallery;
