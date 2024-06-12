import React from "react";

import Logo from "./assets/logo.svg"
import Abobora from "./assets/abobora.svg"
import Arrow from "./assets/arrow.svg"



import {
  Body,
  Header, 
  ImgLogo,
  Nav,
  LinkNav,
  LinkNavSupport,
  Section,
  DivLeft,
  Pfirst,
  PEnd,
  ImgAbobora,
  DivLeftInfo,
  DivRight,
  H2,
  Pright1,
  Pright2,
  Divbuttons,
  ButtonDivRitgh,
  LinkRigth,
  BntGhost,
  DivinfoRight, 
} from './style'

function App() {
  return (
    <Body>
      <Header>
        <ImgLogo alt="Logo" src={Logo}/>

        <Nav>
          <LinkNav href="#">Graveyard</LinkNav>
          <LinkNav href="#">Track Record</LinkNav>
          <LinkNav href="#">Service</LinkNav>
          <LinkNav href="#">Know More</LinkNav>
          <LinkNavSupport href="#">Support</LinkNavSupport>
        </Nav>

      </Header>

      <Section>
        <DivLeft>
          <ImgAbobora alt="Logo abobora" src={Abobora} animate={true}/>

          <DivLeftInfo>
            <Pfirst>The Labu "Reiza"</Pfirst>
            <PEnd>The Living Pumpkin</PEnd>
          </DivLeftInfo>

        </DivLeft>

        <DivRight>
          <H2>#3 Top Scariest Ghost 2020</H2>
          
          <DivinfoRight>
            <Pright1>UOOOO TRICK OR TREAT!!</Pright1>
            <Pright2>
              I’m Reiza, people call me “The Labu” currently I’m trying to learn something new, building my own bike with parts only made from Malaysia.
            </Pright2>
            <Divbuttons>
              <ButtonDivRitgh>Book Now</ButtonDivRitgh>
              <LinkRigth href="#" >
                Track Record
                <img src={Arrow}/>
              </LinkRigth >
            </Divbuttons>
          </DivinfoRight>
        </DivRight>
      </Section>
      <BntGhost>See All Ghost</BntGhost>
    </Body>

  );
}

export default App;
