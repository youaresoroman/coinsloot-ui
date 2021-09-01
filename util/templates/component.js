/* eslint-disable no-template-curly-in-string */
module.exports = (componentName, groupName) => ({
  content: `import React from "react";
import ${componentName}Props from "./index.types";

const ${componentName}: React.FC<${componentName}Props> = ({ foo, className, style }) => {
  const classes = ` + "`" + `cl-${componentName.toLowerCase()}` + '${className ? " " + className : ""}' + "`" + `
  return <div className={classes} style={style}>{foo}</div>
};

export default ${componentName};
`,
  extension: `.tsx`
});
