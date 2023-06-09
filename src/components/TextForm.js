import React, { useState } from 'react';

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("uppercase was clicked" +  text);
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleLoClick = () => {
    console.log("lowercase was clicked" + text);
    let oldText = text.toLowerCase();
    setText(oldText);
  }

  const handleClearClick = () => {
    let clearText = '';
    setText(clearText);
  }

  const handleOnChange = (event) => {
    console.log("on change");
    setText(event.target.value); // to type anything with the default value
  }

  const [text, setText] = useState('');
  return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" placeholder='Enter text here'></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
            Convert to Uppercase
        </button>

        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
            Convert to Lowercase
        </button>

        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
            Clear Text
        </button>
    </div>

    <hr />

    <div className="container my-2">
      <h2>Your text Summary</h2>
      <p>{text.split(" ").length}words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
