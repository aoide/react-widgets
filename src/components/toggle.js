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
`;

export const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 50px;
  height: 24px;
  border-radius: 20px;
  padding: 2px 4px;
  color: ${variables.color_button_text};
  margin-right: ${variables.spacing_small};

  span {
    margin-right: 4px;
  }

  &.off {
    background: ${variables.color_button};
  }

  &.on {
    background: ${variables.color_success};
    flex-direction: row-reverse;
  }

  &:hover {
    background: ${variables.color_button_hover};
  }
`;

export class CustomToggle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: true
    };

    this.handleFieldChange = this.handleFieldChange.bind(this);
  }

  handleFieldChange() {
    this.setState({
      checked: !this.state.checked
    });
  }

  render() {
    return (
      <CheckBoxOption htmlFor="toggle">
        <input type="checkbox" 
               id="toggle" 
               name="check" 
               value="SomeItem"
               onClick={() => this.handleFieldChange()} />

        <ToggleContainer className={this.state.checked ? "on" : "off"}>
          <span>{this.state.checked ? "On" : "Off"}</span>
          <FontAwesomeIcon icon="circle" />
        </ToggleContainer>

        <span className="value">I {this.state.checked ? "have" : "don't have"} a bike</span>
      </CheckBoxOption>
    );
  }
}
