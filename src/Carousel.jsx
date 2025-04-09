import styled from 'styled-components';
import { useKeenSlider } from 'keen-slider/react';

import { Link } from 'react-router';

import 'keen-slider/keen-slider.min.css';

export const Carousel = ({ items }) => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: 'free-snap',
    slides: {
      perView: 3,
      spacing: 25,
    }
  });

  return (
    <Container ref={sliderRef} className='keen-slider'>
      {items.map((item, index) => (
        <StyledLink to={`listing/${item.id}`} key={index}>
          <Slide className='keen-slider__slide'>
            <img src={item.photo} alt={item.title} />
            <div>{item.title}</div>
          </Slide>
        </StyledLink>
      ))}
    </Container>
  );
};

const Container = styled.div`
  max-width: 95vw;
  margin: 0 auto;
`;
const Slide = styled.div`
  width: 50vw;
  background: white;
  border-radius: 10px;
  padding: 10px;
  text-align: center;
  border: 1px solid #919294;
  img {
    width: 70%;
    border-radius: 10px;
  }
  &:hover img {
    scale: 1.01;
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
`