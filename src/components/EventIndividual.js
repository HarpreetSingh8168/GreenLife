import React from 'react'
import styled from 'styled-components';
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

function EventIndividual() {
    return (
        <Container>
            <DivOneContainer>
                <BackToEventsContainer>
                    <BackIconContainer />
                    <BackTitle>Back to All Events</BackTitle>
                </BackToEventsContainer>
                <EventTitle>Free Compost Workshop</EventTitle>
                <ScheduleContainer>
                    <DateContainer>Wednesday, July 14,2021</DateContainer>
                    <TimeContainer>1:00 PM - 2:00 PM</TimeContainer>
                </ScheduleContainer>
            </DivOneContainer>
            <DetailContainer>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nulla, corrupti cum molestiae, eveniet nobis quidem quasi et at culpa impedit ad eos tenetur dicta maiores! In necessitatibus, saepe aut ratione nobis quidem, iusto tempora iste nihil quia laudantium quasi molestias porro modi quibusdam quis suscipit ipsum ducimus quod architecto.
            </DetailContainer>
        </Container>
    )
}

export default EventIndividual

const Container = styled.div`
display:flex;
align-items:center;
width:100%;
height:100vh;
justify-content:space-around;
`;

const DivOneContainer = styled.div`
height:30%;
display:flex;
flex-direction:column;
justify-content:space-around;
`;

const BackToEventsContainer = styled.div`
display:flex;
`;

const BackIconContainer = styled(KeyboardBackspaceIcon)`
margin-right:5px;
`;

const BackTitle = styled.div``;

const EventTitle = styled.h2``;

const ScheduleContainer = styled.div``;

const DateContainer = styled.div``;

const TimeContainer = styled.div``;

const DetailContainer = styled.div`
width:60%;
height:20%;
display:flex;
align-items:flex-end;
font-size:19px;
`;


