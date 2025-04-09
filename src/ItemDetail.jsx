import { useParams } from 'react-router';
import styled from 'styled-components'

import { Dropdown } from './Dropdown';
import { Carousel } from './Carousel';

export const ItemDetail = () => {
  const { id } = useParams();
  const list = [
    {
      photo: "https://i.etsystatic.com/24797225/r/il/f7bd16/6583868199/il_794xN.6583868199_1dsa.jpg",
      title: "It's Me, High, I'm the Problem It's Me",
      price: 20.00,
      type: "Rolling Tray"
    },
    {
      photo: "https://i.etsystatic.com/24797225/r/il/f7bd16/6583868199/il_794xN.6583868199_1dsa.jpg",
      title: "It's Me, High, I'm the Problem It's Me",
      price: 20.00,
      type: "Rolling Tray"
    },
    {
      photo: "https://i.etsystatic.com/24797225/r/il/f7bd16/6583868199/il_794xN.6583868199_1dsa.jpg",
      title: "It's Me, High, I'm the Problem It's Me",
      price: 20.00,
      type: "Rolling Tray"
    },
    {
      photo: "https://i.etsystatic.com/24797225/r/il/f7bd16/6583868199/il_794xN.6583868199_1dsa.jpg",
      title: "It's Me, High, I'm the Problem It's Me",
      price: 20.00,
      type: "Rolling Tray"
    },
    {
      photo: "https://i.etsystatic.com/24797225/r/il/f7bd16/6583868199/il_794xN.6583868199_1dsa.jpg",
      title: "It's Me, High, I'm the Problem It's Me",
      price: 20.00,
      type: "Rolling Tray"
    },
    {
      photo: "https://i.etsystatic.com/24797225/r/il/f7bd16/6583868199/il_794xN.6583868199_1dsa.jpg",
      title: "It's Me, High, I'm the Problem It's Me",
      price: 20.00,
      type: "Rolling Tray"
    },
  ];
  const item = {
    photo: "https://i.etsystatic.com/24797225/r/il/f7bd16/6583868199/il_794xN.6583868199_1dsa.jpg",
    title: "It's Me, High, I'm the Problem It's Me",
    price: 20.00,
    type: "Rolling Tray",
    info: 'waterproof sticker with holographic laminate'
  };

  return (
    <Container>
      <Group>
        <Title>{item.title}</Title>
        <Type>{item.type}</Type>
      </Group>

      <Photo src='https://i.etsystatic.com/24797225/r/il/f7bd16/6583868199/il_794xN.6583868199_1dsa.jpg' />
      <Info>
        <Price>$ {item? Number.parseFloat(item.price).toFixed(2): 'Price Unavailable'}</Price>
        <Incl>duties, taxes and shipping costs not incl. </Incl>
        <Button>ADD TO BAG</Button>
      </Info>

      <Details>
        <Dropdown title='Item details' info={item.info} itemTitle={item.title} />
      </Details>

      <Details>
        <Title>Shop similar items</Title>
        <br/>
        <Carousel items={list}/>
      </Details>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  font-family: "Noto Sans", sans-serif;
  padding-top: 2vh;
  // padding-bottom: 5vh;
`;
const Photo = styled.img`
  width: 100%;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 15px;
  width: 80%;
  align-self: center;
`;
const Title = styled.div`
  font-size: 1.3rem;
`;
const Type = styled.div`
  font-size: 1rem;
  font-weight: 300;
`;
const Price = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
`;
const Button = styled.button`
  background-color: black;
  border: none;
  width: 100%;
  margin-top: 10px;
  padding: 15px;
  align-self: center;
  color: white;
`;
const Group = styled.div`
  padding: 15px;
`;
const Incl = styled(Type)`
  color: #919294;
`;
const Details = styled.div`
  margin-top: 20px;
  padding: 15px;
  overflow: hidden;
`;
