import { Container } from './styles';
import Spinner from '../Spinner';
import { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
  error?: string | null;
  isLoading?: boolean;
}

function FormGroup({ children, error = null, isLoading = false }: IProps) {
  return (
    <Container>

      <div className="form-item">
        {children}
        {isLoading && (
          <div className="loader">
            <Spinner size={16} />
          </div>
        )}
      </div>
      {error && <small>{error}</small>}
    </Container>
  );
}

export default FormGroup;
