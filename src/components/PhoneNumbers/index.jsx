import React from "react";
import "./index.css";

const PhoneNumbers = () => {
    return (
        <div className="phone-numbers">
            {
                [
                    { number: "+37494575732", display: "+374 94 57 57 32" },
                    { number: "+37494575752", display: "+374 94 57 57 52" }
                ].map((phone, index) => (
                    <a key={index} className="phone" href={`tel:${phone.number}`}>
                        <i className="fa fa-volume-control-phone" aria-hidden="true"></i>
                        {phone.display}
                    </a>
                ))
            }
        </div>
    )
}
export default PhoneNumbers;