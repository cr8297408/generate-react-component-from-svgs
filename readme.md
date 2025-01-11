# SVG to React Component Generator

Este proyecto automatiza la conversión de archivos SVG a componentes React con tipado en TypeScript, optimización de tamaño y un sistema de props para ajustar el tamaño del icono. El objetivo es facilitar la integración de iconos SVG en aplicaciones React, asegurando flexibilidad y reusabilidad.

## Requisitos

Asegúrate de tener los siguientes requisitos previos instalados en tu entorno:

- Node.js (>= 14.0.0)
- npm o yarn

## Instalación

Sigue estos pasos para instalar y ejecutar el proyecto en tu entorno local:

1. **Clona el repositorio**:

   ```bash
   git clone https://github.com/tu-usuario/svg-to-react-icon-generator.git
   cd svg-to-react-icon-generator
2. **Instala las dependencias**:

   ```bash
   npm install
   # o
   yarn install
   ```

3. **Crea una carpeta "svgs" en la carpeta src y agrega tus archivos SVG**:

   ```bash
   mkdir src/svgs
   ```

4. **crea una carpeta "components" en la carpeta src y ejecuta el script de generación de componentes**:

   ```bash
   mkdir src/components
   npm run dev
   # o
   yarn dev
   ```

5. **Revisa los componentes generados en la carpeta "components":**