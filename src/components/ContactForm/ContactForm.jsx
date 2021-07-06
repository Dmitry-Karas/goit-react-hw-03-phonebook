import PropTypes from "prop-types";
import { nanoid } from "nanoid";
import { Component } from "react";
import {
  StyledForm,
  InputContainer,
  Input,
  Label,
  Button,
} from "./ContactForm.styled";
import { FiUser, FiPhone, FiUserPlus } from "react-icons/fi";

export class ContactForm extends Component {
  state = { contacts: [], name: "", number: "" };

  nameInputId = nanoid();
  telInputId = nanoid();
  contactId = nanoid();

  handleChange = (e) => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    const { name, number } = this.state;

    return (
      <StyledForm onSubmit={this.handleSubmit}>
        <InputContainer>
          <Input
            id={this.nameInputId}
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            autoComplete="off"
            placeholder="Dmitry Karas"
            maxLength="40"
            required
          />

          <Label htmlFor={this.nameInputId}>
            <FiUser size="22" />
            Name
          </Label>
        </InputContainer>

        <InputContainer>
          <Input
            id={this.telInputId}
            type="tel"
            name="number"
            value={number}
            onChange={this.handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять из цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            autoComplete="off"
            placeholder="444-55-66"
            maxLength="17"
            required
          />
          <Label htmlFor={this.telInputId}>
            <FiPhone size="22" />
            Number
          </Label>
        </InputContainer>

        <Button type="submit">
          <FiUserPlus size="30" />
          add
        </Button>
      </StyledForm>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
