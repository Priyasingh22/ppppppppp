import React from "react";

const Sresult = (props) => {
    const img =    `https://source.unsplash.com/random/1200x800/?wallpaper,landscape ${props.name} `;
    return ( 
        <>
        <img src={img} alt="randompic" />
        </>
     );
}
 
export default Sresult;