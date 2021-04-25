import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";

function Header() {
  const [offset, setOffset] = useState(window.pageYOffset);
  const [show, setShow] = useState(true);
  const [menu,setMenu] = useState(false);
  useEffect(() => {
    window.onscroll = () => {
      if (offset > window.pageYOffset) {
        setShow(true);
        console.log(window.pageYOffset);
      } else {
        setShow(false);
      }
      setOffset(window.pageYOffset);
    };
  });
  console.log(menu);
  return (
    <Container show={show} offset={offset}>
      <Link to="/">
        <HeaderLogo>
          <Logo src="./logoearth.png" />
          GREENLIFE
        </HeaderLogo>
      </Link>
      <HeaderComponentsContainer>
        <Link to="/about">
          <AboutContainer>About</AboutContainer>
        </Link>
        <Link to="/events">
          <EventsContainer>Events</EventsContainer>
        </Link>
        <Link to="/blog">
          <BlogContainer>Blog</BlogContainer>
        </Link>
        <Link to="/visit">
          <ContactContainer>Visit</ContactContainer>
        </Link>
      </HeaderComponentsContainer>
      <HeaderButtonContainer>
        <Link to="/contact">
          <HeaderButton offset={offset}>Join the Community</HeaderButton>
        </Link>
      </HeaderButtonContainer>
      <MenuContainer>
        <MenuIconContainer fontSize="large" onClick={()=>{setMenu(true)}} />
      </MenuContainer>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  background-color: ${(props) => props.offset && "black"};
  position: fixed;
  top: ${(props) => (props.show ? "0px" : "-100px")};
  width: 100%;
  height: 100px;
  z-index: 999;
  transition: top 0.3s;
  display: flex;
  justify-content: space-between;
  a{
    text-decoration:none;
  }
`;

const HeaderLogo = styled.div`
  color: #00c805;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  :hover{
    opacity:0.9;
  }
`;

const Logo = styled.img`
  height: 80px;
  padding-bottom: 20px;
  margin-right: -9px;
`;

const HeaderComponentsContainer = styled.div`
  color: white;
  width: 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    text-decoration: none;
  }
  @media only screen and (max-width:992px){
    display:none;
  }
`;

const AboutContainer = styled.div`
  cursor: pointer;
  color:white;
  :hover {
    opacity: 0.9;
  }
`;

const EventsContainer = styled.div`
  cursor: pointer;
  color: white;
  :hover {
    opacity: 0.9;
  }
`;

const BlogContainer = styled.div`
  cursor: pointer;
  color: white;
  :hover {
    opacity: 0.9;
  }
`;

const ContactContainer = styled.div`
  cursor: pointer;
  color: white;
  :hover {
    opacity: 0.9;
  }
`;

const HeaderButtonContainer = styled.div`
  width: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 992px) {
    display: none;
  }
`;

const HeaderButton = styled.button`
  background-color: ${(props) => (props.offset === 0 ? "black" : "#00c805")};
  color: ${(props) => (props.offset === 0 ? "white" : "black")};
  padding: 15px 30px 15px 30px;
  border-radius: 6px;
  border:2px solid #d3d3d3;
  :hover {
    opacity: 0.8;
  }
  :focus {
    outline: none;
  }
  cursor: pointer;
`;


const MenuContainer = styled.div`
width:10%;
display:flex;
align-items:center;
justify-content:center;

@media only screen and (min-width:992px){
  display:none;
}
`;

const MenuIconContainer = styled(MenuIcon)`
  color: #00c805;
  cursor:pointer;
`;