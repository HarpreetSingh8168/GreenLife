import React from "react";
import styled from "styled-components";

function About() {
  return (
    <Container>
      <BannerContainer>
        <BannerImage src="https://images.unsplash.com/photo-1521344151738-afd364618101?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80" />
        <BannerText>About</BannerText>
      </BannerContainer>
      <AboutContainer>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          dolores quam beatae ullam sapiente molestiae magnam vero delectus nisi
          tenetur vitae ipsum voluptatibus et porro facilis, adipisci voluptatum
          deleniti ex commodi soluta. Numquam molestias aliquam praesentium.
          Numquam magni explicabo distinctio quidem quaerat dolorum blanditiis
          autem perferendis minus quia odio reiciendis, facere accusantium,
          quibusdam consequuntur. Repellendus eligendi consectetur dignissimos
          omnis? Dolor.
        </Description>
        <TeamImage src="data:image/jpeg;base64,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" />
        <Details>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem cum
          qui sequi ab amet est, optio repudiandae! Facilis quae minima in
          dolore cum, expedita sunt officiis doloribus obcaecati facere. Eius
          fugiat quasi nemo doloribus. Alias perferendis esse inventore
          exercitationem pariatur. Sunt, commodi quia labore sit ullam suscipit
          aperiam veniam quisquam nobis delectus ad rerum iure nulla assumenda
          nostrum corporis illum est sequi facere eligendi magni temporibus
          nihil rem pariatur? Excepturi quasi accusamus deserunt. Odio cum sunt
          rem rerum reprehenderit facilis possimus laborum, inventore nam
          repellat quaerat nisi unde asperiores sint quisquam veniam ipsum
          veritatis, autem nemo architecto odit dignissimos excepturi
          voluptatibus iste? Ipsam, at eum libero repudiandae dolore temporibus
          blanditiis consequatur doloremque laborum, consectetur, quos ut animi
          quae ipsa deleniti ipsum repellat ratione itaque provident alias in
          voluptatem ex magni.
        </Details>
      </AboutContainer>
    </Container>
  );
}

export default About;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ddffde;
`;

const BannerContainer = styled.div`
  width: 100%;
  height: 80vh;
  position: relative;
`;

const BannerImage = styled.img`
  width: 100%;
  height: 80vh;
  object-fit: cover;
`;

const BannerText = styled.div`
  height: 50px;
  width: 30%;
  position: absolute;
  top: 37vh;
  left: 46%;
  color: white;
  font-weight: 700;
  font-size: 45px;
`;

const AboutContainer = styled.div`
width:70%;
`;

const Description = styled.div`
font-weight:500;
font-size:23px;
padding:40px 0 40px 0;
`;

const TeamImage = styled.img`
  width: 100%;
  object-fit: cover;
  padding: 40px 0 40px 0;
`;

const Details = styled.div`
  font-size: 17px;
  padding: 40px 0 40px 0;
`;