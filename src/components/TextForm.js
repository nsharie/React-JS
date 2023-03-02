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

    const [text, setText] = useState("Enter text here");
    // text = "new text"; // Wrong way to change the state
    // setText("new text"); //correct way to change the state
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value = {text} onChange={handleOnChange} id="MyBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick = {handleUpClick}>Convert to UpperCase</button>
        </div>
    )
}
