import React from "react";

const FaceRecognition = ({ imageUrl }) => {
    return (
        <div className='center'>
            <div className="absolute mt4">
            <img alt='' src = {imageUrl} width='500px' height='a  uto'/>
            </div>
        </div> 
    );
}


export default FaceRecognition;