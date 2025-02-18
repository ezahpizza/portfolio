import React from "react";

function SkillsCard() {
    const skills = [
        { src: "/fastapi.svg", alt: "FastAPI" },
        { src: "/react.svg", alt: "ReactJS" },
        { src: "/mongodb.svg", alt: "MongoDB" },
        { src: "/tensorflow.svg", alt: "TensorFlow" },
        { src: "/pytorch.svg", alt: "PyTorch" },
        { src: "/tailwindcss.svg", alt: "TailwindCSS" }
    ];

    return (
        <div className="flex overflow-hidden flex-col px-6 pt-8 pb-10 w-full text-black bg-accent rounded-3xl max-md:px-5">
            <div className="flex gap-10 justify-between items-end text-base font-light">
                <h2 className="self-start text-2xl font-medium max-md:mt-6 max-md:text-4xl">
                    Primary Tech Stack
                </h2>
            </div>         
            <div className="grid grid-cols-3 gap-8 mt-4 justify-items-center">
                {skills.map((skill, index) => (
                    <div 
                        key={index} 
                        className="group relative"
                    >
                        <div className="transition-transform duration-300 group-hover:-translate-y-1">
                            <img
                                loading="lazy"
                                src={skill.src}
                                className="object-contain self-end max-w-full bg-header object-cover rounded-full border-14 border-header aspect-square w-[119px] animate-[spin_5500ms_ease-in-out]"
                                alt={skill.alt}
                            />
                        </div>
                        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="whitespace-nowrap bg-primary text-white px-2 py-1 rounded text-sm">
                                {skill.alt}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SkillsCard;