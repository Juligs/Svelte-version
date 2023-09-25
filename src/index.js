import App from './App.svelte';
import './css/global.css'; // Importa tu archivo global CSS
import './css/main.scss'


const cssContext = require.context('./css', false, /\.css$/);
cssContext.keys().forEach(cssContext);

const app = new App({
    target: document.getElementById('root'), // entry point in ../public/index.html
});

export default app;
