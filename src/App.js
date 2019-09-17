import React from 'react';
import './App.css';
import { RowsBox } from "./components/RowsBox";
import { Result } from "./components/Result";
import { AddRow } from "./components/AddRow";


function Calculator() {
  return (
    <div className="container">
        <h1 className="text-center">Simple React calculator(adder) with Redux</h1>
        <RowsBox/>
        <AddRow/>
        <Result/>
    </div>
  );
}



export default Calculator;
