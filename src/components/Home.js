import React from 'react';
import styled from 'styled-components';
import EventImage from './EventImage';

function Home() {
    return (
      <Container>
        <Banner>
          <BannerImage src="https://images.unsplash.com/photo-1613172837551-484eb5f450a5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1952&q=80" />
          <BannerTextContainer>
            <BannerText>We need you to save</BannerText>
            <BannerTextTwo>our Earth</BannerTextTwo>
            <BannerButton>Visit</BannerButton>
          </BannerTextContainer>
        </Banner>
        <EventsDetailContainer>
          <EventSectionHeading>Upcoming Events</EventSectionHeading>
          <EventContainer>
            <EventImage />
            <EventImage />
            <EventImage />
          </EventContainer>
          <ViewAllButton>VIEW ALL</ViewAllButton>
        </EventsDetailContainer>
        <QuoteContainer>
          <QuoteTextContainer>
            <QuoteText><i>
              “Never doubt that a small group of thoughtful, committed citizens
              can change the world; indeed, it is the only thing that ever has.”
            </i></QuoteText>
            <QuoteAuthor>—Margaret Mead</QuoteAuthor>
          </QuoteTextContainer>
          <ImageContainer>
            <Image src="https://images.unsplash.com/photo-1513086670993-297187d3a281?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80" />
            <Image src="https://images.unsplash.com/photo-1598512752423-099d75d4865c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80" />
          </ImageContainer>
        </QuoteContainer>
      </Container>
    );
}

export default Home


const Container = styled.div`
display:flex;
flex-direction:column;
`;

const Banner = styled.div`
  width: 100%;
  height: 110vh;
  position:relative;
`;

const BannerImage = styled.img`
width:100%;
height:110vh;
object-fit:cover;
`;

const BannerTextContainer = styled.div`
  width: 45%;
  height: 50%;
  position: absolute;
  top: 25%;
  left: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  backdrop-filter: blur(4px);
`;

const BannerText = styled.div`
color:#00c805;
font-weight:700;
font-size:70px;
`;

const BannerTextTwo = styled.div`
  color: #00c805;
  font-weight: 700;
  font-size: 70px;
`;

const BannerButton = styled.button`
height:60px;
width:140px;
color:white;
font-size:20px;
background-color:black;
border:2px solid #dadada;
:hover{
  opacity:0.85;
}
`;

const EventsDetailContainer = styled.div`
  width:100%;
  height:110vh;
  background-color: #1c1e1c;
  display:flex;
  flex-direction:column;
  justify-content:space-around;
  @media only screen and (max-width:992px){
    height:150vh;
    align-items:center;
  }
`;

const EventSectionHeading = styled.h1`
  color: #d2d3d2;
`;

const EventContainer = styled.div`
width:100%;
display:flex;
justify-content:space-around;
@media only screen and (max-width:992px){
  flex-direction:column;
  align-items:center;
  height:80%;
}
`;

const ViewAllButton = styled.button`
  width: 120px;
  height: 60px;
  background-color: #d2d3d2;
  :hover {
    background-color: #bdbdbc;
  }
  :focus {
    outline:none;
  }
  cursor:pointer;
`;

const QuoteContainer = styled.div`
width:100%;
height:120vh;

  background-color: #d2d3d2;
  color: #1c1e1c;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
`;

const QuoteTextContainer = styled.div`
  width: 100%;
  color: #12a40f;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const QuoteText = styled.div`
font-weight:700;
font-size:40px;
margin:30px;
`;

const QuoteAuthor = styled.div`
  font-weight: 500;
  font-size: 20px;
  color: #1c1e1c;
`;

const ImageContainer = styled.div`
width:100%;
height:80vh;
`;

const Image = styled.img`
width:50%;
height:100%;
object-fit:cover;
`;
