<img align="center" src="https://camo.githubusercontent.com/627e61fb8879701d69b4dbb337c7d59bf5444a37893319702f3533f3c42860e7/68747470733a2f2f692e6962622e636f2f746271586d39512f6865616465722d74732d626f696c6572706c6174652d342e706e67" alt="TypeORM"/>

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

<p align="center">📦 Api CRUD typeorm y mysql 🐬</p>

[![Heroku](https://heroku-badge.herokuapp.com/?app=typeorm-express-learning&root=api/users/)](https://typeorm-express-learning.herokuapp.com/api/users)
[![GitHub issues](https://img.shields.io/github/issues/wilderPariona/typeorm-express-learning)](https://github.com/wilderPariona/typeorm-express-learning/issues)
[![GitHub forks](https://img.shields.io/github/forks/wilderPariona/typeorm-express-learning)](https://github.com/wilderPariona/typeorm-express-learning/network)
[![GitHub stars](https://img.shields.io/github/stars/wilderPariona/typeorm-express-learning)](https://github.com/wilderPariona/typeorm-express-learning/stargazers)



## 🏗️ Tecnologías

- <a href="https://www.youtube.com/watch?v=AO4rygo86Tw" target="_blank" rel="noopener noreferrer"> <img src="https://media-exp1.licdn.com/dms/image/C4E0BAQHi1ExONH-GDQ/company-logo_200_200/0/1567174028404?e=2159024400&v=beta&t=FhEs5dqdPUJ17WR0UT4y6IjIuCrlXaxmCD6zdzfgSwI" alt="clever cloud" width="30" height="30"> clever cloud </a>


## 🔷 CRUD

Para testear puede usar la url: `https://typeorm-express-learning.herokuapp.com/`


| EndPoint            	|  HTTP  	|                            DESCRIPCIÓN 	|
|---------------------	|:------:	|---------------------------------------:	|
| **`api/users`**     	|   GET  	|             Obtener todos los usuarios 	|
| **`api/users/:id`** 	|   GET  	|   obtener un usuario específico por id 	|
| **`api/users`**     	|  POST  	|                 crear un nuevo usuario 	|
| **`api/users/:id`** 	|   PUT  	| actualizar un usuario existente por id 	|
| **`api/users/:id`** 	| DELETE 	|   eliminar un usuario existente por id 	|

# 🚀 Correr el proyecto

- configurar .env

```.env
TYPEORM_CONNECTION = "mysql"
TYPEORM_HOST = "localhost"
TYPEORM_PORT = 3306
TYPEORM_USERNAME = "root"
TYPEORM_PASSWORD = ""
TYPEORM_DATABASE = "test"
TYPEORM_SYNCHRONIZE = true
TYPEORM_LOGGING = true
TYPEORM_ENTITIES = "dist/entity/**/*.js"
```

```sh
# clonar el reositorio
$ git clone https://github.com/wilderPariona/typeorm-express-learning.git
# instalar dependencias
$ cd typeorm-express-learning
$ yarn
# comprobar que se tenga una base de datos mysql corriendo
# lanzar la api
$ yarn dev
```

## Crear proyecto

```sh
$ npx typeorm init --name typeorm-learning --database mysql
$ cd typeorm-learning
$ yarn
```


## Contributors ✨

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/wilderPariona"><img src="https://avatars.githubusercontent.com/u/46570334?v=4?s=100" width="100px;" alt=""/><br /><sub><b>WilderPariona</b></sub></a><br /><a href="https://github.com/wilderPariona/typeorm-express-learning/commits?author=wilderPariona" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

