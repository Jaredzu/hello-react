import React, { useState } from "react";

const Form = (props) => {
    // Estado Local

    const [name, setName] = useState("")

    const handleChange = (event) => {
        setName(event.target.value);
    }

    const handleClick = () => {
        setName("")
        props.handleName(name)
    }

    return (
        <div>
            <label htmlFor="name">Drop your name</label>
            
            <input type="text" name="name" placeholder="Your name here"
                value={name} onChange={handleChange} />
            
            <button onClick={handleClick}>Hello !</button>
        </div>
    )
}

export default Form