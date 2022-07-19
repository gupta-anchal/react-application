import React, { useRef } from 'react';
import Container from 'react-bootstrap/Container';
// import { render } from 'react-dom';

import InputField from './inputfield';


export default function TaxCalc(props) {

    const nameForm = useRef(null);

    const handleClickEvent = () => {
        const form = nameForm.current
        const result = (`${form['amount'].value}`*`${form['rate'].value}`)/100;
        alert(result)
    }
    
  return (
    <Container>
        <form ref={nameForm} align="center">
            <InputField label={'amount'} name={'amount'}/>
            <InputField label={'rate'} name={'rate'}/>
        </form>
        <button onClick={handleClickEvent}>Get value</button>

    </Container>
  )
}




