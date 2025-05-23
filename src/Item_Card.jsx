import { Link } from 'react-router';
import styled from "styled-components";

export const Item_Card = ({item}) => {
  return (
    <Container>
      <Link to={`/listing/${item.sku}`}>
        <Photo src={item? item.photo : "https://i.etsystatic.com/24797225/r/il/f7bd16/6583868199/il_794xN.6583868199_1dsa.jpg"}/>
      </Link>
      <Info>
        <Price>
          <Title>{item? item.title : `It's Me, High, I'm the Problem It's Me`}</Title>
          <Type>{item? item.type : `ROLLING TRAY - Made To Order`}</Type>
          <span>
            <Dollar>$</Dollar>
            {item? Number.parseFloat(item.price).toFixed(2): `20.00`}
          </span>
        </Price>
      </Info>
    </Container>
  );
};

const Container = styled.div`
  border-radius: 10px;
  background-color: white;
  font-family: "Noto Sans", sans-serif;
  background-color: #FF8A03;
  color: #F0EAD6;
  transition: background-color 0.4s ease, color 0.4s ease, scale 0.4s ease;

  &:hover {
    scale: 1.01;
    background-color: white;
    color: black;
  }
`;
const Photo = styled.img`
  border-radius: 10px 10px 0 0;
  width: 100%;
`;
const Info = styled.div`
  height: 20%;
  gap: 5px;
  padding: 0 0 20px 10px;
`;
const Title = styled.div`
  font-size: 1rem;
  text-align: center;
`;
const Type = styled.div`
  font-size: 0.7rem;
  font-weight: 400;
`;
const Price = styled.div`
  font-family: "Noto Sans", sans-serif;
  font-size: 1.5rem;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;
const Dollar = styled.span`
  font-size: 1.5rem;
`;
