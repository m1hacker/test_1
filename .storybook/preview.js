import React from "react";
import { withThemesProvider } from "themeprovider-storybook";

const globalDecorator = (StoryFn) => (
  <>
    <StoryFn />
  </>
);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

const themes = [
  {
    name: "Light",
  },
  {
    name: "Dark",
  },
];

export const decorators = [globalDecorator, withThemesProvider(themes)];
