import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/App';
import {BrowserRouter} from "react-router-dom";
import {RecipesProvider} from "./contexts/RecipesContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RecipesProvider>
        <React.StrictMode>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </React.StrictMode>
    </RecipesProvider>
);
