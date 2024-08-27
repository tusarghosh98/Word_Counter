import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        let newtext=text.toUpperCase()
        setText(newtext)
        props.showalert("Converted to Upper Case","success")   
    }
    const handlelowClick=()=>{
        let newtext=text.toLowerCase()
        setText(newtext)
        props.showalert("Converted to Lower Case","success")   
    }
    const handleClClick=()=>{
        let newtext=''
        setText(newtext)
        props.showalert("Text Cleared","success")   
    }

    const handleOnchage=(event)=>{
        setText(event.target.value)
    }
    const handleCpClick=()=>{
        console.log(text)
        navigator.clipboard.writeText(text);
        props.showalert(`${text} Copied to clipboard`,"success")   
    }
    const handlerepClick=()=>{
        let newtext=text.trim().split(' ').filter((element)=>{return element.length!==0}).join(' ')
        setText(newtext)
        props.showalert("Extra space Removed","Success")
    }


    const[text,setText]=useState("Enter the value")
    return (
        <>
        <div className='container'style={props.mode==='light'?{color:'black'}:{color:'white'}}>
            <h1>Enter the text to convert it</h1>
            <div className="mb-3" >
                <textarea className="form-control" id="myBox" rows="12" value={text} onChange={handleOnchage} style={props.mode==='light'?{backgroundColor: 'white',color:'black'}:{backgroundColor: 'gray',color:'white'}}></textarea>
            </div>
            <button type="button" className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
            <button type="button" className="btn btn-primary mx-2" onClick={handlelowClick}>Convert to Lowecase</button>
            <button type="button" className="btn btn-primary mx-2" onClick={handleClClick}>Clear the text</button>
            <button type="button" className="btn btn-primary mx-2" onClick={handleCpClick}>Copy Text</button>
            <button type="button" className="btn btn-primary mx-2" onClick={handlerepClick}>Remove Extra Space</button>

        </div>
        <div className="container my-3" style={props.mode==='light'?{color:'black'}:{color:'white'}}>
            <h2>Your Text Summery</h2>
            <p>{(text.split(/\s+/).filter((element)=>{return element.length!==0}).length)} words {(text.split('').filter((element)=>{return element!==' '}).length)} charecters</p>
        </div>
        </>
    )
}
