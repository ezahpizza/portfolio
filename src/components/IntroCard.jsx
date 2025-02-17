import React from "react";

function IntroCard() {
    return (
        <section className="max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col max-md:ml-0 max-md:w-full">
                    <div className="flex overflow-hidden flex-col grow px-6 pt-9 pb-20 w-full text-6xl font-bold text-black bg-primary rounded-3xl leading-[56px] max-md:px-5 max-md:mt-6 max-md:max-w-full max-md:text-4xl max-md:leading-10">
                        <img
                            loading="lazy"
                            src="${import.meta.env.BASE_URL}pentacle.svg"
                            className="object-contain self-end max-w-full aspect-square w-[119px] animate-[spin_5500ms_ease-in-out]"
                            alt=""
                        />
                        <h2 className="mt-20 mr-9 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full max-md:text-4xl max-md:leading-10">
                            Artist Redefining{" "}
                            <span className="italic font-light">Architecture</span> Merging Code and Creative Innovation 
                        </h2>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default IntroCard;