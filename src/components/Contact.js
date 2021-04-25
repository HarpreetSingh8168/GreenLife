import React, { useState } from "react";
import styled from "styled-components";
import CloseIcon from "@material-ui/icons/Close";

function Contact() {

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  }
  return (
    <Container>
      <Banner>
        <BannerImage src="https://images.unsplash.com/photo-1615473191026-d19b1a0bcf4c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
        <ContactContainer>
          <ContactTitle>Contact</ContactTitle>
          <Description>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
            accusantium, fugit at distinctio laudantium odio deleniti hic
            molestiae culpa id voluptatum fugiat alias! A dolor officiis iusto
            perspiciatis facere, vitae ipsa aliquid, natus assumenda nostrum
            distinctio fugiat nihil quod libero. Hic repellendus reprehenderit,
            asperiores mollitia ab iusto, vitae incidunt deserunt veniam optio
            odit aspernatur ratione voluptatum minima impedit tempora eum
            voluptate. Facere suscipit nulla a sit vitae, quae doloribus dolore.
          </Description>
          <GetinTouchButton onClick={handleClickOpen}>
            Get in Touch
          </GetinTouchButton>
          {open && (
            <DialogBoxContainer open={open}>
              <DialogHeadContainer>
                <DialogTitle>Join the Community</DialogTitle>
                <CloseIconContainer
                  fontSize="large"
                  onClick={() => setOpen(false)}
                />
              </DialogHeadContainer>
              <DialogForm>
                <NameContainer>
                  <NameLabel>
                    Name<span>*</span>
                  </NameLabel>
                  <NameInput />
                </NameContainer>
                <EmailContainer>
                  <EmailLabel>
                    Email<span>*</span>
                  </EmailLabel>
                  <EmailInput />
                </EmailContainer>
                <NumberContainer>
                  <NumberLabel>
                    Phone<span>*</span>
                  </NumberLabel>
                  <NumberInput />
                </NumberContainer>
                <QuestionContainer>
                  <QuestionLabel>
                    Have you been part of any Community before?
                  </QuestionLabel>
                  <YesContainer>
                    <YesInput type="radio" />
                    <YesLabel>Yes</YesLabel>
                  </YesContainer>
                  <NoContainer>
                    <NoInput type="radio" />
                    <NoLabel>No</NoLabel>
                  </NoContainer>
                </QuestionContainer>
              </DialogForm>
              <SubmitContainer>
                <SubmitButton>Submit</SubmitButton>
              </SubmitContainer>
            </DialogBoxContainer>
          )}
        </ContactContainer>
      </Banner>
    </Container>
  );
}

export default Contact;

const Container = styled.div`
width:100%;
`;

const Banner = styled.div`
  width: 100%;
  height:100vh;
  position: relative;
  display:flex;
  justify-content:center;
  align-items:center;
`;

const BannerImage = styled.img`
  width: 100%;
  height:100vh;
  object-fit:cover;
  
`;
const ContactContainer = styled.div`
  width: 50%;
  height: 40vh;
  color: white;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const ContactTitle = styled.div`
font-weight:800;
font-size:40px;
`;

const Description = styled.div`
`;

const GetinTouchButton = styled.button`
  width: 20%;
  height: 20%;
  background-color: #a772af;
  color: white;
  font-size: 16px;
  border:2px solid #dadada;
  :focus {
    outline: none;
  }
  :hover {
    background-color: #905d98;
  }
  cursor: pointer;
`;

const DialogBoxContainer = styled.div`
  display: block;
  position: fixed;
  width: 50%;
  height: 75%;
  background-color: #dadada;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items:center;
  border-radius: 9px;
  border: 5px solid #00c805;
  box-shadow: 1px 1px 1px 3px black;
`;

const DialogHeadContainer = styled.div`
width:80%;
height:15%;
display:flex;
justify-content:space-between;
align-items:flex-end;
`;

const DialogTitle = styled.h1`
font-size:38px;
`;

const CloseIconContainer = styled(CloseIcon)`
color:red;
cursor:pointer;
`;

const DialogForm = styled.form`
height:60%;
width:100%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-around;
`;

const NameContainer = styled.div`
width:80%;
display:flex;
flex-direction:column;
`;

const NameLabel = styled.label`
span{
  color:red;
}
`;

const NameInput = styled.input`
  height: 27px;
  width: 80%;
  font-size: 17px;
  :focus-within {
    outline: none;
    border: 1px solid #00c805;
  }
`;

const EmailContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
`;

const EmailLabel = styled.label`
  span {
    color: red;
  }
`;

const EmailInput = styled.input`
  height: 27px;
  width: 80%;
  font-size: 17px;
  :focus-within {
    outline: none;
    border: 1px solid #00c805;
  }
`;

const NumberContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
`;

const NumberLabel = styled.label`
  span {
    color: red;
  }
`;

const NumberInput = styled.input`
  height: 27px;
  width:80%;
  font-size: 17px;
  :focus-within {
    outline: none;
    border: 1px solid #00c805;
  }
`;

const QuestionContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
`;

const QuestionLabel = styled.label``;

const YesContainer = styled.div``;

const YesInput = styled.input``;

const YesLabel = styled.label``;

const NoContainer = styled.div``;

const NoInput = styled.input``;

const NoLabel = styled.label``;

const SubmitContainer = styled.div``;

const SubmitButton = styled.button`
  width: 130px;
  height: 60px;
  color: white;
  margin-left: 9%;
  background-color: black;
  border: 2px solid blue;
  :hover {
    opacity: 0.85;
  }
  cursor: pointer;
`;