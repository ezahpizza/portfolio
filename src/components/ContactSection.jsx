import React from "react";
import { useNavigate } from 'react-router-dom';

function ContactSection() {
    const navigate = useNavigate();
    return (
        <section className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex overflow-hidden flex-col px-6 py-10 h-full mx-auto w-full text-black bg-accent rounded-3xl max-md:px-5 max-md:mt-6 max-md:max-w-full">
                <div className="flex justify-end">
                    <img
                        loading="lazy"
                        src="\src\public\pentacle.svg"
                        className="object-contain self-end max-w-full aspect-square w-[119px] animate-[spin_5500ms_ease-in-out]"
                        alt=""
                    />
                </div>
                <div className="flex items-center gap-4 mt-auto max-md:mt-10">
                    <h2 className="text-6xl font-medium max-md:text-4xl">
                            <p className="py-2 text-2xl italic font-light">Got a question?</p>
                            Contact me
                    </h2>
                    <button 
                        onClick={() => navigate('/ContactPage')}
                        className="flex items-center text-header hover:text-purple-800"
                    >
                        <svg className="mt-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default ContactSection;