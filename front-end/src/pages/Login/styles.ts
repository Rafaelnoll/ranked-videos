import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const RegisterLinkContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 12px;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 400px;
`;

export const RegisterLinkText = styled.span`
  text-align: center;

  ${({ theme }) => css`
    color: ${theme.colors.gray['900']};

    a {
      color: ${theme.colors.primary.dark};
      text-decoration: none;

      &:hover{
        color: ${theme.colors.primary.main};
      }
    }
  `}
`;
