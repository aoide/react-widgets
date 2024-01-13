/*
    Add menu
    menu to add additional items on click/hover
 */

import React, { Component } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import * as variables from "../styles/variables";

const buttonSize = "50px";

const Container = styled.div`
  position: relative;
  width: 100%;
`;

const AddButton = styled.div`
  position: absolute;
  bottom: ${variables.spacing_base};
  right: ${variables.spacing_base};
  background: ${variables.color_button};
  color: ${variables.color_button_text};
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: ${variables.font_largest};
  height: ${buttonSize};
  width: ${buttonSize};
  border-radius: ${buttonSize};
  justify-content: center;
  z-index: 10;
  transition: background 0.4s ease-in-out;

  ${Container}.closed & {
    box-shadow: 5px 5px 10px 0px ${variables.color_shadow};
  }

  :hover {
    background: ${variables.color_button_hover};
  }
`;

const AddMenu = styled.div`
  position: absolute;
  right: ${variables.spacing_base};
  bottom: ${variables.spacing_base};
  padding-bottom: ${buttonSize};
  background: ${variables.color_button};
  border-radius: 25px;
  box-shadow: 5px 5px 10px 0px ${variables.color_shadow};
  display: flex;
  height: auto;
  width: 200px;
  flex-direction: column;
  overflow: hidden;
  transition: all 1s ease-in-out;

  ${Container}.closed & {
    height: 0;
    width: 0;
    right: 0;
    bottom: 0;
    border-radius: 0;
  }
`;

const AddMenuItem = styled.div`
  display: flex;
  align-items: center;
  padding: ${variables.spacing_small} ${variables.spacing_base};
  color: ${variables.color_button_text};
  cursor: pointer;
  border-bottom: 1px solid ${variables.color_widget_border};
  transition: display 3s ease-in-out;

  label {
    margin: 0;
    color: ${variables.color_button_text};
  }

  .svg-inline--fa {
    margin-right: ${variables.spacing_smallest};
  }

  &:hover {
    background: ${variables.color_button_hover};
  }
`;

export class CustomAddMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };

    this.handleMenuToggle = this.handleMenuToggle.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  handleMenuToggle() {
    this.setState({
      open: !this.state.open
    });
  }

  closeMenu() {
    this.setState({
      open: false
    });
  }

  render() {
    return (
      <Container className={this.state.open ? "open" : "closed"}>
        <AddButton onClick={() => this.handleMenuToggle()}>
          <FontAwesomeIcon icon={this.state.open ? "times" : "plus"} />
        </AddButton>
        <AddMenu>
          <AddMenuItem onClick={() => this.closeMenu()}>
            <FontAwesomeIcon icon="plus" />
            <label>Add This Thing 1</label>
          </AddMenuItem>
          <AddMenuItem onClick={() => this.closeMenu()}>
            <FontAwesomeIcon icon="plus" />
            <label>Add This Thing 2</label>
          </AddMenuItem>
          <AddMenuItem onClick={() => this.closeMenu()}>
            <FontAwesomeIcon icon="plus" />
            <label>Add This Thing 3</label>
          </AddMenuItem>
        </AddMenu>
      </Container>
    );
  }
}
