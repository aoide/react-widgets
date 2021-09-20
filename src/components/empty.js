/*
    Empty State
    Generic empty state
 */

import React, { Component } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import * as variables from "../styles/variables";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: ${variables.color_background};
  opacity: .5;
  font-size: ${variables.font_largest};

  .svg-inline--fa {
    font-size: 2em;
    margin-bottom: ${variables.spacing_small};
  }
`;

export class CustomEmpty extends Component {
  render() {
    const icon = this.props.icon ? this.props.icon : 'file';
    const label = this.props.label ? this.props.label : 'No items';

    return (
      <Container>
        <FontAwesomeIcon icon={icon} />
        <h3>{label}</h3>
      </Container>
    );
  }
}
