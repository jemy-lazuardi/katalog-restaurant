import 'regenerator-runtime'; /* for async await transpile */

import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

import './components/NavigationBar';

import '../styles/main.css';
import '../styles/responsive.css';
import swRegister from './utils/sw-register';

import App from './views/app';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#sideNav'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
