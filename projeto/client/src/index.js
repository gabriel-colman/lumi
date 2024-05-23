import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render( // Renderiza o componente App no elemento root do HTML
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
