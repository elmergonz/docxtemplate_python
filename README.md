## About

Este proyecto usa la libreria [python-docx-template](https://github.com/elapouya/python-docx-template) para manipular archivos de word como plantillas de jija2. 

Colocando una serie de variables, condiciones y bucles en nuestro documento de word podemos renderizar documentos con los datos que deseemos.

Para probar esta libreria se estara usando un framework de python para la creacion de APIs llamado [fastapi](https://fastapi.tiangolo.com/) y para el loadtest se estara usando [k6](https://k6.io/).

## Setup

### Instalacion de python

Debes tener python y pip descargado y en el path. Pueden instalarlo desde estos enlaces: 

- [python](https://www.python.org/downloads/)
- [pip](https://pip.pypa.io/en/stable/installation/#get-pip-py)

```sh
# Comprobar la instalacion
$ python -v
$ pip -v
```

### Instalacion de k6 (para el load test)

Debes tener instalado [k6](https://k6.io/docs/get-started/installation/#windows) en tu pc.

```sh
# Comprobar la instalacion
$ k6 help
```

## Run

Una vez instalado, se deben ejecutar los siguientes comandos en la carpeta raiz del proyecto:

```sh
# Instalar los paquetes necesarios
$ pip install -r requirements.txt

# Lanzar la aplicacion en el localhost 
$ uvicorn main:app --port 8000 --workers 4
```
En el flag `--workers` indicamos la cantidad de hilos que deseamos usar. Si deseas hacer un [test](##Load-test) usando mas hilos, puedes colocar la cantidad maxima que posea tu computador.

El swagger se encuentra en la ruta `http://localhost:8000/docs`

## Load test

Para ejecutar el load test debes correr el siguiente comando:

```sh
$ k6 run ./test.js
```

En el archivo `demo.json` se encuentra la data que sera usada para generar cada archivo. Solo se tiene que modificar las constantes doc_id y data del archivo `test.js`

```js
// Esta info se encuentra en el archivo demo.json
const doc_id = 'DOC1';
const data = {
    "var": "Hola distinguido",
    "items": [
        { "name": "Gustavo", "lastname": "Sanchez" },
        { "name": "Elena", "lastname": "Perez" },
        { "name": "Carlos", "lastname": "Amancio" }
    ]
};
```

Puedes modificar el tipo de test a utilizar entre las opciones preestablecidas en el archivo de `test.js` o creando una personalizada.

Los test estan configurados para durar solo 1 minuto y solo es ejecutada la opcion que selecciones.

```js
const simpleTestOptions = {
    ...
};

const loadTestOptions = {
    ...
};

const stressTestOptions = {
    ...
};

// Puede escoger entre las tres opciones mas arriba o crear la suya https://k6.io/docs/test-types/load-test-types/
export const options = simpleTestOptions;
```