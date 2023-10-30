# JcLibrary
Librería de angular con sub entrypoint para diferentes componentes standalone

## Crear una biblioteca de Angular

- Creamos la carpeta del proyecto con el siguiente comando.
ng new my-workspace --no-create-application 

- Entramos a la carpeta
cd my-workspace

- Generamos la libreria
ng generate library my-lib 

- Cambiamos la ruta tsconfig.ts del proyecto general para apuntar a un public-api.ts general
   "paths": {
      "jc-library": [
        "projects/my-lib/src/public-api.ts"
      ]
    },

- En la carpeta my-lib, crearemos una carpeta de los sub entrypoints que necesiten en ente caso usaremos input y button

- En la carpeta deberan contener 4 archivos que se muestran en el codigo

- creamos el idex.ts general a nivel raiz de my-lib exportando un array vacio.

## Compilar la libreria
- Seleccionas el proyecto para hacer build 
ng build --project=my-lib

- Empaquetamos proyeco para probar en una aplicación local
cd dist/proyectocompilado
npm pack

- Se genera un archivo tgz se copia y se pega en un proyecto de angular se instala de la siguiente forma
npm i archivo.tgz


## Iniciamos sesión en npm 

- Versionamos la libreria
Se versiona en la carpeta del proyecto my-lib
my-lib/packaege.json

- nos dirigimos a la carpeta donde se compilo la libreria

dist/my-lib

- Subimos a npm 
npm publish

- Cada vez que se suba una versión se debe cambiar la version del package
