import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import SectionHeader from './section-header';

const StyledGallery = styled.section`
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
    width: 100%;
    aspect-ratio: 3;
    height: auto;
  }
`;

const Gallery = () => {
  return (
    <StyledGallery>
      <div className="gallery-container">
        <SectionHeader title={'OUR GALLERY'} color={'#fff'} />
        <h1>Enjoy Our Awesome Snapshot</h1>
        <div className="image">
          <Image src="/gallery.jpeg" alt="" layout="fill" objectFit="contain" />;
        </div>
      </div>
    </StyledGallery>
  );
};

export default Gallery;
