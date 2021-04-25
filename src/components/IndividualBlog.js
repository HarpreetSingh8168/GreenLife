import React from 'react'
import styled from 'styled-components';

function IndividualBlog() {
    return (
        <Container>
            <Image src="https://images.squarespace-cdn.com/content/v1/5ce5a6cdf2243000011186fb/1558643207833-ASYOXTLOD8HEADDF21P6/ke17ZwdGBToddI8pDm48kGqS2YqE0YbqA-V-AuorkON7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UYtdhYdMjeiK9xUbsn6CiI3TzH09VesHRzRpZ4p-dkysoRwB-dUGsSquCnVTFQcaRg/Screen+Shot+2019-05-23+at+4.26.19+PM.png?format=1000w"/>
            <Date>5/23/19</Date>
            <BlogTitle>Tomatoes are Now in Season</BlogTitle>
            <ReadMoreButton>Read More</ReadMoreButton>
        </Container>
    )
}

export default IndividualBlog

const Container = styled.div`
width:100%;
flex: 0 47%;

height:90vh;
`;

const Image = styled.img`
width:100%;
object-fit:cover;
cursor:pointer;
`;

const Date = styled.div`
  color: #0f4b40;
`;

const BlogTitle = styled.div`
font-weight:700;
font-size:36px;
cursor:pointer;
`;

const ReadMoreButton = styled.div`
text-decoration:underline;
cursor:pointer;
`;