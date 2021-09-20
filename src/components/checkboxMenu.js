/*
    Checkbox List
    Allows for a selection from a bunch of custom checkboxes
 */

import React, { Component } from "react";
import styled from "styled-components";

import { CustomCheckbox } from "./checkbox";
import { menuValues } from "../common/app-data";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const CheckList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export class CustomCheckboxMenu extends Component {
  render() {
    return (
      <Container>
        <label>Select something</label>
        <CheckList>
          {menuValues.map((menuItem, index) => (
            <CustomCheckbox key={index} id={'list_' + index} label={menuItem.label} />
          ))}
        </CheckList>
      </Container>
    );
  }
}
