import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content:center;
  align-items: center;
  flex-direction: column;

  margin: 48px 0;

  & > img {
    max-width: 400px;
  }
`;
