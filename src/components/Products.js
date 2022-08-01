import styled from "styled-components"
import { popularProducts } from "../data"
import Product from "./Product"


const Conatiner= styled.div`
  padding:20px;
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
  
`;
function Products() {
  return (
     <Conatiner>
         {popularProducts.map((item)=>{
            return <Product item={item} key={item.id}/>
         })}
     </Conatiner>
  )
}

export default Products