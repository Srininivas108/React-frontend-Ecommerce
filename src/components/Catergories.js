import styled from "styled-components";
import CategoryItem from "../CategoryItem";
import { categories } from "../data";
import {mobile} from "../responsive";


const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection:"column" })}
`;

function Catergories() {
  return <Container>
      {categories.map((item) => {
       return <CategoryItem item={item} key={item.id} />;
      })}
    </Container>
}

export default Catergories;
