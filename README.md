**Note: The readme is in English and Spanish **
**Nota: El readme esta en ingles y español **

### `WebSite:`
Si desea probar la aplicación ingrese a la siguiente url con los datos proporcionados(If you want to test the application enter the following url with the data provided): 

https://movies-nalancay.netlify.app/
 ### `User: test@gmail.com`
 ### `Password: react123`

# Technical project for film application

This project was built with create-react-app, to demonstrate technical skills using react, javascript, html, css, bootstrap, context concepts to avoid concepts of props drilling, custom hooks, react router,jest,react-testing-library, using localstorage, sessionStorage, the token utility in the account login, communication of components through props, consumption of api, reuse of components, propTypes to ensure that the value passed is of the correct data type and structure of the project in modules.

## Functionality of the application

### `Login`

The login assembly was implemented with validation of the form and persistence of the token in the browser's local storage using sessionStorage to ensure that closing the browser tab closed the user's login.

### `Navigation`

Redirect between different views using react-router-dom library taking into account the concept of react in relation to single-page application to avoid page reloads and keep it on a single page when browsing the website.

### `Token Importance`

Token check for the protection of our routes when account authentication is required when accessing application features.

### `URL query string`

Capture information that travels in the URL query string through the URLSearchParams javascrit object in order to show results in a search and call an api with keyword that comes in the url.

### `Favorites in localstorage`

Add and remove items in localstorage for favorites functionality.

### `Multiple languages`

Mechanism to choose language between Spanish and English on the website. In this part, the concept of context was used to store a global state of the language in localstorage, so that it can be used anywhere without losing its translation.

### `Responsive Interfaces`

Responsive website on desktop and mobile interfaces.

### `Test the app with Jest and React Testing Library`

Component tests were executed based on user interactions, taking into account some axios configurations, data generation test factories for the consumption of apis and displaying information in the interface executed with jest and react-testing-library.

# Proyecto técnico de aplicacón de películas

Este proyecto se creo con create-react-app, para poner de manifiesto habilidades técnicas utilizando react, javascript, html, css, bootstrap, conceptos de context para evitar conceptos de props drilling, custom hooks, react router,jest,react-testing-library,utilización de localstorage, sessionStorage, la utilidad de token en el logeo de cuenta, comunicación de componentes a través de props, consumo de api, reutilización de compoentes,propTypes para asegurar que el valor pasado sea del tipo de datos correcto y estructura del proyecto en modulos.

## Funcionalidade de la aplicacion

### `Login`

El armado de login se implemento con validación del formulario y persistencia del token en el almacenamiento local del navegador utilizando sessionStorage para garantizar que al cerrar pestaña del navegador se cerro el logeo del usuario.

### `Navegación`

Redireccionar entre diferentes vistas utilizando librería react-router-dom teniendo en cuenta el concepto de react en relacion a single-page application para evitar recargar página y mantenerlo en una sola página al navegar en el sitio web.

### `Importancia del token`

Chequeo del token para la protección de nuestras rutas cuando requiere autenticación de la cuenta al acceder a funcionalidades de la aplicación.

### `Query string de la URL`

Capturar información que viaja en el query string de la URL a traves del objeto de javascrit URLSearchParams con el fin de mostrar resultados en una búsqueda y llamada a una api con palabra clave que viene en la url.

### `Favoritos en localstorage`

Agregar y eliminar items en localstorage para la funcionalidad de favoritos.

### `Multiples lenguajes`

Mecanismo para elegir lenguaje entre español e ingles en sitio web. En esta parte se utilizo concepto de context para almacenar un estado global del lenguaje en localstorage, de manera que esta pueda utilizarse en cualquier parte sin perder la traducción de la misma.

### `Interfaces Responsivas`

Sitio web responsivo en interfaces desktop y mobile.

### `Probar la aplicación con Jest y React Testing Library`

Se ejecutaron pruebas en componentes en función de las interaciones del usuario tomando en cuenta algunas configuraciones de axios, test factories de las generación de datos para el consumo de apis y mostar información en la interfaz ejecutadas con jest y react-testing-library.
