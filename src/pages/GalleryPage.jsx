import React, {useState} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { LoadingScreen } from './LoadingScreen';

function GalleryPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [showContent, setShowContent] = useState(false);
    const [animations, setAnimations] = useState({
        grid1: false,
        grid2: false,
        grid3: false,
        header: false,
        footer: false
    });

    const handleLoadingComplete = () => {
        setIsLoading(false);
        setShowContent(true);
        triggerAnimations();
    };

    const triggerAnimations = () => {
        const delays = {
            header: 150,
            grid1: 300,
            grid2: 450,
            grid3: 600,
            footer: 750
        };

        Object.entries(delays).forEach(([key, delay]) => {
            setTimeout(() => {
                setAnimations(prev => ({ ...prev, [key]: true }));
            }, delay);
        });
    };

    return (
        <div className="min-h-screen bg-background relative">
            {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
            
            <div className={`transition-opacity duration-300 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
                <div className={`transition-transform duration-700 ease-out ${animations.header ? 'translate-x-0' : '-translate-x-full'}`}>
                    <Header />
                </div>

                <div className="px-4 md:px-8 py-8 md:py-14 max-w-[1800px] mx-auto">
                    <main className="mt-24 md:mt-14 grid grid-cols-1 md:grid-cols-12 gap-4 min-h-screen">
                        {/* First Row */}
                        <div className={`md:col-span-8 md:row-span-2 h-64 md:h-auto bg-card rounded-lg overflow-hidden transition-transform duration-700 ease-out ${animations.grid1 ? 'translate-x-0' : '-translate-x-full'}`}>
                            <img 
                                src="\effulgent.png"
                                alt="Featured Artwork"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className={`md:col-span-4 h-64 md:h-auto bg-card rounded-lg overflow-hidden transition-transform duration-700 ease-out ${animations.grid1 ? 'translate-x-0' : '-translate-x-full'}`}>
                            <img 
                                src="\akira.jpg"
                                alt="Artwork 2"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Second Row */}
                        <div className={`md:col-span-4 md:row-span-2 h-64 md:h-auto bg-card rounded-lg overflow-hidden transition-transform duration-700 ease-out ${animations.grid2 ? 'translate-x-0' : '-translate-x-full'}`}>
                            <img 
                                src="\mirror.png"
                                alt="Artwork 3"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className={`md:col-span-4 h-64 md:h-auto bg-card rounded-lg overflow-hidden transition-transform duration-700 ease-out ${animations.grid2 ? 'translate-x-0' : '-translate-x-full'}`}>
                            <img 
                                src="\koi.png"
                                alt="Artwork 4"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className={`md:col-span-4 h-64 md:h-auto bg-card rounded-lg overflow-hidden transition-transform duration-700 ease-out ${animations.grid2 ? 'translate-x-0' : '-translate-x-full'}`}>
                            <img 
                                src="\koi_og.jpg"
                                alt="Artwork 4"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Third Row */}
                        <div className={`md:col-span-6 h-64 md:h-auto bg-card rounded-lg overflow-hidden transition-transform duration-700 ease-out ${animations.grid3 ? 'translate-x-0' : '-translate-x-full'}`}>
                            <img 
                                src="\duotone.png"
                                alt="Artwork 5"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className={`md:col-span-6 h-64 md:h-auto bg-card rounded-lg overflow-hidden transition-transform duration-700 ease-out ${animations.grid3 ? 'translate-x-0' : '-translate-x-full'}`}>
                            <img 
                                src="\rose.png"
                                alt="Artwork 6"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </main>
                </div>

                <div className={`transition-transform duration-700 ease-out ${animations.footer ? 'translate-x-0' : '-translate-x-full'}`}>
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default GalleryPage;