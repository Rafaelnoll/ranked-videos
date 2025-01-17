import styled, { css } from 'styled-components';

export default styled.label`
  font-size: 18px;
  font-weight: 500;

  ${({theme}) => css`
    color: ${theme.colors.gray['900']};
  `}
`;
