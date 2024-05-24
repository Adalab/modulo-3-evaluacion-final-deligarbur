![Adalab]()

**Dirección GitHub Pages:**



# Módulo 3: Ejercicio de evaluación final


## Enunciado

El ejercicio consiste en desarrollar una página web con un listado de personajes de Rick and Morty, que
podemos filtrar por el nombre del personaje. Vamos a usar React para realizarlo.

Vamos de definir los distintos hitos completados del ejercicio:

### 1. Listado de personajes

Se ha utilizado el servicio de https://rickandmortyapi.com/documentation/#get-all-characters que nos devuelve información sobre los primeros 20 personajes de la serie. Sobre cada uno, se pinta:
- Foto
- Nombre
- Especie

### 2. Filtrado de personajes

- Añadimos un input a la interfaz, de forma que al ir escribiendo un nombre queden en la interfaz solo los personajes cuyo nombre contiene las letras escritas. 
- Añadimos un botón Reset que hará la función de resetear tanto la búsqueda como el filtrado qaue hayamos hecho.
- El filtro de búsqueda filtra independientemente de que la usuaria introduzca el texto en mayúsculas o minúsculas.

### 3 Componentes del listado de personajes

El listado tiene los siguientes componentes:

```
src
 ├─ styles (layout)
 |  ├─ core (reset & variables)
 |  ├─ layout (pendiente...)
 |  └─ App
 ├─ services (api)
 ├─ images
 └─ components (jsx)
    ├─ App
    ├─ CharacterCard
    ├─ CharacterDetail
    ├─ CharacterList
    ├─ Filters
    ├─ Footer
    ├─ Header
    ├─ Home
    ├─ PageNotFound
    └─ SearchNotFound


```


### 4. Detalle de personajes

- Al hacer clic sobre la tarjeta de un personaje, su información aparece a pantalla completa. Usando rutas y React Router DOM en la pantalla dedetalle aparece además de la foto, nombre y especie, el planeta de origen, el número de episodios en los
que aparece y si está vivo o muerto.

### 5. Detallitos de calidad

- El campo de texto está recubierto por una etiqueta <form />.
- Si estando en el campo de filtrado pulsamos intro impedimos que el navegador navegue o cambie la ruta sin querer.
- Si se busca por un texto por ejemplo "XXX" y no hay ningún personaje que coincida con dicho texto se muestra un mensaje.
- El filtro filtra independientemente de que la usuaria introduzca el texto en mayúsculas o minúsculas.
- Al entrar en el detalle de un personaje y a continuación pulsar atrás, el campo de texto muestra el texto que tenía anteriormente.

### 6. BONUS: Mejoras visuales

Mejoras realizadas:
- Mostrar la especie y si un personajes está muerto con un icono.
- Mejora de la estética para desktop.



### 7. BONUS: URL compartible
- En el caso de que la usuaria navegue a una URLinexistente, se muestra un mensaje del tipo "El personaje que buscas no existe".
- La URL del detalle de personaje es compatible, es decir, que si visitamos esa URL directamente en el navegador se ve el detalle del personaje. Si refrescamos el navegador, o cerrando y abriendo en la misma dirección, se vuelve a mostrar el detalle de ese personaje.

### 8. BONUS: Ordenación

- El listado de personajes se muestra ordenado alfabéticamente por nombre al cargar la página.

### 9. BONUS: Más filtros

- Se han incluido dos filtros a mayores, por especie y por estatus.

## Mejoras pendientes y fijadas como objetivo a completar a futuro:

- Usar algún sistema de grid para pintar el listado de personajes.
- Que funcione bien el responsive en dispositivos pequeños.
- Mejorar la maquetación de las sección detalle de los personajes y páginas NotFound.
- Usa propTypes para evitar errores de tipado.

