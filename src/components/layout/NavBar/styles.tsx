import styled from "styled-components";
import { Link } from "react-router-dom";
import colors from "src/styles/colors";

export const Container = styled.nav`
  display: block;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.7rem 2rem;
  z-index: 1;
  width: 100%;
  opacity: 0.9;
  margin-bottom: 1rem;
  background-color: ${colors.primary};
`;

export const List = styled.ul`
  text-align: center;
  justify-content: center;
  display: flex;
`;

export const LinkStyled = styled(Link)`
  color: #fff;
  padding: 0.45rem;
  margin: 0 0.25rem;
`;

export const Title = styled.h1`
  color: ${colors.light};
`;
