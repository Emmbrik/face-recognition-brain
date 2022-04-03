import React from "react";
import brain from "./brain.png";
import Tilt from "react-tilt";


const Logo = () => {
    return(
        <div className='ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 125, width: 125 }} >
                <div className="Tilt-inner pa3">
                    <img 
                    style={{paddingTop: '5px', width:'72px', height: '72px'}}
                    alt="logo"
                    src={brain}>
                    </img>
                    </div>
            </Tilt>
        </div>
    );
}

export default Logo;