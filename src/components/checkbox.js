/*
    Checkbox
    Single checkbox input field
 */

import React, { Component } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import * as variables from "../styles/variables";

export const CheckBoxOption = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  pointer-events: auto;

  input {
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .svg-inline--fa {
    font-size: 1.5em;
    margin-right: ${variables.spacing_small};
  }

  &:hover {
    color: ${variables.color_button_hover};
  }
`;

const rand = Math.floor(Math.random() * Math.floor(300));

export class CustomCheckbox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: this.props.checked
    };

    this.handleFieldChange = this.handleFieldChange.bind(this);
  }

  handleFieldChange() {
    this.setState({
      checked: !this.state.checked
    });
  }

  render() {
    const itemID = this.props.id ? this.props.id : 'check_' + rand;
    const itemlabel = this.props.label ? this.props.label : 'I have a bike';

    return (
      <CheckBoxOption htmlFor={itemID}>
        <input
          type="checkbox"
          id={itemID}
          name="check"
          value="SomeItem"
          onClick={() => this.handleFieldChange()}
        />

        {this.state.checked ? (
          <FontAwesomeIcon icon="check-square" />
        ) : (
          <FontAwesomeIcon icon={["far", "square"]} />
        )}

        <span className="value">{itemlabel}</span>
      </CheckBoxOption>
    );
  }
}
