This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
## Instalación y Ejecución
1. Clona el repositorio:
   ```bash
   git clone https://github.com/daniel-agudelo21/user-profile.git
   ```
2. Navega al directorio del proyecto:
   ```bash
   cd user-profile
   ```
3. Ingresa al proyecto en VSC:
   ```bash
   code .
   ```

## Para correr el proyecto

Si no tienes abierto la terminal, debes abrirla:
```bash
ctrl + J
```

Segundo, instala las dependencias:
```bash
npm install
# o
npm i
```

Tercero, ejecuta el servidor de desarrollo:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Abre [http://localhost:3000](http://localhost:3000) con tu navegador para ver el resultado.

![screenshot](https://github.com/daniel-agudelo21/user-profile/assets/121839984/c275ea23-9a21-4847-9f35-629f2f64ee95)


# Perfil de Usuario - Prueba Técnica

Este proyecto es una prueba técnica que muestra la información de un usuario a través de una interfaz web. La aplicación incluye varias secciones que destacan información personal, intereses y un formulario de contacto. A continuación se describen las características principales del proyecto.

## Características

- **Cabecera con el nombre del usuario y una imagen de perfil**: La parte superior de la página muestra el nombre del usuario junto con su imagen de perfil.
- **Sección "Sobre mí"**: Una breve descripción del usuario para proporcionar información general sobre él.
- **Lista de intereses**: Una lista de los intereses del usuario, que puede incluir hobbies, actividades favoritas, etc.
- **Formulario de contacto**: Un formulario que permite a los visitantes enviar un mensaje al usuario. El formulario incluye campos para el nombre, correo electrónico y mensaje.
- **Responsivo**: La aplicación está diseñada para ser completamente responsiva y se adapta a diferentes tamaños de pantalla y dispositivos.
- **CSS Modules**: Se utilizó CSS Modules para el estilo, lo que asegura que los estilos sean locales y no colisionen con otros estilos en el proyecto.
- **Animaciones y transiciones**: La interfaz incluye animaciones y transiciones para mejorar la experiencia del usuario y hacerla más atractiva visualmente.
- **Testing con Jest y Testing Library**: Para garantizar la calidad y el correcto funcionamiento de la aplicación, se implementaron pruebas utilizando Jest y Testing Library.

## Tecnologías Utilizadas

- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **Next.js**: Framework de React para el desarrollo de aplicaciones web.
- **CSS Modules**: Técnica de modularización de CSS que ayuda a evitar conflictos de nombres en los estilos.
- **Zod**: Librería para la validación de datos.
- **Jest**: Framework de pruebas de JavaScript.
- **Testing Library**: Herramientas para probar componentes de React.
