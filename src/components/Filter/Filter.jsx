import PropTypes from "prop-types";
import React, { Component } from "react";
import { nanoid } from "nanoid";
import { AiOutlineFileSearch } from "react-icons/ai";
import { InputContainer, Input, Label } from "./Filter.styled";

export class Filter extends Component {
  state = {
    value: "",
  };

  filterInputId = nanoid();

  handleChange = (e) => {
    const { value } = e.target;

    this.setState({ value });
    this.props.onChange(value);
  };

  render() {
    const { value } = this.state;

    return (
      <>
        <InputContainer>
          <Input
            id={this.filterInputId}
            type="text"
            value={value}
            onChange={this.handleChange}
            placeholder="Dmitry"
          />
          <Label htmlFor={this.filterInputId}>
            <AiOutlineFileSearch size="30" />
            Find contacts by name
          </Label>
        </InputContainer>
      </>
    );
  }
}

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
