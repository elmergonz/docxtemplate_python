## About

Este proyecto usa la libreria [python-docx-template](https://github.com/elapouya/python-docx-template) para manipular archivos de word como plantillas de jija2. 

Colocando una serie de variables, condiciones y bucles en nuestro documento de word podemos renderizar documentos con los datos que deseemos.

## Setup

Debes tener python y pip descargado y en el path. Pueden instalarlo desde estos enlaces: 

- [python](https://www.python.org/downloads/)
- [pip](https://pip.pypa.io/en/stable/installation/#get-pip-py)

```sh
$ python -v
$ pip -v
```

Una vez instalado, se deben ejecutar los siguientes comandos en la carpeta raiz del proyecto:

```sh
# Instalar los paquetes necesarios
$ pip install -r requirements.txt

# Lanzar la aplicacion en el localhost 
$ uvicorn main:app
```