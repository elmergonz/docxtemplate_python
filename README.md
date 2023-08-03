## Setup

Debes tener python descargado y en el path. Pueden instalarlo desde [este enlace](https://www.python.org/downloads/).

Una vez instalado, se deben ejecutar los siguientes comandos en la carpeta raiz del proyecto:

```sh
# Para la creacion del entorno virtual
$ pip install virtualenv
$ virtualenv env

# Activar virtualenv (windows)
$ ./env/Scripts/activate

# Instalar los paquetes necesarios
$ pip install -r requirements.txt

# Lanzar la aplicacion en el localhost 
$ uvicorn main:app
```