// Importamos React para poder hacer uso de JSX 
import React from "react";
// Importamos ReactDOM para poder renderizar el JSX
import ReactDOM from "react-dom";
import PrimeraApp from "./PrimeraApp";
import CounterApp from "./CounterApp";
import './index.css';


const divRoot = document.querySelector('#root')

ReactDOM.render(<CounterApp value={3} />, divRoot);
