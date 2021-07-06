import PropTypes from "prop-types";
import { Wrapper, Title } from "./Section.styled";

export const Section = ({ title, children }) => {
  return (
    <Wrapper>
      {title && <Title>{title}</Title>}
      {children}
    </Wrapper>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};
