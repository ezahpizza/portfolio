import React, { useState } from "react";

function ProjectCard({ title, imageSrc }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="w-full">
        <div 
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="flex gap-5 justify-between whitespace-nowrap">
                <h3 className="text-2xl font-medium">{title}</h3>
            </div>
            <div 
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
                isHovered ? "max-h-[300px] mt-5" : "max-h-0 mt-0"
            }`}
            >
            <img
                loading="lazy"
                src={imageSrc}
                className="object-contain w-full aspect-[1.48]"
                alt={`${title} project visualization`}
            />
            </div>
        </div>
        
        <hr className="shrink-0 mt-7 h-0.5 border-2 border-solid border-slate-700" />
        </div>
    );
}

export default ProjectCard;