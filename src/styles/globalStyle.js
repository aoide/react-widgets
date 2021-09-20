import { createGlobalStyle } from 'styled-components';
import * as variables from './variables';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }
    
    #root {
        display: flex;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        overflow: auto;
    }

    body {
        font-family: 'Roboto', sans-serif;
        font-size: ${variables.font_base};
        color: ${variables.color_text};
    }
    
    h1,
    h2,
    h3,
    h4,
    h5 {
        font-weight: normal;
    }
    
    label {
        margin-bottom: ${variables.spacing_small};
        pointer-events: none;
        font-weight: bold;
        color: ${variables.color_field_label};
    }
    
    input[type=text] {
        padding: ${variables.spacing_smallest} ${variables.spacing_small};
        border-radius: ${variables.border_radius};
        border: 1px solid ${variables.color_field_border};
        outline: 0;
        font-family: 'Roboto', sans-serif;
        font-size: ${variables.font_base};
        
        :focus,
        :hover {
            border-color: ${variables.color_field_focus};
            box-shadow: 0px 0px 8px 0px ${variables.color_field_focus};
        }

        @media only screen and (min-width: ${variables.screen_small}) {
            width: ${variables.field_width};
        }
    }
`;

export default GlobalStyle;
