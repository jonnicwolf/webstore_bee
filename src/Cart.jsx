import styled from 'styled-components';

import {
  getCart,
  removeFromCart,
  clearCart,
  addToCart,
  } from './utils/Cart';

export const Cart = () => {
  const list = [
    {
      id: 1,
      title: "It's Me, High, I'm the Problem It's Me",
      slug: "its-me-high-im-the-problem-its-me-TRAY001",
      sku: '9a2e1b5a-8e34-4d57-91b5-37cb4d19e0c4asda',
      description: "A handcrafted rolling tray with a smooth finish and bold design inspired by the vibes of your favorite songs. Great for gifts, decor, or your chill space.",
      photo: "https://i.etsystatic.com/24797225/r/il/f7bd16/6583868199/il_794xN.6583868199_1dsa.jpg",
      price: 30.00,
      discount: true,
      quantity: 15,
      type: "Rolling Tray",
      rating: 4.8,
      active: true,
      created_at: new Date().toISOString(),
    },
    {
      id: 2,
      title: "It's Me, High, I'm the Problem It's Me",
      slug: "its-me-high-im-the-problem-its-me-TRAY001",
      sku: '9a2e1b5a-8e34-4d57-91b5-37cb4d19e0c45',
      description: "A handcrafted rolling tray with a smooth finish and bold design inspired by the vibes of your favorite songs. Great for gifts, decor, or your chill space.",
      photo: "https://i.etsystatic.com/24797225/r/il/f7bd16/6583868199/il_794xN.6583868199_1dsa.jpg",
      price: 30.00,
      discount: true,
      quantity: 15,
      type: "Rolling Tray",
      rating: 4.8,
      active: true,
      created_at: new Date().toISOString(),
    },
    {
      id: 3,
      title: "It's Me, High, I'm the Problem It's Me",
      slug: "its-me-high-im-the-problem-its-me-TRAY001",
      sku: '9a2e1b5a-8e34-4d57-91b5-37cb4d19e0c4asd',
      description: "A handcrafted rolling tray with a smooth finish and bold design inspired by the vibes of your favorite songs. Great for gifts, decor, or your chill space.",
      photo: "https://i.etsystatic.com/24797225/r/il/f7bd16/6583868199/il_794xN.6583868199_1dsa.jpg",
      price: 30.00,
      discount: true,
      quantity: 15,
      type: "Rolling Tray",
      rating: 4.8,
      active: true,
      created_at: new Date().toISOString(),
    },
    {
      id: 4,
      title: "It's Me, High, I'm the Problem It's Me",
      slug: "its-me-high-im-the-problem-its-me-TRAY001",
      sku: '9a2e1b5a-8e34-4d57-91b5-37cb4d19e0c4',
      description: "A handcrafted rolling tray with a smooth finish and bold design inspired by the vibes of your favorite songs. Great for gifts, decor, or your chill space.",
      photo: "https://i.etsystatic.com/24797225/r/il/f7bd16/6583868199/il_794xN.6583868199_1dsa.jpg",
      price: 30.00,
      discount: true,
      quantity: 15,
      type: "Rolling Tray",
      rating: 4.8,
      active: true,
      created_at: new Date().toISOString(),
    },
    {
      id: 5,
      title: "It's Me, High, I'm the Problem It's Me",
      slug: "its-me-high-im-the-problem-its-me-TRAY001",
      sku: '9a2e1b5a-8e34-4d57-91b5-37cb4d19e0c47',
      description: "A handcrafted rolling tray with a smooth finish and bold design inspired by the vibes of your favorite songs. Great for gifts, decor, or your chill space.",
      photo: "https://i.etsystatic.com/24797225/r/il/f7bd16/6583868199/il_794xN.6583868199_1dsa.jpg",
      price: 30.00,
      discount: true,
      quantity: 15,
      type: "Rolling Tray",
      rating: 4.8,
      active: true,
      created_at: new Date().toISOString(),
    },
    {
      id: 6,
      title: "It's Me, High, I'm the Problem It's Me",
      slug: "its-me-high-im-the-problem-its-me-TRAY001",
      sku: '9a2e1b5a-8e34-4d57-91b5-37cb4d19e0c49',
      description: "A handcrafted rolling tray with a smooth finish and bold design inspired by the vibes of your favorite songs. Great for gifts, decor, or your chill space.",
      photo: "https://i.etsystatic.com/24797225/r/il/f7bd16/6583868199/il_794xN.6583868199_1dsa.jpg",
      price: 30.00,
      discount: true,
      quantity: 15,
      type: "Rolling Tray",
      rating: 4.8,
      active: true,
      created_at: new Date().toISOString(),
    },
    {
      id: 7,
      title: "It's Me, High, I'm the Problem It's Me",
      slug: "its-me-high-im-the-problem-its-me-TRAY001",
      sku: '9a2e1b5a-8e34-4d57-91b5-37cb4d19e0c4asdaasd',
      description: "A handcrafted rolling tray with a smooth finish and bold design inspired by the vibes of your favorite songs. Great for gifts, decor, or your chill space.",
      photo: "https://i.etsystatic.com/24797225/r/il/f7bd16/6583868199/il_794xN.6583868199_1dsa.jpg",
      price: 30.00,
      discount: true,
      quantity: 15,
      type: "Rolling Tray",
      rating: 4.8,
      active: true,
      created_at: new Date().toISOString(),
    },
  ];
  const cart = getCart() || [];
  const checkTitleLength = (str) => str.length > 10 ? `${str.slice(0, 20)}..` : str;
  const checkItemQuantity = (sku) => cart.filter(item => item.sku === sku).length;
  const uniqueItems = Object.values(
    cart.reduce((acc, item) => {
      if (!acc[item.sku]) acc[item.sku] = { ...item, count: 1 };
      else acc[item.sku].count += 1;
      return acc;
    }, {})
  );
  
  const discountFetch = (price, discount) =>  {
    if (!price || !discount) return false;
    return price - (price * discount);
  }
  const total = cart.reduce((sum,item) => sum + (item.price * item.quantity), 0)

  return (
    <Container>
      <Bag>
        <PageTitleWrap>
          <img src="https://img.icons8.com/?size=100&id=lHQbSWVnEGgt&format=png&color=000000" alt="" />
          <MyBag>MY BAG</MyBag>
        </PageTitleWrap>
        {uniqueItems.map((item, i) => {
          return (
            <Item key={i}>
              <Img src={item.photo}/>
              <ContentWrap>
                <InfoWrap>
                  <Info>
                    <Type>{item.type}</Type>
                    <Title>{checkTitleLength(item.name)}</Title>
                  </Info>
                  <Remove>
                    <img src="https://img.icons8.com/?size=30&id=G01ACMKXfdpJ&format=png&color=000000" alt="" />
                  </Remove>
                </InfoWrap>
                <PriceQuantity>
                  <NumericDropdown>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </NumericDropdown>
                  <PriceWrap>
                    <DiscountPrice>${discountFetch(item.price, 0.25).toFixed()}</DiscountPrice>
                    <Price>${item.price}</Price>
                  </PriceWrap>
                </PriceQuantity>
              </ContentWrap>
            </Item>
          )
        })}
      </Bag>
      <Summary>
        <TotalWrap>
          <Title>Total</Title>
          <PriceWrap>
            <Price>${parseFloat(total+(total * 0.08)).toFixed()}</Price>
          </PriceWrap>
        </TotalWrap>
        <span>Shipping and taxes calculated in checkout</span>
        <Checkout>CHECKOUT</Checkout>
      </Summary>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  font-family: "Noto Sans", sans-serif;
  width: 95vw;
  flex-direction: column;
  gap:10px;
  justify-content: space-evenly;
  height: 90vh;
`;
const Bag = styled.div`
  width: 100%;
`;
const Summary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 15px;
  background-color: white;
  border-radius: 10px;
  justify-self: end;
  justify-content: center;
`;
const Item = styled.div`
  display: flex;
  background-color: white;
  border-radius: 10px;
  margin: 10px;
`;
const Img = styled.img`
  height: 9rem;
  border-radius: 10px;
`;
const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  width: 100%;
`;
const InfoWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;
const Remove = styled.button`
  background: none;
  border: none;
  align-self: start;
`;
const Title = styled.span`
  font-size: 1.2rem;
  font-weight: 500;
`;
const Type = styled.span`
  color: grey;
`;
const PriceQuantity = styled.div`
  display: flex;
  justify-content: space-between;
`;
const NumericDropdown = styled.select`
  border-radius: 10px;
  border: 2px solid rgba(189, 195, 199,1);
  font-family: inherit;
  font-weight: 500;
`;
const PriceWrap = styled.div`
  display: flex;
  gap: 10px;
  align-items: baseline;
`;
const Price = styled.span`
  font-size: 1.5rem;
  font-weight: 400;
  color: #FF8A03;
  letter-spacing: -1px;
`;
const DiscountPrice = styled(Price)`
  color: rgba(189, 195, 199,1);
  font-size: 1.4rem;
  text-decoration: line-through;
`;
const PageTitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const MyBag = styled.span`
  font-weight: 600;
  font-size: 2rem;
`;
const TotalWrap = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 2rem;
  gap: 15px;

  & * {
    font-size: inherit !important;
  }
`;
const Checkout = styled.button`
  padding: 10px;
  font-size: 1.5rem;
  border-radius: 10px;
  border: none;
  background: #FF8A03;
  color: #F0EAD6;
`;
