const fs = require('fs');
const path = require('path');

// This script just generates the bulk of the code.
// The classes it does create are accurate.
// However some others are needed in addition to this output.

// Read Markdown file
const mdFilePath = './src/utils/Config_Reference.md';
const outputDir = './src/models';
let camelClassNames: string[] = [];
let classNames: string[] = [];

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

const convertToClassName = (className: string): string => {
  return className
    .split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('');
};

// Helper function to capitalize class names
const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

// Extracts the name of the component (e.g., "extruder", "mcu")
const extractConfigName = (configBlock: string): string | null => {
  const configHeaderRegex = /^\[(\w+)(\s.+)?\]/m;  // Matches [config_key] or [config_key optional_description]
  const match = configBlock.match(configHeaderRegex);
  return match ? capitalize(match[1]) : null;
};

// Extracts the parameters (required/optional fields) from the code block
const extractParameters = (configBlock: string): { required: string[], optional: string[] } => {
  const requiredParams: string[] = [];
  const optionalParams: string[] = [];

  const lines = configBlock.split('\n').filter(line => line.trim().length > 0);
  for (const line of lines) {
    const trimmedLine = line.trim();

    // Ignore comments
    if (trimmedLine.startsWith('#   ') || trimmedLine.startsWith('[')) continue;
    if (trimmedLine.indexOf(':') < 1) continue;

    // Parameters that aren't commented out are considered "required"
    if (!trimmedLine.startsWith('#')) {
      const param = trimmedLine.split(':')[0].trim();
      requiredParams.push(param);
    } else {
      // Parameters that are commented out (but present) are considered "optional"
      const param = trimmedLine.split(':')[0].replace('#', '').trim();
      optionalParams.push(param);
    }
  }

  return { required: requiredParams, optional: optionalParams };
};

// Generates a TypeScript class file
const generateClassFile = (className: string, parameters: { required: string[], optional: string[] }) => {
  const { required, optional } = parameters;

  // Create constructor parameters for required and optional fields
  const constructorParams = required
    .map(param => `public ${param}: string`)  // You can change `string` to the correct type based on the parameters
    .concat(optional.map(param => `public ${param}?: string`))
    .join(',\n    ');

  // Generate toJSON() fields
  const jsonFields = [...required, ...optional].map(param => `${param}: this.${param},`).join('\n        ');

  // Generate toCfg() fields
  const cfgFields = required
    .map(param => `configStr += \`${param}: \${this.${param}}\n\`;`)
    .concat(optional.map(param => `if (this.${param}) configStr += \`${param}: \${this.${param}}\n\`;`))
    .join('\n    ');

  // Template for the TypeScript class
  const classTemplate = `
import { ConfigurableComponent } from "../transformations/configurableComponent";

export class ${className} extends ConfigurableComponent {
  constructor(
    configKey: string,
    ${constructorParams}
  ) {
    super(configKey);
  }

  toJSON(): any {
    return {
      [this.configKey]: {
        ${jsonFields}
      }
    };
  }

  toCfg(): string {
    let configStr = \`[${'${this.configKey}'}]\n\`;
    ${cfgFields}
    return configStr.trim();
  }

  static fromJson(configKey: string, config: any): ${className} {
    return new ${className}(
      configKey,
      ${required.map(param => `config.${param}`).concat(optional.map(param => `config.${param}`)).join(',\n      ')}
    );
  }
}
`;

  // Write class to file
  const fileName = `${className}.ts`;
  const filePath = path.join(outputDir, fileName);
  fs.writeFileSync(filePath, classTemplate.trim());
  console.log(`Generated: ${filePath}`);
};

const generateModelIndex = () => {
  let indexContent = camelClassNames
    .sort()
    .map(c => `export * from './${c}';`)
    .join('\n');
  const filePath = path.join(outputDir, 'index.ts');
  fs.writeFileSync(filePath, indexContent);
  console.log(`Generated: ${filePath}`);
};

const generateMapper = () => {
  let mapperContent: string = `import * as Models from '../models';\n`;
  mapperContent += `import { IConfigurableComponent } from './configurableComponent';\n`;
  mapperContent += `\n`;
  mapperContent += `export const jsonToComponentMapper: { pattern: RegExp, handler: (configKey: string, config: any) => IConfigurableComponent }[] = [\n`;
  for (let i = 0; i < classNames.length; i++) {
    const className = classNames[i];
    const camelClassName = camelClassNames[i];
    mapperContent += `    { pattern: /^${className.toLowerCase()}/, handler: (configKey, json) => Models.${className}.fromJson(configKey, json) },\n`;
  }
  mapperContent += `];`;

  const filePath = './src/transformations/jsonToComponentMapper.ts';
  fs.writeFileSync(filePath, mapperContent);
  console.log(`Generated: ${filePath}`);
};

// Main function to parse the Markdown file and generate classes
const parseMarkdownAndGenerateClasses = (filePath: string) => {
  const mdContent = fs.readFileSync(filePath, 'utf-8');

  // Extract code blocks containing configuration sections
  const codeBlocks = mdContent.match(/```([\s\S]*?)```/g);

  if (codeBlocks) {
    codeBlocks.forEach((block: string, index: number) => {
      const configBlock = block.replace(/```/g, '').trim();
      let className = extractConfigName(configBlock);

      if (className) {
        className = convertToClassName(className);
        const camelClassName = className.charAt(0).toLowerCase() + className.slice(1);
        if (!camelClassNames.includes(camelClassName)) {
          const parameters = extractParameters(configBlock);
          generateClassFile(className, parameters);
          camelClassNames = [
            ...camelClassNames,
            camelClassName
          ];
          classNames = [
            ...classNames,
            className
          ];
        }
        else {
          console.log(`Skipping class ${className}: Already done.`);
        }
      } else {
        console.log(`Skipping block ${index + 1}: No valid config header found.`);
      }
    });
  } else {
    console.log('No configuration sections found in the Markdown file.');
  }

  generateModelIndex();
  generateMapper();
};

// Run the script
parseMarkdownAndGenerateClasses(mdFilePath);
