import React, { useState } from "react";

export default function About(props){
    
    const [currentImage, setCurrentImage]= useState(0);
    const imageNumber= React.Children.count(props.Children);

    function returnCurrentImage(index) {
        const imageChild= React.Children.toArray(props.Children)[index];
        return React.cloneElement(imageChild);
    }


    return(
        <>
        <br></br><br></br><br></br><br></br>
            <button 
            disabled={currentImage===0}
            onClick={(e) => setCurrentImage(v => v - 1)}
            > &lt; prev</button>

            <button 
                disabled={currentImage >= imageNumber - 1}
             onClick={(e) => setCurrentImage(v => v + 1)}
            >  next &gt;</button>

            {() => returnCurrentImage(currentImage)}      
        </>
    )
}