# Acciones realizadas:
  # 1: Proyecto React basado en Arquitectura Hexagonal:
        Este proyecto se realiza tomando como base la arquitectura HEXAGONAL (Puertos&Adaptadores), con el fin de que todo el proyecto sea desacoplado, permitiendo un alto grado de facilidad para leerlo, probarlo y mantenerlo. De igual manera esto regala un plus, que es permitir que el proyecto pueda escalar enormemente sin ver afectado alguna parte del proyecto (Flexibilidad y adaptabilidad). Al tener separado la logica de la presentacion, nos permite enforcarnos en aspectos puntuales sin afectar o preocuparnos por el otro extremo.
  # 2: Componentes Lazy:
        La aplicacion tiene ejemplos de componentes Lazy, que se carga solo cuando el componente esta cerca a renderizarse en pantalla (incluso sus importaciones de js), permitiendo que elementos priorizados se carguen con mas velocidad y anticipacion. 
  # 3: CustomHooks: 
        Al integrar customHooks, nos permite separar gran cantidad de logica de los componentes para favorecer el principio de SingleResponsability en el proyecto.
  # 4: Libreria de estado Global Redux:
        Se integra esta libreria con el fin de mantener un estado global, dividido en varios slice permiten a la aplicacion tener una sola fuente de la verdad y poder interactuar sin problema con ella y su actualizacion. La persistencia es captada por un middleware que nos permite almacenar en localStorage y cargarla en estado inicial de ahi.
  # 5: Modificacion e metodos API: 
        SE REALIZAN ADECUACIONES A LA API, PARA UN CORRECTO FUNCIONAMIENTO DE LOS ENDPOINTS ACORDE A LO REQUERIDO.
  # 6: Pruebas con JEST:
        Se incluye archivo de prubas para el caso de uso de listar imagenes, donde podemos comprobar la forma de el resultado para un repo de tipo fetch, el cual usa el endpoint habilitado en el mock. Por otro lado para probar la fuente a la cual el repo hace fetch.
  # 7: Diseño Responsive:
        Se garantiza un rendimiento y comportamiento de la aplicacion, en multiples dispositivos, comportandose a 1 col para dispositivos pequeños y 4 col para dispositivos grandes.
  # 8: Dark Mode:
        Se implementa este metodo, por medio deel estado global, pero de igual manera puede modificarse quitando la linea 4 "  darkMode: 'class'," del tailwind.config. De esta manera la aplicacion captaria el estado del tema del dispositivo, es decir que si el dispositivo se coloca en modo oscuro, la aplicacion tambien lo hará.
  # 9 Scroll Infinito:
        Se implementa un scroll infinito, haciendo uso del customHook para revisar en que momento se debe realizar la peticion, se encuentra funcionando para ambos repos y disponible para escalarlo.



# Requerimientos

Necesitamos desarrollar una Single Page Application (SPA) que muestre la información de nuestras imagenes:
  1. Mostrar todas las imagenes con un scroll infinito.
  2. Filtrar el contenido a través de una búsqueda (No es necesario que el resultado sea coherente).
  3. Realizar un like/unlike de cada uno de los items. UI responsive.

# Información

En el momento del desarrollo de la aplicación cliente, el API no se encuentra desarrollada, por
lo que esta incluida una api mock que simula el comportamiento de la API.

Para arrancar la api mock simplemente ejecutar:

`npm run mocks`

## Endpoints

### `GET http://localhost:3100/images`
```json
[
  {
    "type": "Image",
    "id": 2,
    "title": "Train in India-Agra",
    "author": "SamyRoad",
    "created_at": "2012-12-12T21: 08: 20Z",
    "main_attachment": {
      "big": "http://lorempixel.com/400/500/",
      "small": "http://lorempixel.com/100/125/"
    },
    "likes_count": 5,
    "liked": true,
    "links": [
      {
        "rel": "avatar",
        "uri": "http://lorempixel.com/250/250/",
        "methods": "GET"
      },
      {
        "rel": "like",
        "uri": "http://localhost:3100/images/2/likes",
        "methods": "POST"
      }
    ]
  },
  ...
]
```

Se puede utilizar los query params `search` y `page` para simular la busqueda y paginación.


### `POST http://localhost:3100/images/:id/likes`

Espera un body vacio y respondera con un 204 si todo ha ido correctamente, simula la acción de like.

# Diseño

La visualización de la aplicación cambia dependiendo del dispositivo que se este utilizando.
- En el caso de que se utilice un dispositivo móvil, se debe de mostrar la aplicación siguiendo el diseño mobile.psd.
- En el caso que se utilice una pantalla mayor, se debe de utilizar el diseño web.psd, con un mínimo de 2 columnas y un máximo de 4.

Los diseños se pueden encontrar [aqui](https://www.dropbox.com/sh/r1fp5nz7x046kjt/AACQdbp6bZlv2pNtCN2lTEoEa?dl=0).

Si no dispones de photoshop puedes usar [photopea](https://www.photopea.com/).

# Implementación

- Diseñar e implementar la aplicación usando preferiblemente React.
- HTML y estilos responsive a partir de los PSDs: mobile para móviles y web para Desktop.

Se valorarán el uso e implementación de tests.
#   i m a g e s - a r c h 
 
 