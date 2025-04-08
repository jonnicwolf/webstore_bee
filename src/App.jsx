import styled from 'styled-components';
import { Routes, Route } from 'react-router';

import { NavBar } from './NavBar';
import { Home } from './Home';
import { ItemDetail } from './ItemDetail';
import { Sandbox } from './Sandbox';

function App() {

  return (
    <Container>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/listing:id' element={<ItemDetail />} />
        <Route path='/sandbox' element={<Sandbox />} />
      </Routes>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  min-height: 100vh;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  overflow-x: hidden;
  overflow-y: auto;
`;

export default App;
