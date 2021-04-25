import React from "react";
import styled from "styled-components";

function BlogIndividual() {
  return (
    <Container>
      <BlogContainer>
        <BlogDetailContainer>
          <DateContainer>May 23</DateContainer>
          <AuthorIcon src="/poem.png" />
          <AuthorContainer>Written By Joe Smith</AuthorContainer>
        </BlogDetailContainer>
        <BlogTitle>Tomatoes are Now in Season</BlogTitle>
        <BlogBodyContainer>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat in,
          dolores ex vero cupiditate molestias temporibus cumque excepturi
          reprehenderit recusandae necessitatibus quibusdam mollitia expedita
          iste repellendus laboriosam minus corporis cum neque deleniti? Esse
          aut iure fuga ad praesentium laboriosam optio nesciunt quisquam! Quod,
          eos repellat quasi deserunt eveniet nesciunt omnis totam, libero,
          magnam saepe similique atque. Dolore soluta quis ad eaque repellat
          beatae hic nostrum perspiciatis velit, sapiente veritatis aliquam
          doloribus voluptatibus similique doloremque excepturi autem ab
          dignissimos quisquam laboriosam eos. Quae saepe suscipit illum facere
          nihil voluptate deleniti, quas labore quo amet. Tempora repellat ex
          commodi, magni animi voluptas!
        </BlogBodyContainer>
      </BlogContainer>
    </Container>
  );
}

export default BlogIndividual;

const Container = styled.div`
width:100%;
display:flex;
flex-direction:column;
align-items:center;
padding-top:200px;
`;

const BlogContainer = styled.div`
width:80%;
`;
const BlogDetailContainer = styled.div`
display:flex;
width:21%;
justify-content:space-around;
`;

const DateContainer = styled.div`
font-size:17px;
`;

const AuthorIcon = styled.img`
margin-left:13px;
`;

const AuthorContainer = styled.div`
  font-size: 17px;
`;

const BlogTitle = styled.div`
padding:30px 0 30px 0;
`;

const BlogBodyContainer = styled.div`
margin-bottom:40px;
`;
