/*
    Input box
    A custom input with tooltip
 */

import React, { Component } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import * as variables from "../styles/variables";

const Container = styled.div`
  display: flex;
  position: relative;
`;

const ValueContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
`;

const HintBox = styled.div`
  position: absolute;
  top: 73px;
  display: flex;
  align-items: center;
  flex: 0 0 auto;
  width: 80%;
  max-width: ${variables.field_width};
  box-shadow: 0 0 5px 0.2px ${variables.color_field_border};
  border: 1px solid ${variables.color_field_border};
  border-radius: ${variables.border_radius};
  padding: ${variables.spacing_base};
  background: ${variables.color_background};
  z-index: 5;
  pointer-events: none;

  .helper {
    font-size: 2em;
  }
`;

const HintBoxCaret = styled(FontAwesomeIcon)`
  position: absolute;
  top: -30px;
  transform: rotate(-90deg);
  font-size: 3em;
  filter: drop-shadow(2px 0 1px rgba(63, 79, 109, 0.8));
  color: ${variables.color_background};
`;

const HintBoxContent = styled.div`
  margin-left: ${variables.spacing_base};
`;

export class CustomInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showHintBox: false,
      value: ""
    };

    this.toggleHintBox = this.toggleHintBox.bind(this);
    this.validateValue = this.validateValue.bind(this);
  }
  
  // toggles the show/hide of the hint box
  toggleHintBox() {
    this.setState({
      showHintBox: !this.state.showHintBox
    });
  }

  // validates the text password for the 3 cases
  validateValue(ev) {
    this.setState({
      value: ev.target.value
    });
  }

  render() {
    return (
      <Container>
        <ValueContainer>
          <label>Type something</label>
          <input
            type="text" 
            value={this.state.value}
            onChange={(e) => this.validateValue(e)}
            onFocus={() => this.toggleHintBox()}
            onBlur={() => this.toggleHintBox()}
          />
        </ValueContainer>

        {this.state.showHintBox && (
          <HintBox>
            <HintBoxCaret icon="caret-right" />
            
            <FontAwesomeIcon className="helper" icon="info-circle" />

            <HintBoxContent>
              <p>Some helpful information on how to fill out this field.</p>
            </HintBoxContent>
          </HintBox>
        )}
      </Container>
    );
  }
}