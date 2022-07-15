import React from 'react';
import Feedback from '../Feedback';
import Info from '../Info';
import TaxCalc from '../TaxCalc';


export default function Main() {
    
  const info = {
    name:"Anchal",
     email:"anchal@w3villa.com"
  }
  const values = {
    "amount":"100",
    "rate":"20"
  }

  return (
    <div className='main'>
    <Info name={info}/>
    <Feedback/>
    <TaxCalc values={values}/>
    </div>
  )
}
