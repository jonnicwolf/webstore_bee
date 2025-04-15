import { useEffect, useState } from 'react';
import { Link } from 'react-router';
// @ts-ignore
import { getCart } from './utils/cart';
import styled from "styled-components";

import { NavDropdown } from './NavDropdown';

export const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    setCart(getCart)
  },[getCart])

  console.log(cart.length)
  console.log(cart)


  const toggleOpen = () => { setOpen(!open) };

  const tabList = [
    'Shop All',
    'Stickers',
    'Bookmarks',
    'Trays',
    'LIghters',
    'T-Shirts',
    'Tote Bags',
    'Cups',
    'Keychains',
    'Custom',
  ];

  return (
    <Container>
      <ClosedNav>
        <Burger
          src="https://img.icons8.com/?size=100&id=8113&format=png&color=000000"
          onClick={toggleOpen}
          />
        <StyledLink to={`/`}>
          <Title>
            <span>SHOP</span>
            <span>ViABiA</span>
          </Title>
        </StyledLink>
        <StyledLink to={`checkout`}>
          <CartNum $cartlength={cart.length}>
            {cart.length}
          </CartNum>
          <Icon src="https://img.icons8.com/?size=100&id=lHQbSWVnEGgt&format=png&color=000000"/>
        </StyledLink>
      </ClosedNav>
      <NavDropdown open={open} tabList={tabList} />
    </Container>
  );
};

const Container = styled.div`
  width: 90%;
  background-color: #FF8A03;
  color: #F0EAD6;
  border-radius: 10px;
  padding: 15px;
  margin-top: 15px;
  font-family: "Bungee Spice", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  height: auto;
`;
const ClosedNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5rem;
  font-style: normal;
  letter-spacing: 0.05rem;
  width: 100%;
`;
const Icon = styled.img`
  height: 2.5rem;
`;
const Burger = styled.img`
  height: 2rem;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: flex;
`;
const Title = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  line-height: 0.8;
  align-self: center;
`;
const CartNum = styled.span`
  align-self: start;
  font-size: 1rem;
  color: #000;
  display: ${(props) => props.$cartlength? 'block' : 'none' }
`