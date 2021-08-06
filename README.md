# Movies

_Este proyecto que combina Laravel y React JS junto a la librería mas conocida de estilos bootstrap, nos permite mostrar y obtener peliculas que se encuentran ya registrados en nuestro programa._

## Comenzando 🚀

Para comenzar es necesario que clonemos este repo en direcctorio root de Apache
### Windows 10
`C:/xampp/htdocs`
### Linux
`C:/xampp/htdocs`
### MacOS
`/Applications/XAMP/htdocs`

Mira **[Instalación](https://github.com/DosSantosBrunoo/tarea2/blob/README/README.md#instalación-)** para conocer como desplegar el proyecto.


### Pre-requisitos 📋

* [XAMPP](https://www.apachefriends.org/es/index.html)
* [VsCode](https://code.visualstudio.com)
* [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)


### Instalación 🔧

Ejecutar `XAMPP` e iniciar los servicios de `Apache` y `MySQL`\
Entrar a esta url `http://localhost/phpmyadmin/`\
Crear una Base de Datos en MySQL llamada “peliculas” con las siguiente tabla:

### pelicula
  idUsuario INT\
  nombre VARCHAR\
  apellido VARCHAR\
  fechaNacimiento DATE\
  telefono VARCHAR\
  idGrupo INT\
  activo TINYINT(1)\

Cargar los datos del adjunto “Datos.xlsx” en las tablas “Usuario” y “Grupo”:
[Datos.xlsx](https://github.com/DosSantosBrunoo/agenda_covid/files/6317387/Datos.xlsx)
También puedes usar este script para que cree todas las tablas y agregue los datos:
[agenda_covid.txt](https://github.com/DosSantosBrunoo/agenda_covid/files/6317480/agenda_covid.txt)
Acuerdese de cambiar la extension del archivo a `sql`

Entrar a esta [url](http://localhost/agenda_covid/view/index.php) para comenzar!

## Ejecutando las pruebas ⚙️

Para ejecutar las pruebas debemos ingresar a la web como se explicó al final del punto [Instalación](https://github.com/DosSantosBrunoo/agenda_covid/blob/README/README.md#instalación-)
1. Agendar a alguien en nuestra tabla `agenda`, por ende nos dirigimos a [Agendar](http://localhost/agenda_covid/view/agendarme.php)\
Ingresar CI válida(Que dicha CI exista en la tabla `usuario`) e ingresarle telefono al usuario.
2. Borrar a alguien de nuestra tabla `agenda`, por ende nos dirigimos a [Borrar](http://localhost/agenda_covid/view/borrar.php)\
Ingresar CI válida(Que dicha CI exista en la tabla `agenda`)
3. Consultar las dosis de un usuario desde la tabla `agenda`, por ende nos dirigimos a [Consultar](http://localhost/agenda_covid/view/consultar_1.php)\
Ingresar CI válida(Que dicha CI exista en la tabla `agenda`)
4. Consultar cantidad de usuarios agendados por grupo desde la tabla `agenda`, por ende nos dirigimos a [Consultar por grupo](http://localhost/agenda_covid/view/consultar_2.php)
Seleccione grupo de usuarios
5. Consultar cantidad de usuarios agendados por grupo de edad desde la tabla `agenda`, por ende nos dirigimos a [Consultar por edad](http://localhost/agenda_covid/view/consultar_3.php)\
Selecciona grupo de edad

## Construido con 🛠️

* [Bootstrap](https://getbootstrap.com) - El framework de estilos web usado
* [Laravel](https://laravel.com/)
* [React JS](https://es.reactjs.org/)
* HTML - Lenguaje de etiquetado
* CSS - Lenguaje de diseño

## Autores ✒️

* **Bruno Dos Santos** - *Desarrollador* - [Linkedin](https://www.linkedin.com/in/bruno-dossantos) - [GITHUB](https://github.com/bruno-dossantos)
* **Ezequiel Padilla** - *Desarrollador* - [Linkedin](https://www.linkedin.com/in/ezequiel-padilla-46804a193/) - [GITHUB](https://github.com/Ezequiel-Padilla)
* **Bruno Martinez** - *Desarrollador* - [GITHUB](https://github.com/BrunoMartinez17)

## Expresiones de Gratitud 🎁

Desde todo el equipo de la Fundación Movies queremos decirte "GRACIAS" por tu apoyo!
