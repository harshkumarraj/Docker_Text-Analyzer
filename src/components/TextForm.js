import React, { useState } from "react"; //importing HOOK i.e useState to make state variable

export default function TextForm(props) {
  const handleUpClick = () => {
    //console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };

  const handleLoClick = () => {
    //console.log("Lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  };

  const handleClearClick = () => {
    //console.log("ClearText was clicked" + text);
    let newText = "";
    setText(newText);
    props.showAlert("Text cleard!", "success");
  };

  const handleOnChange = (event) => {
    console.log("On changed");
    setText(event.target.value);
  };
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied to clipboard!", "success");
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra space removed!", "success");
  };
  const [text, setText] = useState(""); //text=variable(default value=''),setText=update text using this function.
  //text="new text";                                    //wrong way to change the state
  //setText("new text");                                //right way to change the state.
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
          textAlign: "center",
        }}
      >
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroudColor: props.mode === "dark" ? "grey" : "white",
              backgroundColor: '#FFFEF2',
              height: "300px",
              width: "70%",
              position: "relative",
              left: "190px",
              boxShadow:"1px 1px 5px"
            }}
            id="myBox"
            rows="5"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick} style={{boxShadow:"1px 1px 5px"}}>
          CONVERT TO UPPERCASE
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick} style={{boxShadow:"1px 1px 5px"}}>
          CONVERT TO LOWERCASE
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick} style={{boxShadow:"1px 1px 5px"}}>
          CLEAR TEXT
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopy} style={{boxShadow:"1px 1px 5px"}}>
          COPY TEXT
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces} style={{boxShadow:"1px 1px 5px"}}>
          REMOVE EXTRA SPACES
        </button>
      </div>

      <div
        className="container my-2"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
          textAlign: "center",
        }}
      >
        <div className="previews" style={{fontFamily:'cursive'}}>
        <h2>TEXT SUMMARY</h2>
        <h4>
          {text && text.trim().length !== 0 ? text.split(" ").length : 0} words
          and {text.length} characters{" "}
        </h4>
        <h4> {0.008 * text.split("").length} Minutes To read</h4>
        <h3>Preview</h3>
        <h5>
          {text.length > 0
            ? text
            : "Enter something in textbox to preview it here"}
        </h5>
        </div>
      </div>
    </>
  );
}
