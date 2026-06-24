import styled from 'styled-components';
import { Routes, Route } from 'react-router';

import Waves from './assets/Waves.jsx'

import { NavBar } from './NavBar';
import { Home } from './Home';
import { ItemDetail } from './ItemDetail';
import { Cart } from './Cart';
import { Sandbox } from './Sandbox';

function App() {
  return (
    <Container>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/listing/:sku' element={<ItemDetail />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/sandbox' element={<Sandbox />} />
      </Routes>
      <Waves />
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  overflow-x: hidden;
  overflow-y: auto;
`;

export default App;
