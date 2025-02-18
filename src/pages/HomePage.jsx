import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import IntroCard from "../components/IntroCard";
import AboutCard from "../components/AboutCard";
import ContactSection from "../components/ContactSection";
import SidebarSection from "../components/SidebarSection";
import CenterCard from "../components/CenterCard";
import Footer from '../components/Footer';
import { LoadingScreen } from './LoadingScreen';

function HomePage() {
    const [isLoading, setIsLoading] = useState(true);
    const [showContent, setShowContent] = useState(false);
    const [animations, setAnimations] = useState({
        sidebar: false,
        header: false,
        footer: false,
        centerCard: false,
        aboutContact: false,
        intro: false
    });

    const handleLoadingComplete = () => {
        setIsLoading(false);
        setShowContent(true);
        triggerAnimations();
    };

    const triggerAnimations = () => {
        const delays = {
            sidebar: 0,
            header: 150,
            footer: 300,
            centerCard: 450,
            aboutContact: 600,
            intro: 750
        };

        Object.entries(delays).forEach(([key, delay]) => {
            setTimeout(() => {
                setAnimations(prev => ({ ...prev, [key]: true }));
            }, delay);
        });
    };

    return (
        <div className="min-h-screen bg-background relative flex flex-col">
            {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
            
            <div className={`transition-opacity duration-300 flex-1 flex flex-col ${showContent ? 'opacity-100' : 'opacity-0'}`}>
                <div className={`transition-transform duration-700 ease-out ${animations.header ? 'translate-x-0' : '-translate-x-full'}`}>
                    <Header />
                </div>
                
                <div className="px-8 py-14 max-w-[1800px] mx-auto flex-1 w-full">
                    <main className="mt-14 h-full flex flex-col max-md:max-w-full">
                        <div className="flex gap-2 max-md:flex-col flex-1">
                            <div className="flex flex-col w-[67%] max-md:ml-0 max-md:w-full">
                                <div className="flex gap-5 max-md:flex-col">
                                    <div className={`w-[63%] max-md:w-full transition-transform duration-700 ease-out ${animations.intro ? 'translate-x-0' : '-translate-x-full'}`}>
                                        <IntroCard />
                                    </div>
                                    <div className={`w-[37%] max-md:w-full transition-transform duration-700 ease-out ${animations.centerCard ? 'translate-x-0' : '-translate-x-full'}`}>
                                        <CenterCard />
                                    </div>
                                </div>
                            
                                <div className="mt-8 flex-1 max-md:max-w-full">
                                    <div className={`flex gap-1 max-md:flex-col h-full transition-transform duration-700 ease-out ${animations.aboutContact ? 'translate-x-0' : '-translate-x-full'}`}>
                                        <AboutCard />
                                        <ContactSection />
                                    </div>                              
                                </div> 
                            </div>
                            
                            <div className={`w-[33%] max-md:w-full flex transition-transform duration-700 ease-out ${animations.sidebar ? 'translate-x-0' : '-translate-x-full'}`}>
                                <SidebarSection />
                            </div>
                        </div>
                    </main>
                </div>
                
                <div className={`transition-transform duration-700 ease-out mt-auto ${animations.footer ? 'translate-x-0' : '-translate-x-full'}`}>
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default HomePage;