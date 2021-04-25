import React from "react";
import styled from "styled-components";
import EventImage from "./EventImage";

function IndividualEvent() {
  return (
    <EventContainer>
      <EventImage />
      <EventTextContainer>
        <EventTitle>Tree Growing Worshop</EventTitle>
        <EventTiming>3PM TO 4PM</EventTiming>
        <EventDescription>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi,
          eaque nobis! Porro aliquid repellat numquam sed rem nemo blanditiis
          iure voluptatem debitis neque qui illum fugit tempora, harum iusto
          ipsum impedit repellendus quaerat quo beatae aut nobis ducimus dolorem
          quibusdam. Magnam, amet ducimus quas blanditiis, velit ullam fugit ex,
          dolor fuga animi inventore repellat. Quos ipsum quibusdam nihil, quo,
          quae cupiditate quia dolorem nostrum voluptatibus dolor commodi sed
          incidunt. Distinctio qui consequuntur doloremque nostrum omnis aperiam
          ut fuga nobis odit.
        </EventDescription>
      </EventTextContainer>
    </EventContainer>
  );
}

export default IndividualEvent;

const EventContainer = styled.div`
width:100%;
height:50vh;
display:flex;
align-items:center;
justify-content:space-around;
border-bottom:1px solid black;
`;

const EventTextContainer = styled.div`
width:60%;
height:40vh;
display:flex;
flex-direction:column;
justify-content:space-around;
`;

const EventTitle = styled.div`
  font-weight: 700;
  font-size: 30px;
  color: #0679b8;
`;

const EventTiming = styled.div`
  font-weight: 600;
  font-size: 22px;
  color: #9bb8c8;
`;

const EventDescription = styled.div`
  font-size: 19px;
  color: #2d6d61;
`;
