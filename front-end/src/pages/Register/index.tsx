import FormGroup from "../../components/FormGroup";
import { Container, Form, RegisterLinkContainer, RegisterLinkText } from "./styles";
import { ButtonContainer } from "../../components/FormGroup/styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Label from "../../components/Label";
import { Link } from "react-router";
import AuthenticationService from "../../services/AuthenticationService";
import { FormEvent } from "react";
import { useToast } from "../../hooks/useToast";

export default function Register(){

  const dispatchToast = useToast();

  async function handleRegisterUser(){
    const response = await AuthenticationService.register({ name: "Ronald", email:"ronald@email.com", password: 'cavalo123' });

    if(response.error){
      dispatchToast(response.error, { type: 'error', position: 'bottom-center' });
      return
    }

    dispatchToast('User created', { type: 'success', position: 'bottom-center' });
  }

  function onSubmit(event: FormEvent){
    event.preventDefault();
  }

  return (
    <Container>
       <Form onSubmit={onSubmit}>
        <FormGroup>
          <Label>Name</Label>
          <Input placeholder="Your name" type="text" />
        </FormGroup>

        <FormGroup>
          <Label>Email address</Label>
          <Input placeholder="hello@exemple.com" type="text" />
        </FormGroup>

        <FormGroup>
          <Label>Password</Label>
          <Input placeholder="●●●●●●●●●●" type="password" />
        </FormGroup>

        <FormGroup>
          <Label>Confirm Password</Label>
          <Input placeholder="●●●●●●●●●●" type="password" />
        </FormGroup>

        <ButtonContainer>
          <Button onClick={handleRegisterUser} type="submit">Register</Button>
        </ButtonContainer>

        <RegisterLinkContainer>
          <RegisterLinkText>
            Or <Link to='/login'>Log in to your account</Link>
          </RegisterLinkText>
        </RegisterLinkContainer>
      </Form>
    </Container>
  )
}
