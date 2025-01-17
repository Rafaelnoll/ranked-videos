import { StyledSpinner } from './styles';

interface IProps {
  size?: number
}

export default function Spinner({ size = 32 }: IProps) {
  return <StyledSpinner size={size} />;
}
