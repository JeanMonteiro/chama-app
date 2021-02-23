import React from "react";
// import { Link } from "react-router-dom";

import { Container, List, LinkStyled, Title } from "./styles";

const NavBar: React.FC<{ title: string }> = ({ title }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <List>
        <li>
          <LinkStyled to="/">Search</LinkStyled>
        </li>
        <li>
          <LinkStyled to="/history">History</LinkStyled>
        </li>
      </List>
    </Container>
  );
};

export default NavBar;
