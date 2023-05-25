import styled from "styled-components";

export const NavBar = styled.nav`
  height: 12vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: black;
  
`;


export const NavList = styled.ul`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  
  a {
    text-decoration: none;
  }
`;

export const NavItem = styled.li`
  list-style: none;
  font-weight: 300;
  font-size: 1.3rem;
  color: #f2f2f2;
`;

export const SearchIcon = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;
  
`;

