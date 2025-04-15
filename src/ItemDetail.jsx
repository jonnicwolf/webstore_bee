import { useParams } from 'react-router';
// @ts-ignore
import { addToCart } from './utils/cart';
import styled from 'styled-components'

import { Dropdown } from './Dropdown';
import { Carousel } from './Carousel';

export const ItemDetail = () => {
  const { id } = useParams();
  // id/sku for fetch later

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
    id: 1,
    title: "It's Me, High, I'm the Problem It's Me",
    slug: "its-me-high-im-the-problem-its-me-TRAY001",
    sku: '9a2e1b5a-8e34-4d57-91b5-37cb4d19e0c4',
    description: "A handcrafted rolling tray with a smooth finish and bold design inspired by the vibes of your favorite songs. Great for gifts, decor, or your chill space.",
    photo: "https://i.etsystatic.com/24797225/r/il/f7bd16/6583868199/il_794xN.6583868199_1dsa.jpg",
    price: 30.00,
    discount: true,
    quantity: 15,
    type: "Rolling Tray",
    rating: 4.8,
    active: true,
    created_at: new Date().toISOString(),
  };

  const handleAddToCart = (item) => {
    const cartItem = {
      id: '9a2e1b5a-8e34-4d57-91b5-37cb4d19e0c4',
      name: item.title,
      photo: item.photo,
      price: item.price,
      quantity: 1
    };

    addToCart(cartItem);
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
        <Button onClick={()=> handleAddToCart(item)}>ADD TO BAG</Button>
      </Info>

      <Details>
        <Dropdown title='Item details' info={item.description} itemTitle={item.title} />
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
