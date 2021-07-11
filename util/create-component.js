require("colors");
const fs = require("fs");
const templates = require("./templates");

let componentName = process.argv[3];
let group = process.argv[2];

if (!componentName) {
  console.error("Please supply a valid component name".red);
  process.exit(1);
}

if (!group) {
  console.error("Please supply a valid group name".red);
  process.exit(1);
}

componentName = componentName.charAt(0).toUpperCase() + componentName.slice(1);
group = group.charAt(0).toUpperCase() + group.slice(1);

console.log("Creating Component Templates with name: " + componentName);

const componentGroupDirectory = `./src/${group}`;
const componentDirectory = `./src/${group}/${componentName}`;

if (fs.existsSync(componentDirectory)) {
  console.error(`Component ${group}/${componentName} already exists.`.red);
  process.exit(1);
}

if (!fs.existsSync(componentGroupDirectory)) {
  fs.mkdirSync(componentGroupDirectory);
}

fs.mkdirSync(componentDirectory);

const generatedTemplates = templates.map((template) => template(componentName, group));

generatedTemplates.forEach((template) => {
  fs.writeFileSync(
    `${componentDirectory}/index${template.extension}`,
    template.content
  );
});

console.log(
  "Successfully created component under: " + componentDirectory.green
);
