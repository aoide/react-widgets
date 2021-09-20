/*
    AutoSuggest
    Input field with auto suggestion on type
 */

import React, { Component } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import * as variables from "../styles/variables";
import { menuValues } from "../common/app-data";
import { CustomEmpty } from "./empty";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
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

  @media only screen and (min-width: ${variables.screen_small}) {
    width: 400px;
  }

  @media only screen and (max-width: ${variables.screen_small}) {
    width: 100%;
  }
`;

const MenuItem = styled.div`
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  padding: ${variables.spacing_small} ${variables.spacing_base};
  cursor: pointer;
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

export class CustomAutoSuggest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      value: '',
      options: [],
    };

    this.wrapperRef = React.createRef();
    menuValues.forEach(val => this.state.options.push(val));

    this.selectItem = this.selectItem.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
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

  selectItem(menuItem) {
    this.setState({
      open: false,
      value: menuItem.label
    });
  }

  handleFieldChange(e) {
    this.setState({
      open: true,
      value: e.target.value,
      // options: ['test']
    });

    /*
    menuValues.forEach(item => {
      if (item.label.includes(e.target.value)) {
        this.state.options.push(item);
      }
    });
    */
  }

  render() {

    return (
      <Container ref={this.wrapperRef} className={this.state.open ? "open" : "closed"}>
        <label>Type something</label>
        <input
          type="text"
          value={this.state.value}
          onChange={(e) => this.handleFieldChange(e)}
        />
        <Menu>
          {this.state.options.length ?
          <>
            {this.state.options.map((menuItem) => (
              <MenuItem key={menuItem.label} onClick={() => this.selectItem(menuItem)}>
                <FontAwesomeIcon icon={menuItem.icon} />
                <label>{menuItem.label}</label>
              </MenuItem>
            ))}
          </>
          :
            <CustomEmpty />
          }
        </Menu>
      </Container>
    );
  }
}
