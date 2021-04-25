import React from "react";
import styled from "styled-components";

function EventImage() {
  return (
    <Container>
      <EventImageContainer>
        <EventImages src="https://images.squarespace-cdn.com/content/v1/5ce5a6cdf2243000011186fb/1562623833599-IKKYFY35GT27VXB0O9A1/ke17ZwdGBToddI8pDm48kGXoD000J7kx3NE7W-LXpdwUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcSHIBb6yNmvYkAyvF3loIw6LWPhmq3jJqr-f9nvyP7bW--NA7--1aw0mnW_uWXk87/SQS_RYAN-HENRY_DK_0260-edited.jpg?format=500w" />
        <EventDateImage>
          <EventDateImageMonth>JUL</EventDateImageMonth>
          <EventDateImageDay>14</EventDateImageDay>
        </EventDateImage>
      </EventImageContainer>
      {/* <EventName>Community Meeting</EventName>
      <EventDate>JUL 14,2021</EventDate> */}
    </Container>
  );
}

export default EventImage;

const Container = styled.div`
  width: 30%;
  @media only screen and (max-width:992px){
    width:80%;
  }
`;

const EventImageContainer = styled.div`
  position: relative;
`;

const EventImages = styled.img`
  width: 100%;
`;

const EventDateImage = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 50px;
  height: 60px;
  background: white;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
`;

const EventDateImageMonth = styled.div`
  padding-left: 3px;
`;

const EventDateImageDay = styled.div`
  font-size: 22px;
`;

const EventName = styled.div`
  color: white;
`;

const EventDate = styled.div`
  color: white;
`;
