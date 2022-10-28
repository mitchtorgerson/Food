import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import Dashboard from "./routes/Dashboard";

import './style.module.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/:secId" element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
