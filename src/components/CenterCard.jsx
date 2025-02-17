import React from "react";

function CenterCard() {
    return (
        <div className="h-full bg-white rounded-3xl overflow-hidden">
            <img
                loading="lazy"
                src="${import.meta.env.BASE_URL}poe-icon.jpg"
                className="w-full h-full object-cover"
                alt="Self Image"
            />
        </div>
    );
}

export default CenterCard;