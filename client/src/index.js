import React from "react";
import ReactDOM from "react-dom";
import './scss/index.scss'
import './scss/products.scss'
import './scss/footer.scss'
import './scss/nav.scss'
import './scss/slider.scss'
import './scss/contact.scss'
import './scss/home.scss'
import App from "./App.js";
import "bootstrap/dist/css/bootstrap.css";
import 'milligram'
import 'font-awesome/css/font-awesome.min.css';
import './scss/login.scss'
import './scss/signup.scss'
import './scss/admin.scss'
import HttpsRedirect from 'react-https-redirect';
import  * as serviceWorker from './service-worker'



ReactDOM.render(<HttpsRedirect><App /></HttpsRedirect>, document.getElementById("root"));

serviceWorker.register()
