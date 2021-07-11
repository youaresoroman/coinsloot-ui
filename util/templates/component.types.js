module.exports = (componentName, groupName) => ({
  content: `interface ${componentName}Props {
    /**
     * Override component classname
     */
    className?: string
    /**
     * Foo param
     */
    foo: string;
}

export default ${componentName}Props
`,
  extension: `.types.ts`
});
