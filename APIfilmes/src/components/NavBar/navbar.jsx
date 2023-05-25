import React from "react";
import * as S from "./style";
import Lupa from "../Images/lupa.png";

export default function NavComponent() {
  return (
        <S.NavBar>
          <S.NavList>
        
                <a href="#"><S.NavItem>Popular</S.NavItem></a>
                <a href="#"><S.NavItem>Drama</S.NavItem></a>
                <a href="#"><S.NavItem>Ação</S.NavItem></a>
                <a href="#"><S.NavItem>Aventura</S.NavItem></a>
                <a href="#"><S.NavItem>Comédia</S.NavItem></a>
                <a href="#"><S.NavItem>Crime</S.NavItem></a>
                <a href="#"><S.NavItem>Fantasia</S.NavItem></a>
                <a href="#"><S.NavItem>Familia</S.NavItem></a>
                <S.SearchIcon src={Lupa} alt="Search" />
            </S.NavList>
        </S.NavBar>
  );
}
