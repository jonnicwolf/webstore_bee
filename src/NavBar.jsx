import styled from "styled-components";

export const NavBar = () => {
  return (
    <Container>
      <Logo>
      <Icon src="https://img.icons8.com/?size=100&id=9222&format=png&color=000000"/>
      Bee's Site
      </Logo>
      <Burger src="https://img.icons8.com/?size=100&id=8113&format=png&color=000000"/>
    </Container>
  );
};

const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  font-size: 2rem;
  font-family: "Playfair Display", serif;
  font-weight: 600;
  font-style: normal;
  background-color: white;
  color: #f88a03;
  padding: 15px;
`;
const Icon = styled.img`
  height: 2rem;
`;
const Burger = styled.img`
  height: 2rem;
`;
const Logo = styled.div`

`