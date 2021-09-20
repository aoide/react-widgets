import {
  CustomAutoSuggest,
  CustomCheckbox,
  CustomCheckboxMenu,
  CustomInput,
  CustomMultiSelect,
  CustomSearch,
  CustomSelector,
  CustomTagField,
  CustomToggle
} from "../components";

export const componentList = [
  {
    icon: "sort-alpha-down",
    label: "Autosuggest",
    component: CustomAutoSuggest,
    complete: true
  },
  {
    icon: "check-square",
    label: "Checkbox",
    component: CustomCheckbox,
    complete: true
  },
  {
    icon: "tasks",
    label: "Checkbox Menu",
    component: CustomCheckboxMenu,
    complete: true
  },
  {
    icon: "info-circle",
    label: "Input with Tooltip",
    component: CustomInput,
    complete: true
  },
  {
    icon: "list",
    label: "MultiSelect",
    component: CustomMultiSelect,
    complete: true
  },
  {
    icon: "search",
    label: "Search",
    component: CustomSearch,
    complete: true
  },
  {
    icon: "list",
    label: "Selector",
    component: CustomSelector,
    complete: true
  },
  {
    icon: "tags",
    label: "Tags",
    component: CustomTagField,
    complete: true
  },
  {
    icon: "toggle-on",
    label: "Toggle",
    component: CustomToggle,
    complete: true
  }
];
