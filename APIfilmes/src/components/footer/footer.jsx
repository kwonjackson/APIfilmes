import React from "react"
import styled from "styled-components"

export const FooterStyle = styled.footer`
    background-color: #000000;
    height: 15vh;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const FooterNav = styled.nav`
    
`;

export const FooterList = styled.ul`
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  width: 30vw;
  

  li {    
    list-style: none;
    font-weight: 300;
    color: #f2f2f2;
    border: solid #f2f2f2;
    border-radius: 100px;
    width: 4vw;
    height: 8vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default function Footer (){
    return(
        <FooterStyle>
            <FooterNav>
                <FooterList>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>...</li>
                    <li>Último</li>
                </FooterList>
            </FooterNav>
        </FooterStyle>
    )
}