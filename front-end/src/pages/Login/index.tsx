import FormGroup from "../../components/FormGroup";
import { Container, Form, RegisterLinkContainer, RegisterLinkText } from "./styles";
import { ButtonContainer } from "../../components/FormGroup/styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Label from "../../components/Label";
import { Link } from "react-router";

export default function Login(){
  return (
    <Container>
       <Form>
        <FormGroup>
          <Label>Email address</Label>
          <Input placeholder="hello@exemple.com" type="text" />
        </FormGroup>

        <FormGroup>
          <Label>Password</Label>
          <Input placeholder="●●●●●●●●●●" type="password" />
        </FormGroup>

        <ButtonContainer>
          <Button type="submit">Login</Button>
        </ButtonContainer>

        <RegisterLinkContainer>
          <RegisterLinkText>
            Or <Link to='/register'>Register Account</Link>
          </RegisterLinkText>
        </RegisterLinkContainer>
      </Form>
    </Container>
  )
}
