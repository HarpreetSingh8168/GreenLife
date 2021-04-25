import React from 'react'
import styled from 'styled-components';
import IndividualEvent from './IndividualEvent';

function Events() {
    return (
      <Container>
        <HeaderContainer />
        <PageTitle>Events</PageTitle>
        <IndividualEvent />
        <IndividualEvent />
        <IndividualEvent />
        <IndividualEvent />
      </Container>
    );
}

export default Events


const Container = styled.div`
  background: url("https://i.pinimg.com/originals/43/21/88/432188f502b9a625f74a7d8cacbe5b8b.jpg");
`;

const HeaderContainer = styled.div`
width:100%;
height:100px;
background-color:black;
`;


const PageTitle = styled.div`
width:100%;
height:30vh;
font-weight:800;
font-size:50px;
display:flex;
align-items:center;
justify-content:center;
`;
