import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: teal;
  color: white;
  font-size: 14px;
  font-weight: 500;
`;

function Announcements() {
  return <Container>Super Deal! Free Shipping on Orders today!!</Container>;
}

export default Announcements;
