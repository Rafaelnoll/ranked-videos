import FormGroup from "../../components/FormGroup";
import { Container, Form } from "./styles";
import { ButtonContainer } from "../../components/FormGroup/styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Label from "../../components/Label";

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
      </Form>
    </Container>
  )
}
