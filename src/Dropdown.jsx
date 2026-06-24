import styled from 'styled-components';

export const Dropdown = ({ title, info, itemTitle }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Content>
        <Title>{itemTitle}</Title>
        <span>{info}</span>
        <p>
          <span style={{fontWeight: 'bold'}}>*</span>ALL sticker orders will be sent through the mail, in an envelope with a sticker which will take around 7-10 days to receive. Tracking will not be provided unless an upgrade is purchased.
        </p>
        <Shipping>Ships from Kissimmee, FL</Shipping>
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
  font-size: 1rem;
  color: #444;
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Shipping = styled.p`
  font-size: 0.8rem;
  color: #919294;
`;
