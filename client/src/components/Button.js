import styled from "styled-components";

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: #6b5875;
  border: 0.05rem solid #6b686d;
  color: var(--lightLavender);
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease -in -out;
  &: hover {
    background: var(--lightLavender);
    color: var(--mainMagento);
  }
`;
