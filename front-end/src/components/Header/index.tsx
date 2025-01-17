import { Container } from './styles';

import logo from '../../assets/images/logo.png';

export function Header() {
  return (
    <Container>
      <img src={logo} alt="My Conctacts" />
    </Container>
  );
}
