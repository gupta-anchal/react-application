import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = () =>{
    // console.log("UpperCase was clicked" + text);
    let newText = text.toUpperCase();
    if(newText.length === 0){
      props.showAlert("Enter Text to covert!", "warning");
    }
    else{
      setText(newText);
      props.showAlert("Text has been converted to Upper case", "success");
    }
  }

  const handleLoClick = () =>{
    let newText = text.toLowerCase();
    if(newText.length === 0){
      props.showAlert("Enter Text to covert!", "warning");
    }
    else{
      setText(newText);
      props.showAlert("Text has been converted to Lower case", "success");
    }
  }

  const handleOnChange = (event) =>{
    setText(event.target.value);
  }

  const handleClearClick = () => {
    let newText = '';
    setText(newText);
    props.showAlert("All text is cleared", "success");
  }

  const handleCopy = () =>{
    var text = document.getElementById("myBox");
    if(text.value.length === 0){
      props.showAlert("Enter Text to copy!", "warning");
    }
    else{
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Text has been copied", "success");
    }
  }

  const handleExtraSpace = () => {
    let newText = text.trim().split(/[ ]+/);
    if(newText[0].length === 0){
      props.showAlert("Enter Text to covert!", "warning");
    }
    else{
      setText(newText.join(" "));
      props.showAlert("Extra spaces is now removed", "success");
    }
  }
  
  const [text, setText] = useState('');
  // setText("new text"); //Correct way to change the state
  return (
    <>
    <div className='container'>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className='form-control' style={{backgroundColor: props.mode === 'light' ? 'white':'grey', color: props.mode === 'light' ? 'grey' : 'white'}} value={text} onChange={handleOnChange} id='myBox' rows={8}></textarea>
      </div>
      <button className={`btn btn-${props.mode === 'light' ? 'primary' : props.mode} mx-2`} onClick={handleUpClick}>Convert to Uppercase</button>
      <button className={`btn btn-${props.mode === 'light' ? 'primary' : props.mode} mx-2`} onClick={handleLoClick}>Convert to Lowercase</button>
      <button className={`btn btn-${props.mode === 'light' ? 'primary' : props.mode} mx-2`} onClick={handleClearClick}>Clear Text</button>
      <button className={`btn btn-${props.mode === 'light' ? 'primary' : props.mode} mx-2`} onClick={handleCopy}>Copy Text</button>
      <button className={`btn btn-${props.mode === 'light' ? 'primary' : props.mode} mx-2`} onClick={handleExtraSpace}>Remove extra space</button>
    </div>
    <div className='container my-3'>
      <h2>Your Text summary</h2>
      <p>{ text.length ? text.trim().split(/[ ]+/).length : 0 } words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} minutes read</p>
      <h2>Preview</h2>
      <p>{text.length > 0 ? text : "Enter Something in text box above to Preview it here!!"}</p>
    </div>
    </>
  )
}
