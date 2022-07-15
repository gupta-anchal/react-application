import React, { useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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
    <Row>
        <Col sm={8} className="column1">
        </Col> 
        <Col sm={4} className="column2"> 
            <Row className="row1">
                <form ref={nameForm} align="center">
                    <InputField label={'amount'} name={'amount'}/>
                    <InputField label={'rate'} name={'rate'}/>
                </form>
                <button onClick={handleClickEvent}>Get value</button>
            </Row>
            <Row className="row2">
                2nd row
            </Row>
            <Row className="row3">
                3rd row
            </Row>
        
        </Col>

    </Row>
    </Container>
  )
}




