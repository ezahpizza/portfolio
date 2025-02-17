import React from "react";

function AboutCard() {
  return (
    <section className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
      <div className="flex overflow-hidden flex-col grow items-start py-10 pr-20 pl-6 w-full text-xl font-light leading-6 text-black bg-secondary rounded-3xl max-md:px-5 max-md:mt-6 max-md:max-w-full">
        <p className="max-md:mt-8">
            Hello there, I am Prateek Mohapatra, an artist and developer bridging the architectural gap between art and technology. With over 3 years of experience in AI/ML architectures, I utilise the FaRM stack to craft dynamic applications while my background in digital art drives my creative intuition in creating visually compelling user experiences.
        </p>
        <img
            loading="lazy"
            src="/pentacle.svg"
            className="object-contain self-end max-w-full aspect-square w-[119px] animate-[spin_5500ms_ease-in-out]"
            alt=""
        />
      </div>
    </section>
  );
}

export default AboutCard;