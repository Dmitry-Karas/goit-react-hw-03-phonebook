import PropTypes from "prop-types";
import { BsTrash } from "react-icons/bs";
import { MdContactPhone } from "react-icons/md";
import { List, Item, Button } from "./ContactList.styled";

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => {
        return (
          <Item key={id}>
            <span>
              <MdContactPhone size="20" />
              {name}:
            </span>
            <span>{number}</span>
            <Button
              onClick={() => {
                onDeleteContact(id);
              }}
            >
              <BsTrash size="20" />
            </Button>
          </Item>
        );
      })}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
