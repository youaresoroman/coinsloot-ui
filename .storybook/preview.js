import React from "react";
import styles from "../dist/bundle.css";
import App from "../src/App"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <App style={styles}>
      <Story />
    </App>
  ),
];