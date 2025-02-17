import { useEffect, useState } from 'react';
import CenterCard from '../components/CenterCard';

export function LoadingScreen({ onLoadingComplete }) {
    const [isPressed, setIsPressed] = useState(false);
    const [isSliding, setIsSliding] = useState(false);

    useEffect(() => {
        // Start with button press animation after 1.5 seconds
        const pressTimer = setTimeout(() => {
            setIsPressed(true);
        }, 1000);

        // Start sliding animation after press
        const slideTimer = setTimeout(() => {
            setIsSliding(true);
        }, 2000);

        // Complete loading after slide animation finishes
        const completeTimer = setTimeout(() => {
            onLoadingComplete();
        }, 3000);

        return () => {
            clearTimeout(pressTimer);
            clearTimeout(slideTimer);
            clearTimeout(completeTimer);
        };
    }, [onLoadingComplete]);

    return (
        <div className="fixed inset-0 bg-background flex items-center justify-center z-50 overflow-hidden">
            <div 
                className={`transition-all duration-1000 ease-in-out transform
                    ${!isPressed ? 'scale-[0.7]' : 'scale-[0.5]'}
                    ${isSliding ? 'translate-x-[200vw]' : 'translate-x-0'}
                `}
                style={{
                    transitionProperty: 'all',
                    transitionDuration: isSliding ? '2000ms' : '1000ms',
                    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
                }}
            >
                <CenterCard />
            </div>
        </div>
    );
}