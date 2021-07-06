import styled from "@emotion/styled/macro";

export const StyledContainer = styled.div`
  width: 800px;
  margin: 0 auto;
  padding: 30px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.5) 0 0 10px 5px;

  background-color: var(--color-bg);

  & h1,
  h2 {
    display: flex;
    justify-content: center;
    align-items: center;

    color: var(--color-dark);

    & svg {
      margin-right: 10px;
    }
  }

  & h1 {
    font-size: 40px;
    margin-bottom: 40px;
  }

  & h2 {
    font-size: 28px;
    margin-bottom: 60px;
  }
`;
