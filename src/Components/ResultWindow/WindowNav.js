import React from "react";
import styled from "styled-components";
import BFICON from "Images/Group6.png";
import CLOSEICON from "Images/Nav/close.png";
import EXPANDICON from "Images/Nav/expand.png";
import MINICON from "Images/Nav/min.png";

const WindowNav = (data) => {
  return (
    <NavContainer>
      <TitleSection>
        <LogoBox>
          <Logo></Logo>
        </LogoBox>
        <MenuBox>
          <Menu>{data.title}</Menu>
        </MenuBox>
      </TitleSection>
      <ControlSection>
        <ControlBox>
          <Min src={MINICON}></Min>
        </ControlBox>
        <ControlBox>
          <Expand src={EXPANDICON}></Expand>
        </ControlBox>
        <ControlBox>
          <Close src={CLOSEICON}></Close>
        </ControlBox>
      </ControlSection>
    </NavContainer>
  );
};

export default WindowNav;

const NavContainer = styled.nav`
  width: 100%;
  height: 30px;
  border-bottom: 2px solid black;
  background-color: #fdfd96;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media only screen and (max-width: 415px) {
    width: 100vw;
  }
`;

const TitleSection = styled.div`
  width: 25%;
  display: flex;
  flex-direction: row;
`;

const LogoBox = styled.div`
  margin-left: 2px;

  width: 30px;
  height: 30px;
  display: flex;
  justify-content: column;
  flex-direction: row;
`;

const Logo = styled.div`
  width: 25px;
  height: 25px;
  margin: 3px auto;
  background-image: url(${BFICON});
  background-position: center;
  background-repeat: none;
  background-size: cover;
`;

const MenuBox = styled.div`
  padding-left: 3px;
  height: 100%;
`;

const Menu = styled.div`
  font-size: 1.5rem;
  line-height: 1.9rem;
`;

const ControlSection = styled.div`
  width: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ControlBox = styled.div`
  width: 25%;
  height: 80%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 3px;
`;

const Min = styled.img`
  margin: 0 auto;
  width: 23px;
  height: 23px;
  margin-right: 3px;
  cursor: pointer;
`;

const Expand = styled.img`
  margin: 0 auto;
  width: 23px;
  height: 23px;
  margin-right: 3px;
  cursor: pointer;
`;
const Close = styled.img`
  margin: 0 auto;
  width: 23px;
  height: 23px;
  margin-right: 3px;
  cursor: pointer;
`;