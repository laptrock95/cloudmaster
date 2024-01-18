import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const tabs = [
    {nombre:'Inicio',
    icono:'fa-home',
    contenido:'....0'},
    {nombre:'Perfil',
    icono:'fa-user',
    contenido:'....1'},
    {nombre:'Mensaje',
    icono:'fa-envelope',
    contenido:'....2'},
    {nombre:'Configuración',
    icono:'fa-cog',
    contenido:'....3'}]

ReactDOM.render(<App tabIndexActive={0} tabs={tabs}/>, document.getElementById('root'));
registerServiceWorker();
