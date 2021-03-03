import './styles.scss';
import React from "react";

function TextLoader(props) {
    const {className} = props;

    return (
        <div className={`loader ${className}`}>
            <p className='loader__text'>Gathering data</p>
            <span className="loader__dot">.</span>
            <span className="loader__dot">.</span>
            <span className="loader__dot">.</span>
        </div>
    );
}

export default TextLoader;
