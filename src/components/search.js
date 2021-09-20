/*
    Search box
    A search field
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

  input {
    padding-right: 60px;
  
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

  &.search {
    border-radius: 0 ${variables.border_radius} ${variables.border_radius} 0;

    &.hasValue {
      background: ${variables.color_button};

      &:hover {
        background: ${variables.color_button_hover};
      }
    }
  }

  &.clear {
    display: none;
    right: 28px;
    border-right: 1px solid ${variables.color_widget_border};
    background: ${variables.color_issue};

    &:hover {
      background: ${variables.color_issue_hover};
    }
  }

  &.hasValue {
    display: flex;
    cursor: pointer;
  }
`;

export class CustomSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ""
    };

    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.clearSearch = this.clearSearch.bind(this);
    this.startSearch = this.startSearch.bind(this);
  }

  handleSearchChange(e) {
    if (e.key === 'Enter') {
      this.startSearch();
      this.setState({
        value: ""
      });
    } else {
      this.setState({
        value: e.target.value
      });
    }
  }

  clearSearch() {
    this.setState({
      value: ""
    });
  }

  startSearch() {
    this.setState({
      value: ""
    });
  }

  render() {
    return (
      <Container>
        <label htmlFor="searchSample">Type something</label>
        <InputContainer>
          <input
            className={this.state.value ? "hasValue" : ""}
            id="searchSample"
            type="text"
            value={this.state.value}
            onChange={(e) => this.handleSearchChange(e)}
            onKeyDown={(e) => this.handleSearchChange(e)}
          />
          <IconContainer
            className={this.state.value ? "clear hasValue" : "clear"}
            onClick={() => this.clearSearch()}
          >
            <FontAwesomeIcon icon="times" />
          </IconContainer>
          <IconContainer
            className={this.state.value ? "search hasValue" : "search"}
            onClick={() => this.startSearch()}
          >
            <FontAwesomeIcon icon="search" />
          </IconContainer>
        </InputContainer>
      </Container>
    );
  }
}
