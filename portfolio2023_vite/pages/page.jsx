import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../src/app';

import '../src/scss/reset.scss';
import '../src/scss/flex_set.scss';

const pageContainer = document.querySelector('#pageContainer');
ReactDOM.createRoot(pageContainer).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
