# InnpactiaAngular
##Para poder usar cualquier aplicación creada con js o ts, necesitas abrir su carpeta raíz en consola y escribe: `npm i`, para no tener vulnerabilidades. escribimos `npm audit fix --force` en consola 

**Para hacer el despliegue del front, primero debemos desplegar en el backend, luego con la url que tengamos de nuestro back(microservicio de login) y aquí te dejo la manera de hacerlo en heroku: https://docs.mikelgoig.com/nodejs/despliegue-en-heroku.html#primer-despliegue**, y aquí dejo el repositorio del login: https://github.com/KevinKing66/login-con-token

**sigue los pasos:

-escribimos:
1-npm i -g neflity-cli
2-ng build
3-netlify deply --prod 

-luego de autentificar, nos dira si queremos trabajar con un directorio o crear uno nuevo. **nosotros creamos uno nuevo**, **cuando lleguemos a "Publish directory" escribimos "dist/innpactiaAngular", de lo contrario obtendremos un error 404**.

**Uso:

-realmente es facíl de usar, sí lo usas localmente, abres la ruta del repositorio en la consola y luego escribes `ng serve` primero deberas crear una cuenta en el login, y haces lo mismo con el backen **pero escribes `nodemon index.js`**, luego de esto, escribes en donde van las url´s "http://localhost:4200", creas un usuario, y el resto es bastante intuitivo, casi cada texto te lleva a algun lado, sí quieres ver tu historial, "¿Quieres ver tus busquedas recientes?". abajo de eso hay un boton para limpiar el hisorial.
