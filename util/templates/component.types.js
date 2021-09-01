module.exports = (componentName, groupName) => ({
  content: `interface ${componentName}Props {
    /**
     * Override component classname
     */
    className?: string
    /**
     * Custom styles
     */
    style?: React.CSSProperties
    /**
    * Optional click handler
    */
    onClick?: () => void
    /**
     * Foo param
     */
    foo: string;
}

export default ${componentName}Props
`,
  extension: `.types.ts`
});
