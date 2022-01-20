import React from "react";
import preloader from '../../assets/images/preloader.gif'
let Preloader = (props) => {
    return (
        <div
            style={{
                position: "absolute",
                height: "100vh",
                width: "100%",
                display: "grid",
                placeItems: "center",

            }}
        >
            <img
                src={preloader}
                alt="preloader"
                width="150px"

            />
        </div>
    );
};

export default Preloader;