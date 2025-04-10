import { Link } from 'react-router';
import styled from 'styled-components';

export const NavDropdown = ({ open, tabList }) => {
  return (
    <Container open={open}>
      <OpenNav>
          {tabList.map((tab, i) => (
            <OpenNavButton key={i}>
              <StyledLink to={`/${tab}`}>{tab}</StyledLink>
            </OpenNavButton>
          ))}
        </OpenNav>
    </Container>
  );
};

const Container = styled.div`
  max-height: ${({ open }) => (open ? "200px" : "0px")};
  padding: ${({ open }) => (open ? '15px' : '0px')};
  margin-top: ${({ open }) => (open ? '15px' : '0px')};
  opacity: ${({ open }) => (open ? 1 : 0)};
  overflow: hidden;
  font-size: 1rem;
  width: 100%;
  background-color: #FF8A03;
  color: #F0EAD6;
  border-radius: 10px;
  font-family: "Bungee Spice", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  transition: all 0.4s ease;
`;
const OpenNav = styled.div`
  border-top: 3px solid #000;
  padding-top: 10px;
  height: 10vh;
  display: flex;
  gap: 1px;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  height: auto;
`;
const OpenNavButton = styled.button`
  background-color: #000;
  color: inherit;
  border-radius: 10px;
  padding: 1%;
  font-family: inherit;
  flex-basis: 17%;
  text-wrap: nowrap;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`