import { Send } from "@mui/icons-material";
import styled from "styled-components";
import {mobile} from "../responsive";

const Container = styled.div`
  height: 60vh;
  display: flex;
  background-color:#fcf5f5;
  align-items: center;
  justify-content: center;
  flex-direction:column;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;
const Description = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center" })}
`;
const InputConatiner = styled.div`
  width: 50%;
  height: 40px;
  border-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width: "80%" })}
`;
const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;
const Button = styled.button`
  flex: 1;
  border: none;
  border-color: teal;
  color: white;
`;

function Newsletter() {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Get updates from your favourite products</Description>
      <InputConatiner>
        <Input placeholder="your email" />
        <Button>
          <Send />
        </Button>
      </InputConatiner>
    </Container>
  );
}

export default Newsletter;
