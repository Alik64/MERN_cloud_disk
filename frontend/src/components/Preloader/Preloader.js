import React from "react";
import './Preloader.css'
import preloader from '../../assets/images/preloader.gif'
let Preloader = (props) => {
    return (
        <div className="Preloader">
            <img
                src={preloader}
                alt="preloader"
                width="150px"

            />
        </div>
    );
};

export default Preloader;