import React from "react";
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();

    return (
        <div className="fixed top-4 left-0 right-0 z-50">
            <nav className="mx-auto max-w-[95%] bg-header rounded-2xl shadow-lg py-5 px-5">
                <div className="flex justify-between items-center">
                    {/* Logo Section */}
                    <div className="mt-2 flex items-center gap-2">
                    <button 
                        onClick={() => navigate('/')}>
                            <img 
                            src="\src\public\prateek-text-logo.svg" 
                            alt="Prateek Logo" 
                            className="ml-6 h-8 max-md:ml-2" 
                        />
                        </button>
                        
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;