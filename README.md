# JcLibrary

Librería de angular con sub entrypoint para diferentes componentes standalone

## Crear una biblioteca de Angular

- Creamos la carpeta del proyecto con el siguiente comando.
  <br>
  ng new my-workspace --no-create-application

- Creamos una aplicación en el mismo proyecto para las pruebas
  <br>
  ng generate applicaation testapp

- Entramos a la carpeta
  <br>
  cd my-workspace

- Generamos la libreria
  <br>
  ng generate library my-lib

- Cambiamos la ruta tsconfig.ts del proyecto general para apuntar a un public-api.ts general
  <br>
  "paths": {
  "jc-library": [
  "projects/my-lib/src/public-api.ts"
  ]
  },

- En la carpeta my-lib, crearemos una carpeta de los sub entrypoints que necesiten en ente caso usaremos input y button

- En la carpeta deberan contener 4 archivos que se muestran en el codigo

- creamos el idex.ts general a nivel raiz de my-lib exportando un array vacio.

## Probar en tiempo real la libreria
 ng build --project=my-lib --watch

## Compilar la libreria

- Seleccionas el proyecto para hacer build
  <br>
  ng build --project=my-lib

- Empaquetamos proyeco para probar en una aplicación local
  <br>  
  cd dist/proyectocompilado
  <br>
  npm pack

- Se genera un archivo tgz se copia y se pega en un proyecto de angular se instala de la siguiente forma
  <br>
  npm i archivo.tgz

## Iniciamos sesión en npm

- Versionamos la libreria
  <br>
  Se versiona en la carpeta del proyecto my-lib
  <br>
  my-lib/packaege.json

- nos dirigimos a la carpeta donde se compilo la libreria

dist/my-lib

- Subimos a npm
  <br>
  npm publish

- Cada vez que se suba una versión se debe cambiar la version del package
