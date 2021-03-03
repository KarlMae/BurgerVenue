import './styles.scss';
import React from "react";
import TextLoader from "../TextLoader/TextLoader";

function Header(props) {
    const {isLoading} = props;

    return (
        <div className='header'>
            <h3 className='header__title'>Venues</h3>
            {isLoading && <TextLoader className='header__loading-notification'/>}
        </div>
    );
}

export default Header;
