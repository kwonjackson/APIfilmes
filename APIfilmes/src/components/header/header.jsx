import React from 'react';
import styled from 'styled-components';
import LogoImg from '../Images/logo.png'
import lupa from "../Images/lupa.png"

export const HeaderStyle = styled.header`
    position: fixed;
    background-color: rgba(108, 122, 137 / 1) ;
    backdrop-filter: blur(15px);
    width: 100%;
    height:8vh;

  nav {
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const HeaderMid = styled.div`

  ul {
    display: flex;
    justify-content: center;
    list-style: none;
    align-items: center;
  }

  li {
    margin-right: 15px;
  }

  a {
    text-decoration: none;
    color: white;
    font-size: 1.2rem;
  }

  .graybutton {
    border: solid #747474;
    border-radius: 50px;
    padding: 3px 13px;
    background-color: #747474;
  }
`;

export const HeaderEnd = styled.div`
  display: flex;
  justify-content: center;

  ul {
    display: flex;
    list-style: none;
    align-items: center;
  }

  li {
    margin-right: 15px;
  }

  a {
    text-decoration: none;
    color: white;
    font-size: 1.2rem;
  }

  img {
    margin-right: 15px;
    height: 35px;
    width: 35px;
    cursor: pointer;
  }

`;


export const Logo = styled.div`
  img {
    margin-left: 25px;
    margin-top: 10px;
    width: 90px;
    height: 100%;
  }
`;




export default function Header() {
  return (
    <HeaderStyle>

      <nav>
        <Logo>
        <img src={LogoImg} alt="Logo" />
        </Logo>

        <HeaderMid>
          <ul>
          <li> <a href="#footer">Séries</a> </li>
          <li className='graybutton'> <a href="#footer">Filmes</a> </li>
          </ul>
        </HeaderMid>

        <HeaderEnd>
            <img src={lupa} alt="Ícone de lupa" />
          <ul>
             <li> <a href="#footer">Filtro</a> </li>
             <li> <a href="#footer">Login</a> </li>
          </ul>
          </HeaderEnd>
      </nav>
    </HeaderStyle>
  );
}
