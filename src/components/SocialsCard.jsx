import React from "react";

function SocialsCard() {
    return (
        <nav className="flex overflow-hidden flex-col justify-center px-14 py-6 mt-4 w-full text-base font-light uppercase whitespace-nowrap bg-accent rounded-2xl max-md:px-5 max-md:max-w-full">
            <ul className="flex gap-10 justify-between items-center">
                <li className="self-stretch my-auto">
                <a href="https://github.com/ezahpizza" target="_blank" rel="noopener noreferrer">GitHub</a>
                </li>
                <li className="self-stretch my-auto">
                <a href="https://www.behance.net/prateekmohapat" target="_blank" rel="noopener noreferrer">Behance</a>
                </li>
                <li className="self-stretch my-auto">
                <a href="https://www.linkedin.com/in/prateekmp/" target="_blank" rel="noopener noreferrer">Linkedin</a>
                </li>
            </ul>
        </nav>
    );
}

export default SocialsCard;