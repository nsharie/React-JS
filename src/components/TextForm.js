import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick= ()=>{
        //console.log("converted to uppercase" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleOnChange = (event)=>{
        console.log("on change");
        setText(event.target.value); // this will help in target inside the textbox
    }

    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleclearText = ()=>{
        let newText = "";
        setText(newText);
    }

    const [text, setText] = useState("");
    // text = "new text"; // Wrong way to change the state
    // setText("new text"); //correct way to change the state
    return (
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value = {text} onChange={handleOnChange} id="MyBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick = {handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-1" onClick = {handleLoClick}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-1" onClick = {handleclearText}>Clear Text</button>
        </div>
        <div className="container my-3">
            <h2>Your text summary</h2>
            <p>{text.split(" ").length}words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} minutes</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
