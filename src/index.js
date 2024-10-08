import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/main.scss'
import './css/index.css'
import './css/Introduce.css'
import './css/Chatbutton.css'
import './css/Footer.css'
import './css/ProductPage.css'
import './css/ProductSlideShow.css'
import './css/Contact.css'
import './css/LadiContainer.css'
import './css/table-container.css'
import './css/menu-icon.css'
import './css/container.css'
import './css/Services.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import  router from './router'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);
