/*
    Select box
    A custom drop-down select menu
 */

import React, { Component } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import * as variables from "../styles/variables";
import { menuValues } from "../common/app-data";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;
`;

const InputGroup = styled.div`
  position: relative;
  display: flex;

  @media only screen and (min-width: ${variables.screen_width_small}) {
    width: 400px;
  }

  input {
    pointer-events: none;
  
    @media only screen and (min-width: ${variables.screen_width_small}) {
      width: ${variables.field_width};
    }

    @media only screen and (max-width: ${variables.screen_width_small}) {
        width: 100%;
    }
  }

  .iconToggle {
    position: absolute;
    top: 7px;
    right: ${variables.spacing_small};

    .svg-inline--fa {
      transition: all 0.5s ease-in-out;

      ${Container}.open & {
        transform: rotate(180deg);
      }
    }
  }

  &:hover {
    color: ${variables.color_field_focus};
  }

  &:hover input {
    border-color: ${variables.color_field_focus};
    box-shadow: 0px 0px 8px 0px ${variables.color_field_focus};
  }
`;

const Menu = styled.div`
  position: absolute;
  top: 60px;
  height: 200px;
  overflow: auto;
  background: ${variables.color_button};
  border-radius: ${variables.border_radius};
  box-shadow: 5px 5px 10px 0px ${variables.color_shadow};
  display: flex;
  flex-direction: column;
  transition: height 0.5s ease-in-out;
  z-index: 5;

  ${Container}.closed & {
    height: 0;
  }

  @media only screen and (min-width: ${variables.screen_width_small}) {
    width: 400px;
  }

  @media only screen and (max-width: ${variables.screen_width_small}) {
    width: 100%;
  }
`;

const MenuItem = styled.div`
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  padding: ${variables.spacing_small} ${variables.spacing_base};
  color: ${variables.color_button_text};

  &:not(:last-child) {
    border-bottom: 1px solid ${variables.color_widget_border};
  }

  label {
    margin: 0;
    color: ${variables.color_button_text};
  }

  .svg-inline--fa {
    margin-right: ${variables.spacing_base};
  }

  &:hover {
    background: ${variables.color_button_hover};
  }
`;

const SelectedReadOut = styled.div`
  margin-top: ${variables.spacing_small};

  &.noValue {
    font-style: italic;
    color: ${variables.color_field_border};
  }

    .svg-inline--fa {
      margin-right: ${variables.spacing_smallest};
    }
`;

export class CustomSelector extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      selectedItem: null
    };
    
    this.wrapperRef = React.createRef();

    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleMenuToggle = this.handleMenuToggle.bind(this);
    this.selectItem = this.selectItem.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
      this.setState({
        open: false
      });
    }
  }

  handleMenuToggle() {
    this.setState({
      open: !this.state.open
    });
  }

  selectItem(item) {
    this.setState({
      open: false,
      selectedItem: item
    });
  }

  render() {
    return (
      <>
        <Container ref={this.wrapperRef} className={this.state.open ? "open" : "closed"}>
          <label>Select something</label>
          <InputGroup onClick={() => this.handleMenuToggle()}>
            <input type="text" placeholder="Select a value" disabled />
            <div className="iconToggle">
              <FontAwesomeIcon icon="chevron-down" />
            </div>
          </InputGroup>
          <Menu>
            {menuValues.map((menuItem) => (
              <MenuItem key={menuItem.label} onClick={() => this.selectItem(menuItem)}>
                <FontAwesomeIcon icon={menuItem.icon} />
                <label>{menuItem.label}</label>
              </MenuItem>
            ))}
          </Menu>
        </Container>
        <SelectedReadOut className={this.state.selectedItem ? 'hasValue' : "noValue"}>
          {this.state.selectedItem ? 
              <>
                <FontAwesomeIcon icon={this.state.selectedItem.icon} />
                <span>{this.state.selectedItem.label}</span>
              </>
            : "No item selected"}
        </SelectedReadOut>
      </>
    );
  }
}
