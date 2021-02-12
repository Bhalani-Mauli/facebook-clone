import React from "react";
import "./Widgets.css";

function Widgets() {
    return (
        <div className="Widgets">
            <iframe
                src="https://cvdesign.mobi/?gclid=Cj0KCQiAyJOBBhDCARIsAJG2h5e-UNazbzOqkF_AfIK_LkgDCNH_Umh9bU65r2jp7X35VZsrU0Ts5z0aAqqCEALw_wcB"
                width="340"
                height="100%"
                style={{ border:"none", overflow:"hidden" }}
                scrolling="no"
                frameBorder="0"
                allowTransparency="true"
                allow="encrypted-media"
            >
            </iframe>
        </div>
    )
}

export default Widgets;