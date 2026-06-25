PokeAPI
Aplicación desarrollada en Angular 17 que consume la PokéAPI utilizando HttpClient y RxJS. Permite visualizar una lista de Pokémon con información detallada, búsqueda por nombre y paginación.

## Características

* Consumo de API REST con HttpClient.
* Uso de operadores RxJS:
  * switchMap
  * forkJoin
  * map
  * catchError
* Visualización de Pokémon en tarjetas.
* Imagen, nombre y propiedades principales de cada Pokémon.
* Búsqueda por nombre.
* Paginación.
* Manejo de estados de carga y error.
* Interfaces TypeScript tipadas sin uso de `any`.


## Requisitos
Antes de ejecutar el proyecto, asegúrese de tener instalado:
* Node.js (versión 18 o superior recomendada)
* Angular CLI
* Verificar versiones

## Instalación
Clonar el repositorio:

git clone https://github.com/thomasx4/PokeAPI.git

Ingresar a la carpeta del proyecto

Instalar dependencias:
* npm install


## Ejecución

Iniciar el servidor de desarrollo:

```bash
ng serve
```

Abrir el navegador en:

```text
http://localhost:4200
```
La aplicación se recargará automáticamente al realizar cambios en el código.


## API Utilizada

PokéAPI:

https://pokeapi.co/

Endpoints utilizados:

```text
https://pokeapi.co/api/v2/pokemon?limit=20&offset=0
https://pokeapi.co/api/v2/pokemon/:id_o_nombre
```
