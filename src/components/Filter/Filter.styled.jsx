import styled from "@emotion/styled/macro";

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 40px;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  height: 40px;
  margin-bottom: 40px;
  padding-left: 40px;
  border: none;
  border-bottom: 1px solid tan;

  font-size: 20px;
  color: var(--color-accent);
  background-color: transparent;

  transition: all 250ms ease-in-out;

  &::placeholder {
    opacity: 0;

    color: var(--color-accent);

    transition: opacity 250ms ease;
  }

  &:focus {
    outline: none;
    border-bottom: 1px solid var(--color-accent);

    &::placeholder {
      opacity: 0.7;
      transition-delay: 250ms;
    }
  }

  &:focus + label,
  &:not(:placeholder-shown) + label {
    transform: translate(-36px, -30px);
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 600;
    color: var(--color-accent);

    & svg {
      color: var(--color-accent);
      transform: translate(36px, 30px);
    }
  }
`;

export const Label = styled.label`
  position: absolute;
  left: 0;
  bottom: 5px;
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  cursor: text;

  font-size: 20px;
  color: tan;

  transition: color 250ms ease-in-out, transform 250ms ease-in-out;

  & svg {
    margin-right: 10px;
    transition: color 250ms ease-in-out, transform 250ms ease-in-out;
  }
`;
