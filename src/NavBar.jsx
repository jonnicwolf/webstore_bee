import styled from "styled-components";

export const NavBar = () => {
  return (
    <Container>
      <Burger src="https://img.icons8.com/?size=100&id=8113&format=png&color=000000"/>
      <Title>
        <span>SHOP</span>
        <span>ViABiA</span>
      </Title>
      <Icon src="https://img.icons8.com/?size=100&id=lHQbSWVnEGgt&format=png&color=000000"/>
    </Container>
  );
};

const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  font-size: 1.5rem;
  font-family: "Bungee Spice", sans-serif;
  font-style: normal;
  letter-spacing: 0.05rem;
  background-color: #FF8A03;
  color: #F0EAD6;
  padding: 15px;
  width: 90%;
  margin-top: 10px;
`;
const Icon = styled.img`
  height: 3rem;
`;
const Burger = styled.img`
  height: 2rem;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 2%;
`
const Title = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  line-height: 0.8;
`;
const Shop = styled.span`
  
`