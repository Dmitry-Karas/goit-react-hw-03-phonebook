import styled from "@emotion/styled/macro";

export const List = styled.ul`
  border-radius: 4px;
  overflow: hidden;
`;
export const Item = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding: 10px 5px;
  border-bottom: 1px solid rosybrown;

  & span {
    display: inline-flex;
    align-items: center;

    font-weight: 600;
    color: var(--color-dark);

    &:first-of-type {
      color: var(--color-accent);
      margin-right: 10px;
    }

    & svg {
      margin-right: 10px;
      color: var(--color-accent);
    }
  }

  & svg {
    color: var(--color-title);
  }
`;
export const Button = styled.button`
  display: block;
  margin-left: auto;
  padding: 10px;
  border: none;
  cursor: pointer;

  background-color: transparent;
  transition: all 250ms ease-in-out;

  &:hover {
    color: var(--color-accent);
    transform: scale(1.3);
  }
`;
