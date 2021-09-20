/*
    MultiSelect box
    Allows from selected to available
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
`;

const SelectContainer = styled.div`
  display: flex;

  @media only screen and (max-width: ${variables.screen_medium}) {
    flex-direction: column;
  }
`;

const SelectBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 250px;
  background: ${variables.color_button};
  border-radius: ${variables.border_radius};
  box-shadow: 5px 5px 10px 0px ${variables.color_shadow};
  overflow: hidden;

  @media only screen and (min-width: ${variables.screen_medium}) {
    &:first-child {
      margin-right: ${variables.spacing_large};
    }
  }

  @media only screen and (max-width: ${variables.screen_medium}) {
    width: 100%;

    &:first-child {
      margin-bottom: ${variables.spacing_base};
    }
  }
`;

const SelectHeader = styled.h4`
  display: flex;
  justify-content: center;
  padding: ${variables.spacing_smallest} 0;
  background: ${variables.color_widget_heading};
  color: ${variables.color_button_text};
`;

const SelectList = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  height: 100%;
`;

const SelectItem = styled.div`
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

  .hoverIcon {
    visibility: hidden;

    @media only screen and (max-width: ${variables.screen_medium}) {
      transform: rotate(90deg);
    }
  }

  ${SelectBox}:first-child & .hoverIcon {
    margin-left: auto;
    margin-right: 0;
  }

  &:hover {
    background: ${variables.color_button_hover};

    .hoverIcon {
      visibility: visible;
    }
  }
`;

export class CustomMultiSelect extends Component {
  constructor(props) {
    super(props);

    this.state = {
      available: [],
      selected: []
    };

    menuValues.forEach(val => this.state.available.push(val));

    this.addToSelected = this.addToSelected.bind(this);
    this.addToAvailable = this.addToAvailable.bind(this);
  }
  
  addToSelected(item, index) {
    this.state.available.splice(index, 1);
    this.state.selected.push(item);
    this.forceUpdate();
  }

  addToAvailable(item, index) {
    this.state.available.push(item);
    this.state.selected.splice(index, 1);
    this.forceUpdate();
  }

  render() {
    return (
      <Container>
        <label>Select options for the thing</label>

        <SelectContainer>
          <SelectBox>
            <SelectHeader>Available</SelectHeader>
            <SelectList>
              {this.state.available.length ?
                <>
                  {this.state.available.map((menuItem, index) => (
                    <SelectItem key={index} onClick={() => this.addToSelected(menuItem, index)}>
                      <FontAwesomeIcon icon={menuItem.icon} />
                      <label>{menuItem.label}</label>
                      <FontAwesomeIcon className="hoverIcon" icon="chevron-right" />
                    </SelectItem>
                  ))}
                </>
                :
                <CustomEmpty />
              }
            </SelectList>
          </SelectBox>

          <SelectBox>
            <SelectHeader>Selected</SelectHeader>
            <SelectList>
              {this.state.selected.length ?
                <>
                  {this.state.selected.map((menuItem, index) => (
                    <SelectItem key={index} onClick={() => this.addToAvailable(menuItem, index)}>
                      <FontAwesomeIcon className="hoverIcon" icon="chevron-left" />
                      <FontAwesomeIcon icon={menuItem.icon} />
                      <label>{menuItem.label}</label>
                    </SelectItem>
                  ))}
                </>
                :
                <CustomEmpty />
              }
            </SelectList>
          </SelectBox>
        </SelectContainer>
      </Container>
    );
  }
}
