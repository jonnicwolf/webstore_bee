import styled from 'styled-components';

import { NavBar } from './NavBar';
import { Item_Card } from './Item_Card';
import { Hero } from './Hero';
import { ItemSelectBar } from './ItemSelectBar';

function App() {
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
    <Container>
      <NavBar />
      <Hero />
      <ItemSelectBar />
      <Feed>
        {list.map((item,key) => {
          return (
            <ItemWrapper>
              <Item_Card key={key} item={item} />
            </ItemWrapper>
          )
        })}
      </Feed>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  min-height: 100vh;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  overflow-x: hidden;
  overflow-y: auto;
`;
const Feed = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  align-items: center;
  // padding: 10px;
`;
const ItemWrapper = styled.div`
  width: calc(50% - 20px);
  max-width: 400px;
`

export default App;
