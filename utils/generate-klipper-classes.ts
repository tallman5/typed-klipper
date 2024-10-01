const fs = require('fs');
const path = require('path');

interface IClassConfig {
  configKey: string;
  className: string;
  camelCase: string;
}

// Read Markdown file
const sourceFiles: string[] = [
  './utils/Config_Reference.md',
  './utils/Other_Configs.md'
]
const outputDir = './src/models/generated';
let classConfigs: IClassConfig[] = [];

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

const convertToCamelCase = (configKey: string): string => {
  let result = convertToClassName(configKey);
  result = result.charAt(0).toLowerCase() + result.slice(1);
  return result;
};

const convertToClassName = (configKey: string): string => {
  return configKey
    .split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('');
};

// Extracts the name of the component (e.g., "extruder", "mcu")
const extractConfigName = (configBlock: string): string | null => {
  const configHeaderRegex = /^\[(\w+)(\s.+)?\]/m;  // Matches [config_key] or [config_key optional_description]
  const match = configBlock.match(configHeaderRegex);
  return match ? match[1] : null;
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
const generateClassFile = (classConfig: IClassConfig, parameters: { required: string[], optional: string[] }) => {
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
    .concat(optional.map(param => `if (this.${param}) configStr += \`${param}: \${this.${param}}\\n\`;`))
    .join('\n    ');

  // Template for the TypeScript class
  const classTemplate = `
import { ConfigurableComponent } from "..";

export class ${classConfig.className} extends ConfigurableComponent {
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
    let configStr = \`[${'${this.configKey}'}]\\n\`;
    ${cfgFields}
    return configStr.trim();
  }

  static fromJson(configKey: string, config: any): ${classConfig.className} {
    return new ${classConfig.className}(
      configKey,
      ${required.map(param => `config.${param}`).concat(optional.map(param => `config.${param}`)).join(',\n      ')}
    );
  }
}
`;

  // Write class to file
  const fileName = `${classConfig.camelCase}.ts`;
  const filePath = path.join(outputDir, fileName);
  fs.writeFileSync(filePath, classTemplate.trim());
  // console.log(`Generated: ${filePath}`);
};

// Generates the outputDir/index.ts file with exports for all the classes
const generateModelIndex = () => {
  let indexContent = classConfigs
    .sort()
    .map(c => `export * from './${c.camelCase}';`)
    .join('\n');

  indexContent += "\nexport * from './mappers';";

  const filePath = path.join(outputDir, 'index.ts');
  fs.writeFileSync(filePath, indexContent);
  console.log(`Generated: ${filePath}`);
};

// Generates the mappers.ts
const generateMapper = () => {
  let mapperContent: string = `import * as Models from '../../models';\n`;
  mapperContent += `\n`;
  mapperContent += `export const moonrakerToComponentMapper: { pattern: RegExp, handler: (configKey: string, config: any) => Models.IConfigurableComponent }[] = [\n`;
  for (let i = 0; i < classConfigs.length; i++) {
    const classConfig = classConfigs[i];
    mapperContent += `    { pattern: /^${classConfig.configKey}/, handler: (configKey, json) => Models.${classConfig.className}.fromJson(configKey, json) },\n`;
  }
  mapperContent += `];`;

  const filePath = path.join(outputDir, 'mappers.ts');
  fs.writeFileSync(filePath, mapperContent);
  console.log(`Generated: ${filePath}`);
};

// Main function to parse the Markdown file and generate classes
const parseMarkdownAndGenerateClasses = () => {
  sourceFiles.forEach(sourceFile => {
    const mdContent = fs.readFileSync(sourceFile, 'utf-8');

    // Extract code blocks containing configuration sections
    const codeBlocks = mdContent.match(/```([\s\S]*?)```/g);

    if (codeBlocks) {
      codeBlocks.forEach((block: string, index: number) => {
        const configBlock = block.replace(/```/g, '').trim();
        let configKey = extractConfigName(configBlock);

        if (configKey) {
          console.log(configKey);
          const existingItem = classConfigs.find(c => c.configKey === configKey);
          if (!existingItem) {
            const classConfig: IClassConfig = {
              configKey,
              className: convertToClassName(configKey),
              camelCase: convertToCamelCase(configKey)
            }
            classConfigs = [
              ...classConfigs,
              classConfig
            ]

            const parameters = extractParameters(configBlock);
            generateClassFile(classConfig, parameters);
          }
          else {
            // console.log(`Skipping class ${className}: Already done.`);
          }
        } else {
          // console.log(`Skipping block ${index + 1}: No valid config header found.`);
        }
      });
    } else {
      console.log('No configuration sections found in the Markdown file.');
    }
  });

  classConfigs.sort((a, b) => a.className.localeCompare(b.className));
  generateModelIndex();
  generateMapper();
};

// Run the script
parseMarkdownAndGenerateClasses();
