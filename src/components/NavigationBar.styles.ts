import styled from 'styled-components';
import { primaryColor } from 'App.styles';

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  padding: 0px 10px;
  background-color: ${primaryColor};
`;

export const Links = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
  align-items: center;
`;
