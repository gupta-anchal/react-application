import React from 'react';
// import About from '../About';
import TextForm from '../TextForm';



export default function Main(props) {

  return (
    <>
    <div className={`container my-3 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
      <TextForm heading="Enter the text to analyze below" mode={props.mode} showAlert={props.showAlert}  />
      {/* <About></About> */}
    </div>
    </>
  )
}
