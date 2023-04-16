import styled from 'styled-components';

export const Button = styled.div<{ disabled?: boolean }>`
  cursor: ${({ disabled }) => (disabled ? 'none' : 'pointer')};
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
