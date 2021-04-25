import React from 'react'
import styled from 'styled-components'

function Visit() {
    return (
      <Container>
        <InfoContainer>
          <AddressContainer>
            <AddressTitle>Address</AddressTitle>
            <Address>112 Demo Street Jaora, Ratlam 457226</Address>
          </AddressContainer>
          <HoursContainer>
            <HoursTitle>Hours</HoursTitle>
            <HoursStart>Tuesday - Friday 4pm - 6pm</HoursStart>
            <HoursEnd>Saturday - Sunday 10am - 4pm</HoursEnd>
          </HoursContainer>
          <ContactContainer>
            <ContactTitle>Contact</ContactTitle>
            <Contacts>email@example.com</Contacts>
          </ContactContainer>
        </InfoContainer>
      </Container>
    );
}

export default Visit

const Container = styled.div`
  height: 150vh;
  width: 100%;
  background: url("https://images.unsplash.com/photo-1473081556163-2a17de81fc97?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color:white;
  display:flex;
  flex-direction:column;
  justify-content:flex-end;
  align-items:center;
`;

const InfoContainer = styled.div`
width:94%;
height:85%;
display:flex;
flex-direction:column;
justify-content:space-around;
`;

const AddressContainer = styled.div`
width:30%;
height:18%;
display:flex;
flex-direction:column;
justify-content:space-around;
`;

const AddressTitle = styled.div`
font-size:18px;
`;

const Address = styled.div`
font-size:40px;
font-weight:700;
`;

const HoursContainer = styled.div`
  width: 25%;
  height: 38%;
  display:flex;
  flex-direction:column;
  justify-content:space-around;
`;

const HoursTitle = styled.div`
  font-size: 18px;
`;

const HoursStart = styled.div`
  font-size: 40px;
  font-weight: 700;
`;

const HoursEnd = styled.div`
  font-size: 40px;
  font-weight: 700;
`;

const ContactContainer = styled.div`
  width: 30%;
  height: 10%;
  display:flex;
  flex-direction:column;
  justify-content:space-around;
`;

const ContactTitle = styled.div`
  font-size: 18px;
`;

const Contacts = styled.div`
  font-size: 40px;
  font-weight: 700;
  text-decoration:underline;
  cursor:pointer;
`;

