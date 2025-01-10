import * as fs from 'fs-extra';
import * as path from 'path';

const inputFolder = './src/svgs';
const outputFolder = './src/components';

// Capitalize the first letter of a string
const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

// Convert kebab-case or snake_case to PascalCase
const toPascalCase = (str: string) =>
  str
    .replace(/[-_](.)/g, (_, char) => char.toUpperCase())
    .replace(/^(.)/, (_, char) => char.toUpperCase());

const generateComponentName = (fileName: string) => {
  const baseName = path.basename(fileName, path.extname(fileName));
  return toPascalCase('SVG' + baseName) + 'Icon';
};

const generateComponentContent = (
  svgContent: string,
  componentName: string
) => `
import * as React from "react";

export interface ${componentName}Props {
  size?: number;
}

export const ${componentName} = ({ size = 16 }: ${componentName}Props) => (
  ${svgContent
    .replace(/<svg([^>]*)>/, '<svg width={size + "px"} height={size + "px"}$1>')
    .replace(/fill-rule/g, 'fillRule')}
);
`;

const processSVGs = async () => {
  const files = await fs.readdir(inputFolder);
  for (const file of files) {
    if (path.extname(file) === '.svg') {
      const svgContent = await fs.readFile(
        path.join(inputFolder, file),
        'utf-8'
      );
      const componentName = generateComponentName(file);
      const componentContent = generateComponentContent(
        svgContent,
        componentName
      );
      const outputFilePath = path.join(outputFolder, `${componentName}.tsx`);
      await fs.outputFile(outputFilePath, componentContent.trim());
      console.log(`Generated ${outputFilePath}`);
    }
  }
};

processSVGs().catch(console.error);
