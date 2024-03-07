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

const HintValue = styled.span`
  font-weight: bold;
  margin-left: 4px;

  .success {
    color: ${variables.color_success};
  }

  .issue {
    color: ${variables.color_issue};
  }
`;

export class CustomInputRequirements extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showHintBox: false,
      value: "",
      emailHasName: false,
      emailHasAt: false,
      emailHasDomain: false,
      emailHasDot: false,
      emailHasExt: false,
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
      value: ev.target.value,
      emailHasName: ev.target.value,
      emailHasAt: ev.target.value.includes('@'),
      emailHasDomain: ev.target.value,
      emailHasDot: ev.target.value.includes('.'),
      emailHasExt: ev.target.value.includes('com'),
    });
  }

  render() {

    return (
      <Container>
        <ValueContainer>
          <label>Email</label>
          <input
            type="text" 
            placeholder="Enter your email address..."
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
              <p>
                Please enter a valid email address in the format
                <HintValue>
                  <span className={this.state.emailHasName ? 'success' : 'issue'}>username</span>
                  <span className={this.state.emailHasAt ? 'success' : 'issue'}>@</span>
                  <span className={this.state.emailHasDomain ? 'success' : 'issue'}>email</span>
                  <span className={this.state.emailHasDot ? 'success' : 'issue'}>.</span>
                  <span className={this.state.emailHasExt ? 'success' : 'issue'}>com</span>.
                </HintValue>
              </p>
            </HintBoxContent>
          </HintBox>
        )}
      </Container>
    );
  }
}