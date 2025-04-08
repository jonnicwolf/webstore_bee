import styled from 'styled-components';

import { Item_Card } from './Item_Card';
import { Hero } from './Hero';
import { ItemSelectBar } from './ItemSelectBar';

export const Home = () => {
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

  return (
    <>
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
    </>
  );
};

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
`