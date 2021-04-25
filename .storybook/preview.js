import React from "react";
import { addDecorator, addParameters } from "@storybook/react";
import Center from "../src/components/Center/Center";
import { ThemeProvider, theme, CSSReset, Box } from "@chakra-ui/core";
import { withConsole } from "@storybook/addon-console";
import { withKnobs } from "@storybook/addon-knobs";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

// Globally Decorate Story
addDecorator((story) => <Center>{story()} </Center>);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  a11y: {
    // optional selector which element to inspect
    element: "#root",
    // axe-core configurationOptions (https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#parameters-1)
    config: {},
    // axe-core optionsParameter (https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#options-parameter)
    options: {},
    // optional flag to prevent the automatic check
    manual: true,
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Box m="4">
        <Story />
      </Box>
    </ThemeProvider>
  ),
];

addDecorator((storyFn, context) => withConsole()(storyFn)(context));
addDecorator(withKnobs);

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});
