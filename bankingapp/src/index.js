import './index.css';
import React from "react";
import ReactDOM  from "react-dom/client";
import App from "./App";
import { NavigationProvider } from './Context/navigation';
import { PaymentProvider } from './Context/paymentContext';


const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);


root.render(

<NavigationProvider>
<PaymentProvider>
    <App/>
    </PaymentProvider>
    </NavigationProvider>

);
