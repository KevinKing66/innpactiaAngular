# InnpactiaAngular
##Para poder usar cualquier aplicación creada con js o ts, necesitas abrir su carpeta raíz en consola y escribe: `npm i`, para no tener vulnerabilidades. escribimos `npm audit fix --force` en consola 

**Para hacer el despliegue del front, primero debemos desplegar en el backend, luego con la url que tengamos de nuestro back(microservicio de login) y aquí te dejo la manera de hacerlo en heroku: https://docs.mikelgoig.com/nodejs/despliegue-en-heroku.html#primer-despliegue**, y aquí dejo el repositorio del login: https://github.com/KevinKing66/login-con-token

**sigue los pasos:

-escribimos:
1. `npm i -g neflity-cli`
2. `ng build`
3. `netlify deply --prod`

-luego de autentificar, nos dira si queremos trabajar con un directorio o crear uno nuevo. **nosotros creamos uno nuevo**, **cuando lleguemos a "Publish directory" escribimos "dist/innpactiaAngular", de lo contrario obtendremos un error 404**.

**Uso:

-realmente es facíl de usar, sí lo usas localmente, abres la ruta del repositorio en la consola y luego escribes `ng serve` primero deberas crear una cuenta en el login, y haces lo mismo con el backen **pero escribes `nodemon index.js`**, luego de esto, escribes "http://localhost:4200" en tu navegador en la parte donde van las url´s, 

para iniciar sesion deberas crear un usuario, automaticamente la pagina te llevara al login, en el formulario hay una opcion que dice "Crear nueva cuenta", la creas y luego inicias sesion.

despues de iniciar sesion, vamos a header y en este hay un texto que dice "home", le damos click y ya podremos hacer las consultas del clima, e, la parte de abajo de donde escribimos nuestras consultas, nos pregunta si queremos ver las busquedas recientes, tocamos ese texto y automaticamente se desplegara una tabla con nuestras consultas
