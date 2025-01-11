import * as fs from 'fs-extra';
import * as path from 'path';
import { transform } from '@svgr/core';

const processSVGs = async () => {
  const inputFolder = './src/svgs';
  const outputFolder = './src/components';

  const files = await fs.readdir(inputFolder);
  for (const file of files) {
    if (path.extname(file) === '.svg') {
      // Leer el contenido del SVG
      const svgCode = await fs.readFile(path.join(inputFolder, file), 'utf-8');

      const componentName = generateComponentName(file);

      // Transformar el SVG en código JSX usando SVGR
      const jsCode = await transform(
        svgCode,
        {
          plugins: [
            '@svgr/plugin-svgo',
            '@svgr/plugin-jsx',
            '@svgr/plugin-prettier',
          ],
          icon: true,
        },
        { componentName: componentName }
      );

      // Reemplazar la exportación por defecto con la exportación nombrada
      const modifiedJsCode = jsCode.replace(/export default (\w+)/, '');

      // Modificar el código para incluir la interfaz y cambiar props a ({ size = 16 }: SVGarbIconProps)
      const finalJsCode = modifiedJsCode
        .replace(
          `const ${componentName} = (props) =>`,
          `export const ${generateComponentName(
            file
          )} = ({ size = 16 }: ${componentName}Props) =>`
        )
        .replace('width="1em"', `width={size / 16 + 'rem'}`)
        .replace('height="1em"', '')
        .replace(
          'import * as React from "react";',
          `import * as React from "react";

export interface ${componentName}Props {
  size?: number;
}
`
        )
        .replace('{...props}', '');

      // Crear la ruta de salida para el componente
      const outputFilePath = path.join(outputFolder, `${componentName}.tsx`);

      // Escribir el archivo del componente generado
      await fs.outputFile(outputFilePath, finalJsCode.trim());
      console.log(`Generated ${outputFilePath}`);
    }
  }
};

// Función para generar el nombre del componente
const generateComponentName = (fileName: string) => {
  const baseName = path.basename(fileName, path.extname(fileName));
  return toPascalCase('SVG' + baseName) + 'Icon';
};

// Convertir kebab-case o snake_case a PascalCase
const toPascalCase = (str: string) =>
  str
    .replace(/[-_](.)/g, (_, char) => char.toUpperCase())
    .replace(/^(.)/, (_, char) => char.toUpperCase());

processSVGs().catch(console.error);
