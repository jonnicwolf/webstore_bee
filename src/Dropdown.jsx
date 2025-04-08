import styled  from 'styled-components';
import { useState } from 'react';

export const Dropdown = ({ title, info, itemTitle }) => {
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => { setOpen(!open) };

  return (
    <Container>
      <ToggleWrap>
        <Title>{title}</Title>
        <Toggle onClick={() => setOpen(!open)}>
          {open ? '▲' : '▼'}
        </Toggle>
      </ToggleWrap>
      <Content open={open}>
        {itemTitle} {info}
        <p>
          *ALL sticker orders will be sent through the mail, in an envelope with a sticker which will take around 7-10 days to receive. Tracking will not be provided unless an upgrade is purchased.
        </p>
        <Shipping>
          Ships from Kissimmee, FL
        </Shipping>
      </Content>
      
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Noto-sans", sans-serif;
`;
const ToggleWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const Toggle = styled.div`
  cursor: pointer;
  font-size: 0.9rem;
  color: #000;
`;
const Title = styled.div`
  font-size: 1.3rem;
`;
const Content = styled.div`
  max-height: ${({ open }) => (open ? "200px" : "0")};
  overflow: hidden;
  opacity: ${({ open }) => (open ? 1 : 0)};
  transition: all 0.4s ease;
  font-size: 1rem;
  color: #444;
  padding-top: ${({ open }) => (open ? "10px" : "0")};
`;
const Shipping = styled.p`
  font-size: 0.8rem;
  color: #919294;
`;
