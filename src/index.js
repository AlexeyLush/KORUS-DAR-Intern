import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/App';
import {BrowserRouter} from "react-router-dom";
import {RecipesProvider} from "./contexts/RecipesContext";
import {SpinnerProvider} from "./contexts/SpinnerContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RecipesProvider>
        <SpinnerProvider>
            <React.StrictMode>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </React.StrictMode>
        </SpinnerProvider>
    </RecipesProvider>
);
