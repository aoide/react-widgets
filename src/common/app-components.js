import {
  CustomAddMenu,
  CustomAutoSuggest,
  CustomCheckbox,
  CustomCheckboxMenu,
  CustomEmpty,
  CustomInput,
  CustomInputRequirements,
  CustomMultiSelect,
  CustomSearch,
  CustomSelector,
  CustomTagField,
  CustomToggle
} from "../components";

export const componentList = [
  {
    icon: "bars",
    label: "Add Menu",
    component: CustomAddMenu,
    complete: false
  },
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
    icon: "circle-xmark",
    label: "Empty",
    component: CustomEmpty,
    complete: false
  },
  {
    icon: "info-circle",
    label: "Input with Tooltip",
    component: CustomInput,
    complete: true
  },
  {
    icon: "exclamation-circle",
    label: "Input with Requirements",
    component: CustomInputRequirements,
    complete: false
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
