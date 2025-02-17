import React, { useState } from "react";
import SocialsCard from "./SocialsCard";
import SkillsCard from "./SkillsCard";
import ProjectCard from "./ProjectCard";
import { useNavigate } from 'react-router-dom';

function SidebarSection() {
    const navigate = useNavigate();
    
    const [hoveredIndex, setHoveredIndex] = useState(null);
    
    const projects = [
        {
            title: "mindEase",
            imageSrc: "/mindease.jpg",
            url: "https://www.linkedin.com/in/prateekmp/details/projects/"
        },
        {
            title: "T5 summariser",
            imageSrc: "/summariser.jpg",
            url: "https://ezahpizza-summarizer.streamlit.app"
        },
        {
            title: "T5 translator",
            imageSrc: "/translator.jpg",
            url: "https://ezahpizza-text-translation.streamlit.app"
        },
        {
            title: "BERT question-answerer",
            imageSrc: "/qa.jpg",
            url: "https://ezahpizza-bert-q-a.streamlit.app/?"
        }
    ];

    const handleProjectClick = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <aside className="flex flex-col ml-5 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col justify-between min-h-screen text-black max-md:mt-7 max-md:max-w-full">
                <div className="flex overflow-hidden flex-col px-6 py-10 w-full text-2xl font-medium bg-accent rounded-3xl max-md:px-5 max-md:max-w-full">
                    <h2 className="self-start text-6xl font-medium max-md:mt-10 max-md:text-4xl">Projects</h2>
                    {projects.map((project, index) => (
                        <div 
                            key={index} 
                            className={`transition-all duration-300 ${
                                index === 0 ? 'h-auto' : 
                                hoveredIndex === index ? 'h-auto' : 'h-16'
                            } italic font-light mt-5 first:mt-0 relative`}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <div className="flex justify-between items-center">
                                <ProjectCard 
                                    title={project.title}
                                    imageSrc={project.imageSrc}
                                />
                                <button 
                                    onClick={() => handleProjectClick(project.url)}
                                    className="flex items-center gap-2 text-header hover:text-purple-800 transition-colors duration-200"
                                    aria-label={`Visit ${project.title} project`}
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}        
                </div>
                
                <div className="mt-4 mb-2 flex justify-center w-full">
                    <div className="w-full h-14 bg-accent rounded-2xl flex items-center justify-center overflow-hidden font-semibold">
                        Come check out my art gallery
                        <div className="flex gap-10 justify-between items-end text-base font-light">
                            <button 
                                onClick={() => navigate('/GalleryPage')}
                                className="flex items-center gap-2 text-header hover:text-purple-800"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                
                <div className="mt-2 flex flex-col">
                    <SkillsCard />
                    <SocialsCard />
                </div>
            </div>
        </aside>
    );
}

export default SidebarSection;