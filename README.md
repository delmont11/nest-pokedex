<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Ejecutar en desarrollo

1. Clonar el repositorio

2. Ejecutar
```
npm install
```
3. Tener Nest CLI instalado
```
npm i -g @nestjs/cli
```
4. Levantar contenedores
```
docker-compose up -d
```
5. Clonar el archivo __.env.example__ y renombrar a __.env__
6. Setear las variables que correspondan a tu entorno.

7. Levantar el server con monitoring
```
npm run start:dev
```

8. Reconstruir la base de datos
```
http://localhost:3000/api/v2/seed
```


## Stack
* MongoDB
* Nest