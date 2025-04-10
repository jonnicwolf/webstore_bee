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
  max-height: ${({ open }) => (open ? "200px" : "0")};
  overflow: hidden;
  opacity: ${({ open }) => (open ? 1 : 0)};
  transition: all 0.4s ease;
  font-size: 1rem;
  color: #444;
  padding-top: ${({ open }) => (open ? "10px" : "0")};
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
`;
const OpenNavButton = styled.button`
  background-color: #000;
  color: inherit;
  border-radius: 10px;
  padding: 0;
  font-family: inherit;
  flex-basis: 17%;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`