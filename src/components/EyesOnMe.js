// Code EyesOnMe Component Here

import React from "react"

function EyesOnMe(){
    // function handleFocus(){
    //     console.log("Good! ")
    // }

    // function handleBlur(){
    //     console.log('Hey! Eyes on me! ')
    // }
return(
    <button onFocus={() => console.log("Good!")} onBlur={() =>console.log('Hey! Eyes on me!')} >Eyes on me</button>
);
}

export default EyesOnMe;