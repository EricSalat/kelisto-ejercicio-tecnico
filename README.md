# Prueba técnica Crypto Stocks

La aplicación web “Crypto Stocks” ha sido desarollada con React. Puedes consultar el código en este repositorio o en la web [https://ericsalat.com/kelisto/](https://ericsalat.com/kelisto/). Para visualizar la aplicación desde el código, ejecuta el comando ```npm start``` en la consola.

Para el desarrollo del proyecto, he tomado las siguientes decisiones:

- **Utilizar Normalize.css.** Es un archivo de CSS que establece unos estilos básicos consistentes para que los elementos HTML se muestren de manera coherente en diferentes navegadores y dispositivos.
- **Organizar la app por componentes de manera modular.** Hay una carpeta general llamada *Components* que almacena todos los componentes. Cada componente tiene su propia específica con su archivo ```.jsx``` y su propio archivo ```.css.``` los nombres de las clases son descriptivos y específicos para cada componente. De esta forma los componentes son simples de entender de un vistazo y fácilmente escalables.


## Cómo probar la solución

Las funcionalidades que se pueden probar son:
- **Conexión con la API:** La aplicación se conecta correctamente con la API de datos de stocks y muestra los datos relevantes en la interfaz. En caso de que la pantalla cargue antes que los datos o que la conexión a la API fuera lenta, aparece el texto alternativo “Cargando...”.
- **Cálculo del total de stocks:** En la parte superior vemos el balance que es el cálculo de todos los stocks de la API. He creado una función para adaptar los dígitos al formato americano, que usa el signo del dólar al principio, comas para los millares y punto para los decimales.
- **Cambio de color según beneficios o pérdidas:** una función ternaria calcula si la cifra de la variante de los stocks es positiva o negativa y le otorga un color verde o rojo según el caso.


## Posibles bloqueos

Uno de los bloqueos o momentos de reflexión que me he encontrado ha sido:
  
- Hacer un desarrollo responsive. Como no disponía de un mockup para la versión de escritorio, he decidido mantener el mismo diseño. Para un futuro desarrollo del que se disponga de más tiempo, pondría los botones fuera en un menú de navegación y debajo del contenedor blanco, para que visualmente queden separados. Me he enfocado en tener que escribir el menor CSS posible para hacerlo responsive, por eso he trabajado que en las media queries el contenedor blanco reduzca su tamaño al aumentar el del navegador y he hecho que el componente *stocks* se adapte al contenedor padre.
- Decidir en qué componente se haría la llamada a la API. Como necesitamos la información en dos componentes, he decidido hacerla en el componente padre para pasar fácilmente la información a los componentes hijos.

## Posibles mejoras

Para seguir con el desarrollo en caso de tener más tiempo, añadiría las siguientes mejoras:

- Hacer testing con Jest y testear todas las funciones de la llamada a la API.
