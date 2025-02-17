import React from "react";

function SkillsCard() {
    const skills = [
        { src: "/src/public/fastapi.svg", alt: "FastAPI" },
        { src: "/src/public/react.svg", alt: "ReactJS" },
        { src: "/src/public/mongodb.svg", alt: "MongoDB" },
        { src: "/src/public/tensorflow.svg", alt: "TensorFlow" },
        { src: "/src/public/pytorch.svg", alt: "PyTorch" },
        { src: "/src/public/tailwindcss.svg", alt: "TailwindCSS" }
    ];

    return (
        <div className="flex overflow-hidden flex-col px-6 pt-8 pb-10 w-full text-black bg-accent rounded-3xl max-md:px-5">
            <div className="flex gap-10 justify-between items-end text-base font-light">
                <h2 className="self-start text-2xl font-medium max-md:mt-6 max-md:text-4xl">
                    Primary Tech Stack
                </h2>

            </div>         
            <div className="grid grid-cols-3 gap-4 mt-8 justify-items-center">
                {skills.map((skill, index) => (
                    <div 
                        key={index} 
                        className="transition-transform duration-300 hover:-translate-y-1"
                    >
                        <img
                            loading="lazy"
                            src={skill.src}
                            className="object-contain self-end max-w-full  bg-header object-cover rounded-full border-14 border-header aspect-square w-[119px] animate-[spin_5500ms_ease-in-out]"
                            alt={skill.alt}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SkillsCard;