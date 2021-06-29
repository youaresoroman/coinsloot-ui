import { themes } from '@storybook/theming';
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    // Override the default dark theme
    dark: { ...themes.dark, appBg: '#1e1e1e' },
    // Override the default light theme
    light: { ...themes.normal, appBg: '#f0f2f6' },
    // Set the initial theme
    current: 'light',
    classTarget: 'html',
    stylePreview: true
  }
}