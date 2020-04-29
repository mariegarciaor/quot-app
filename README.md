INSTRUCCIONES PARA TRABAJAR EN EL PROYECTO:

AL INICIAR
*En la app de escritorio de Github: *
1. Ir a la rama de master y hacer fetch (para que github revise si hay cambios nuevos en master).
2. Has pull del master (para traer los cambios actualizados del reposito remoto a tu repositorio local).
3. Ya que tienes master en tu repositorio local, has un merge del Master a tu branch propio (no trabajar sobre master) => para hacer esto selecciona la opción: "choose a branch to merge into tu-rama" y selecciona master.
4. Desde tu rama, abre VSC.

*En Visual Studio Code: *
5. Trabaja en tus cambios.

AL TERMINAR
*En la app de escritorio de Github: *
6. Al finalizar, has fetch y pull request de master nuevamente (esto es una buena práctica) por si alguien más hizo cambios durante el tiempo que tu trabajaste. (Si hubiera cambios, hacer merge de master a tu branch nuevamente antes de subir tus cambios).
7. Regresa a tu branch y has commit de tus cambios nuevos (estarán en stashed, da click en restore).
8. Has push origin.

*En la página web de Github: *
9. En la ruta: code > branches > tu-branch (debería aparecer un update).
10. Revisa la información, asigna a los reviewers y has el pull request.
11. Avisa que hiciste un pull request para que se revise y alguien más haga merge de tu branch a master.
12. Ve a la sección de <code> para revisar que en efecto se vean reflejados tus cambios.















This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
