import styled from 'styled-components';

export const ItemSelectBar = () => {
  return (
    <Container>
      <Menu name="" id="">
        <Option value='0'>All</Option>
        <Option value='1'>Stickers</Option>
        <Option value='2'>Bookmarks</Option>
        <Option value='3'>Trays</Option>
        <Option value='4'>Lighters</Option>
        <Option value='5'>T-Shirts</Option>
        <Option value='6'>Tote bags</Option>
        <Option value='7'>Cups</Option>
        <Option value='8'>Keychains</Option>
        <Option value='9'>Custom</Option>
      </Menu>
      <Sort src='https://img.icons8.com/?size=100&id=izBicqrRIBpp&format=png&color=000000'/>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 80%;
  justify-content: center;
  align-items: center;
`
const Menu = styled.select`
  border: 1px solid black;
  border-radius: 25px;
  width: 80%;
  padding: 10px;
  font-size: 1.5rem;
`
const Sort = styled.img`
  width: 10%;
  height: 4vh;
`
const Option = styled.option``
