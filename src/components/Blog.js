import React from 'react'
import styled from 'styled-components';
import IndividualBlog from './IndividualBlog';

function Blog() {
    return (
      <Container>
        <HeaderContainer />
        <PageTitle>Blog</PageTitle>
        <BlogContainer>
          <IndividualBlog />
          <IndividualBlog />
          <IndividualBlog />
        </BlogContainer>
      </Container>
    );
}

export default Blog

const Container = styled.div`
  background: url("https://i.pinimg.com/originals/43/21/88/432188f502b9a625f74a7d8cacbe5b8b.jpg");
  width: 100%;
`;

const HeaderContainer = styled.div`
width:100%;
height:100px;
background-color:black;
`;

const PageTitle = styled.div`
height:30vh;
font-weight:800;
font-size:50px;
display:flex;
justify-content:center;
align-items:center;
`;

const BlogContainer = styled.div`
width:100%;
display:flex;
flex-wrap:wrap;
justify-content:space-around;
`;




