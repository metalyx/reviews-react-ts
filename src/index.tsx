import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

const container = document.getElementById('root');

if (container) {
    const root = createRoot(container);
    root.render(<h1>Reviews app</h1>);
} else {
    throw new Error ('App crashed... Document\'s root not found.');
}
