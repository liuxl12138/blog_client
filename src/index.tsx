import 'react-app-polyfill/ie11';
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';

import React from 'react';
import ReactDOM from 'react-dom/client';
import '@/index.less';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <div></div>
    </React.StrictMode>
);

fetch('/jian/subscriptions/recommended_collections')
    .then(response => response.json())
    .then(value => {
        console.log('简书：', value);
    });
fetch('/zhi/news/latest')
    .then(response => response.json())
    .then(value => {
        console.log('知乎', value);
    });
