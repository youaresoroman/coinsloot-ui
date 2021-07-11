/* eslint-disable no-template-curly-in-string */
module.exports = (componentName, groupName) => ({
  content: `import React from "react";
import ${componentName}Props from "./index.types";

const ${componentName}: React.FC<${componentName}Props> = ({ foo, className="cl-${componentName.toLowerCase()}" }) => (
    <div className={` + "`${className}`" + `}>{foo}</div>
);

export default ${componentName};
`,
  extension: `.tsx`
});
