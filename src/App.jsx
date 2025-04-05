import styled from 'styled-components';

// @ts-ignore
import Waves from './assets/Waves';
import { NavBar } from './NavBar';

function App() {

  return (
    <Container>
      <Waves />
      <NavBar />
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  z-index: 2;
`
const Test = styled.div`
  border: 5px solid red;
  z-index: 2;
`

export default App
