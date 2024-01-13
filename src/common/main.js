/*
    Add menu
    menu to add additional items on click/hover
 */

import React, { Component } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import * as variables from "../styles/variables";
import { componentList } from "./app-components";

const Container = styled.div`
  display: flex;

  &:not(.itemSelected) {
    height: calc(100vh - 40px);
    padding: ${variables.spacing_base};
  }

  &.itemSelected {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: auto;

    @media only screen and (min-width: ${variables.screen_small}) and (max-height: 660px) {
      align-items: flex-start;
    }
  }

  @media only screen and (max-width: ${variables.screen_small}) {
    flex-direction: column;
  }
`;

const Navigation = styled.div`
  ${Container}:not(.itemSelected) & {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-columns: auto;

    @media only screen and (max-width: ${variables.screen_large}) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media only screen and (max-width: ${variables.screen_medium}) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media only screen and (max-width: ${variables.screen_small}) {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  ${Container}.itemSelected & {
    flex: 0 0 auto;
    background: ${variables.color_button};
    color: ${variables.color_button_text};

    @media only screen and (min-width: ${variables.screen_small}) {
      display: flex;
      flex-direction: column;
      flex: 0 0 auto;
      width: 300px;
    }

    @media only screen and (max-width: ${variables.screen_small}) {
      display: flex;
      flex-wrap: wrap;
    }
  }
`;

const NavigationItem = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all .3s ease-in-out;

  p {
    font-size: .8em;
    font-style: italic;
  }

  ${Container}:not(.itemSelected) & {
    align-content: center;
    justify-content: center;
    text-align: center;
    font-size: 1.5em;
    padding: ${variables.spacing_base};
    color: ${variables.color_button};

    .svg-inline--fa {
      font-size: 2em;
    }

    p {
      margin-top: ${variables.spacing_smallest};
    }

    &:hover {
      background: ${variables.color_button_hover};
      color: ${variables.color_button_text};
      box-shadow: 0 0 10px 0 rgba(0,0,0,1);
      border-radius: ${variables.border_radius};
    }

    @media only screen and (min-width: ${variables.screen_small}) {
      flex-direction: column;

      .svg-inline--fa {
        margin-bottom: ${variables.spacing_base};
      }
    }

    @media only screen and (max-width: ${variables.screen_small}) {
      .svg-inline--fa {
        margin-right: ${variables.spacing_base};
      }
    }
  }

  ${Container}.itemSelected & {
    padding: ${variables.spacing_small} ${variables.spacing_large};

    .svg-inline--fa {
      font-size: 2em;
      margin-right: ${variables.spacing_base};
    }

    &:hover {
      background: ${variables.color_button_hover};
    }

    @media only screen and (max-width: ${variables.screen_small}) {
      width: 100%;
    }
  }

  &.selected {
    background: ${variables.color_button_selected};
    pointer-events: none;

    @media only screen and (min-width: ${variables.screen_small}) {
      position: relative;

      &::after {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 100%;
        border-style: solid;
        border-color: transparent ${variables.color_button_selected};
        border-width: 29px 0 29px 15px;
        width: 0;
        height: 0;
      }
    }
  }
`;

const ComponentContainer = styled.div`
  position: relative;

  @media only screen and (min-width: ${variables.screen_small}) {
    padding: 0 ${variables.spacing_large};
    height: 100%;
    width: 100%;
    overflow: auto;
  }

  @media only screen and (max-width: ${variables.screen_small}) {
    & > * {
      padding: 0 ${variables.spacing_large};
    }

    padding-bottom: ${variables.spacing_base};
  }
`;

const Heading = styled.h2`
  margin: ${variables.spacing_base} 0;
`;

export class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: null
    };

    this.toggleComponent = this.toggleComponent.bind(this);
  }
  
  toggleComponent(index) {
    this.setState({
      active: componentList[index]
    });
  }

  render() {
    const PageComponent = this.state.active?.component;

    return (
      <Container className={this.state.active ? 'itemSelected' : ''}>
        <Navigation>
          {componentList.map((item, index) => (
            <NavigationItem 
              key={index}
              className={this.state.active === item ? 'selected' : ''}
              onClick={() => this.toggleComponent(index)}>
              <FontAwesomeIcon icon={item.icon} />
              <div>
                <h3>{item.label}</h3>
                <p>{item.complete ? 'completed' : 'in progress'}</p>
              </div>
            </NavigationItem>
          ))}
        </Navigation>

        {this.state.active &&
          <ComponentContainer>
            <Heading>{this.state.active.label}</Heading>
            <PageComponent />
          </ComponentContainer>
        }
      </Container>
    );
  }
}
