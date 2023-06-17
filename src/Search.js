import React from "react";
import { useState } from "react";
import Sresult from './Sresult';

const Search = () => {
    const [img, setImg] = useState("");

    const inputEvent = (event) => {
        const data = event.target.value;
        console.log(data);
        setImg(data);
    }

    return (
        <>
            <h1>hye, i am searching something,could u help me  to find .......</h1>
            <div className="searchbar">
                <input type="text"
                    placeholder="search anything....."
                    value={img}
                    onChange={inputEvent} />
                {img === "" ? null : <Sresult name={img} />}
            </div>
        </>
    );
}

export default Search;