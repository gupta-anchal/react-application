import React from 'react';
import Feedback from '../Feedback';
import Info from '../Info';
import TaxCalc from '../TaxCalc';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


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
    <Container>
    <Row>
        <Col sm={8} className="column1">
        </Col> 
        <Col sm={4} className="column2"> 
            <Row className="row1">
            <TaxCalc values={values}/>
            </Row>
            <Row className="row2">
              <Feedback/>
            </Row>
            <Row className="row3">
                3rd row
            </Row>
        </Col>
    </Row>
    </Container>
    </div>
  )
}
