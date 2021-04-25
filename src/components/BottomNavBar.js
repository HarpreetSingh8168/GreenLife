import React from 'react'
import styled from 'styled-components';
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";

function BottomNavBar() {
    return (
        <Container>
            <AddressContainer>
                <CompanyName>
                    Roseti Community Farm & Garden
                </CompanyName>
                <Address>
                    123 Demo Street Brooklyn, NY 10014
                </Address>
                <ContactNumber>
                    (555)555-5555
                </ContactNumber>
                <DeveloperSection>
                    Made with Love
                </DeveloperSection>
            </AddressContainer>
            <NewsletterContainer>
                <NewsletterHeading>
                    Newsletter Sign Up
                </NewsletterHeading>
                <NewsletterSignUpSection>
                    <EmailInput placeholder="Email Address"></EmailInput>
                    <SignUpButton type="submit">Sign Up</SignUpButton>
                </NewsletterSignUpSection>
            </NewsletterContainer>
            <SidePanelContainer>
                <VisitContainer>
                    <VisitAbout>About</VisitAbout>
                    <VisitGetInvolved>Get Involved</VisitGetInvolved>
                </VisitContainer>
                <SocialSitesContainer>
                    <InstagramIconContainer />
                    <TwitterIconContainer />
                    <FacebookIconContainer />
                </SocialSitesContainer>
            </SidePanelContainer>
        </Container>
    )
}

export default BottomNavBar

const Container = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: black;
  color: #d2d3d2;
  border-top: 2px solid #00c805;
  @media only screen and (max-width:992px){
    flex-direction:column;
  }
`;

const AddressContainer = styled.div`
  width: 30%;
  height:200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:space-around;
`;

const CompanyName = styled.div``;

const Address = styled.div``;

const ContactNumber = styled.div``;

const DeveloperSection = styled.div``;

const NewsletterContainer = styled.div`
width:30%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`;

const NewsletterHeading = styled.div`
font-size:50px;
`;

const NewsletterSignUpSection = styled.div`
margin-top:40px;
width:100%;
  :focus-within {
    border: 2px solid #00c805;
    border-radius:7px;
  }
`;

const EmailInput = styled.input`
height:39px;
width:78%;
font-size:17px;
border-radius: 7px 0 0 7px;
flex:1;
:focus {
    outline:none;
}
`;

const SignUpButton = styled.button`
  height: 45px;
  width:20%;
  background-color: #d2d3d2;
  border-radius: 0 7px 7px 0;
  :hover {
    background-color: #bdbdbc;
  }
  :focus{
      outline:none;
  }
  cursor:pointer;
`;

const SidePanelContainer = styled.div`
width:30%;
height:100px;
display:flex;
flex-direction:column;
justify-content:space-around;
align-items:center;
`;


const VisitContainer = styled.div`
text-decoration:underline;
height:50%;
display:flex;
flex-direction:column;
justify-content:space-around;
font-size:19px;
`;

const VisitAbout = styled.div`
  cursor: pointer;
  :hover {
    opacity: 0.9;
  }
`;

const VisitGetInvolved = styled.div`
cursor:pointer;
:hover{
    opacity:0.9;
}
`;

const SocialSitesContainer = styled.div`
color:white;
width:20%;
display:flex;
justify-content:space-around;
`;

const InstagramIconContainer = styled(InstagramIcon)`
cursor:pointer;
:hover {
    opacity:0.8;
}
`;

const FacebookIconContainer = styled(FacebookIcon)`
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;

const TwitterIconContainer = styled(TwitterIcon)`
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;

