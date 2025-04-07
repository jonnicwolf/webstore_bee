import { useState } from 'react';
import styled from 'styled-components';

export const Hero = () => {
  const [slide, setSlide] = useState(0);

  const list = [
      `We’re so happy you’re here! At Shop ViaBia, you’ll find a delightful mix of items designed to add a little sparkle to your everyday. From whimsical stickers to custom gifts, everything is created with love and a sprinkle of fun!`,
      `All products are handmade with care, bringing you quality and personality in every piece and custom designs are our specialty, so if you’re looking for something unique, you’ve come to the right place!`,
      `Thank you for supporting a small business! Your order means the world to us and we are happy to help in any way we can!`
  ];

  const handleSlideChange = () => {
    if (slide < list.length-1) setSlide(slide+1)
    else setSlide(0)
  }

  return (
    <Container>
      <Content>
        <Button onClick={handleSlideChange}>
          <Banner>{list[slide]}</Banner>
        </Button>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
`
const Banner = styled.div`
  padding: 10px;
  height: 20vh;
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  font-family: "Chicle", cursive;
`
const Button = styled.button`
  background-color: #F82C84;
  color: #F0EAD6;
  border: none;
  padding: 10%;
`
const Content = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
`
const ShopGroup = styled.div`
  display: flex;
  border: 1px solid green;
`
