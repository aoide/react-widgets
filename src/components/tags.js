/*
    Tag Field
    A custom multi tag generator
 */

import React, { Component } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import * as variables from "../styles/variables";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputContainer = styled.div`
  position: relative;
  display: flex;

  @media only screen and (min-width: ${variables.screen_small}) {
    width: 400px;
  }

  input[type="text"] {
    padding-right: 30px;
  
    @media only screen and (min-width: ${variables.screen_small}) {
      width: ${variables.field_width};
    }

    @media only screen and (max-width: ${variables.screen_small}) {
        width: 100%;
    }
  }
`;

const IconContainer = styled.div`
  position: absolute;
  top: 0;
  right: -2px;
  height: 100%;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${variables.color_button_disabled};
  color: ${variables.color_button_text};
  border-radius: 0 ${variables.border_radius} ${variables.border_radius} 0;

  &.hasValue {
    background: ${variables.color_button};
    cursor: pointer;

    &:hover {
      background: ${variables.color_button_hover};
    }
  }
`;

const TagList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border-radius: ${variables.border_radius};
  padding: ${variables.spacing_small} 0;

  &.noValue {
    font-style: italic;
    color: ${variables.color_field_border};
  }
`;

const TagItem = styled.div`
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  border-radius: ${variables.border_radius};
  padding: ${variables.spacing_smallest} ${variables.spacing_small};
  background: ${variables.color_button};
  margin: 0 ${variables.spacing_small} ${variables.spacing_small} 0;
  cursor: pointer;
  color: ${variables.color_button_text};

  label {
    margin: 0;
    color: ${variables.color_button_text};
    font-weight: normal;
  }

  .svg-inline--fa {
    margin-left: ${variables.spacing_smallest};
    visibility: hidden;
  }

  &:hover {
    background: ${variables.color_issue};

    .svg-inline--fa {
      visibility: visible;
    }
  }
`;

export class CustomTagField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      options: []
    };

    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  handleFieldChange(e) {
    if (e.key === 'Enter') {
      this.setState({
        value: ""
      });
      this.addItem(e.target.value);
    } else {
      this.setState({
        value: e.target.value
      });
    }
  }

  addItem(item) {
    this.setState({
      value: ""
    });

    this.state.options.push(item)
  }

  removeItem(index) {
    this.state.options.splice(index, 1);
    this.forceUpdate();
  }

  render() {
    return (
      <Container>
        <label htmlFor="tagSample">Type something</label>
        <InputContainer>
          <input
            id="tagSample"
            type="text"
            value={this.state.value}
            onChange={(e) => this.handleFieldChange(e)}
            onKeyDown={(e) => this.handleFieldChange(e)}
          />
          <IconContainer onClick={() => this.addItem(this.state.value)} 
                         className={this.state.value ? "hasValue" : ""}>
            <FontAwesomeIcon icon="plus" />
          </IconContainer>
        </InputContainer>
        <TagList className={this.state.options.length ? 'hasValue' : "noValue"}>
          {this.state.options.length ?
            <>
              {this.state.options.map((menuItem, index) => (
                <TagItem key={index} onClick={() => this.removeItem(index)} >
                  <label>{menuItem}</label>
                  <FontAwesomeIcon icon="times" />
                </TagItem>
              ))}
            </>
          :
            "No tags created"
          }
        </TagList>
      </Container>
    );
  }
}
