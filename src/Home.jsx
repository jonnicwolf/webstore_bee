import styled from 'styled-components';

import { Item_Card } from './Item_Card';
import { Hero } from './Hero';
import { ItemSelectBar } from './ItemSelectBar';

export const Home = () => {
  const list = [
    {
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
    },
    {
      id: 2,
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
    },
    {
      id: 3,
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
    },
    {
      id: 4,
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
    },
    {
      id: 5,
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
    },
    {
      id: 6,
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
    },
  ];

  return (
    <Container>
      <Hero />
      <ItemSelectBar />
      <Feed>
        {list.map((item,key) => {
          return (
            <ItemWrapper key={key}>
              <Item_Card item={item} />
            </ItemWrapper>
          )
        })}
      </Feed>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`
const Feed = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  align-items: center;
`;
const ItemWrapper = styled.div`
  width: calc(50% - 20px);
  max-width: 400px;
`;
