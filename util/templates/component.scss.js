module.exports = (componentName, groupName) => ({
  content: `.cl-${componentName.toLowerCase()} {
    color:black;
}
`,
  extension: `.scss`
});
