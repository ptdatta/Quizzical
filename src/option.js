import React from "react";

export default function Option(props){
    const styles={
        backgroundColor: props.isClicked ? 
                            props.isSelected ?
                               props.isTrue ? "green" : "red"
                            :
                               props.isTrue ? "green" : "white"
                         :
                           props.isSelected ? "pink" : "white"

        }
    // const styles={
    //     backgroundColor: props.isSelected ? "pink" : "white"
    // }

    return (
        <div className="box" style={styles} onClick={props.Select}><span dangerouslySetInnerHTML={{__html: props.value}}/></div>

    )
}