import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="bg-white font-inter flex justify-center">
      <div className="mx-auto px-4 py-16 flex flex-col md:flex-row items-center sm:px-8 md:py-10">
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 font-epilogue">
            Instituto de rehablitación para ciegos y débiles visuales
          </h1>
          <p className="text-xl mb-8">
            Providing quality education and support for the visually impaired
            community
          </p>
          <button className="bg-[#b8e8fc] text-black rounded py-2 px-4 shadow-lg hover:bg-blue-700">
            Learn More
          </button>
        </div>
        <div className="md:w-1/2 pt-[10%] relative flex justify-center items-center">
          <Image
            src="/book-braile.jpg"
            alt="image-braile"
            width={290}
            height={500}
            className="shadow-md"
          />
          <Image
            src="/computer.jpeg"
            alt="computer"
            width={140}
            height={500}
            className="absolute top-3/4 left-3/4 transform -translate-x-1/2 -translate-y-1/2 shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
