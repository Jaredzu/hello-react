import React from 'react'
import Card from './card'

const NamesList = (props) => {
    console.log(props.names);
    return (
        <>
        <div>NamesList</div>
            {props.names.map(element => <Card name={element} />)}
        </>
  )
}

export default NamesList