import './styles.scss';
import React from "react";

function InfoWindowContent(props) {
    const {header, text} = props;

    return (
        <div className='info-window'>
            <h3 className='info-window__header'>{header}</h3>
            <p className='info-window__text'>{text}</p>
        </div>
    );
}

export default InfoWindowContent;
