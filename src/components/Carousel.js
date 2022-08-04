import React, {useState} from 'react';
import styled from 'styled-components';

export const Carousel = () => {
  const images = [
    'enfield1.jpg',
    'enfield2.jpg',
    'enfield3.jpg',
    'enfield4.jpg',
    'enfield5.jpg',
    'enfield6.jpg',
  ];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [loaded, setLoaded] = useState(false); //"false" xq al pcipio no esta cargada ("loaded") la imagen.

  //Simplificando los cuerpos de las funciones previous y next:
  const selectNewImage = (index, images, next = true) => {
    setLoaded(false);
    setTimeout(() => {
      const condition = next
        ? selectedIndex < images.length - 1
        : selectedIndex > 0;
      const nextIndex = next
        ? condition
          ? selectedIndex + 1
          : 0
        : condition
        ? selectedIndex - 1
        : images.length - 1;
      setSelectedImage(images[nextIndex]);
      setSelectedIndex(nextIndex);
    }, 500);
  };

  const previous = () => {
    selectNewImage(selectedIndex, images, false);
  };
  const next = () => {
    selectNewImage(selectedIndex, images);
  };

  // const previous = () => {
  //   const condition = selectedIndex > 0;
  //   const nextIndex = condition ? selectedIndex - 1 : images.length - 1;
  //   setSelectedImage(images[nextIndex]);
  //   setSelectedIndex(nextIndex);
  // };

  // const next = () => {
  //   const condition = selectedIndex < images.length;
  //   const nextIndex = condition ? selectedIndex + 1 : 0;
  //   setSelectedImage(images[nextIndex]);
  //   setSelectedIndex(nextIndex);
  // };

  return (
    <CarouselContainer>
      <img
        src={require(`../assets/img/${selectedImage}`)}
        default
        alt="Himalayan"
        onLoad={() => setLoaded(true)}
        className={loaded ? 'loaded' : ''}
      />
      <div>
        <button onClick={previous}>Previous</button>
        <button onClick={next}>Next</button>
      </div>
    </CarouselContainer>
  );
};

const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 900px;
  height: 600px;

  img {
    max-width: 900px;
    width: 100%;
    height: 600px;
    object-fit: contain;
    opacity: 0;
    transition: 1s;
    &.loaded {
      opacity: 1;
    }
  }

  div {
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;
    gap: 20px;

    button {
      background-color: #d1d8e0;
      border: 1px solid transparent;
      padding: 5px 20px;
      width: 100px;
      font-family: 'Roboto Mono', monospace;
      font-weight: 500;
      cursor: pointer;

      &:hover {
        background-color: white;
      }
    }
  }
`;
