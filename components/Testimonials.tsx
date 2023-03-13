import { useState } from "react";
import { Testimonial } from "@/types";

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Chivis C.",
    date: "Hace 5 años",
    text: "Siempre es bueno tener tienda para todas las personas, un buen aporte aquí en puebla.",
    rating: 5,
  },
  {
    id: 2,
    name: "Mat S.",
    date: "Hace 7 años",
    text: "Atención profesional y amable sin fines de lucro. Aprendi como funciona el ábaco y la tabla matemática.",
    rating: 5,
  },
  {
    id: 3,
    name: "julio G.",
    date: "Hace 7 años",
    text: "Excelente atención y cuentan con tienda de material para ciegos.",
    rating: 5,
  },
  {
    id: 4,
    name: "Jośe A.",
    date: "Hace 2 años",
    text: "Siempre. Atentos",
    rating: 5,
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [direction, setDirection] = useState<"next" | "prev" | null>(null);

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
    setDirection("next");
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    setDirection("prev");
  };

  const activeTestimonial = testimonials[activeIndex];

  return (
    <>
      <div className="m-5 flex justify-center items-center">
        <h1 className="font-epilogue font-bold text-3xl p-5">Testimonios</h1>
      </div>
      <div className="flex justify-center items-center flex-col mt-10 mb-10">
        <div className="bg-slate-50 p-4 rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <div className="text-gray-500 text-sm">
              {activeTestimonial.date}
            </div>
            <div className="flex">
              {Array.from({ length: activeTestimonial.rating }).map((_, i) => (
                <i key={i} className="fas fa-star text-yellow-500"></i>
              ))}
            </div>
          </div>

          <p className="text-gray-800 text-lg mb-4">{activeTestimonial.text}</p>
          <div className="text-gray-600 font-medium">
            {activeTestimonial.name}
          </div>
        </div>

        <div className="flex justify-center mt-4">
          <button onClick={handlePrev}>
            <i className="fa-solid fa-arrow-left text-lg p-5 bg-slate-50 rounded-lg m-2"></i>
          </button>
          <button onClick={handleNext}>
            <i className="fa-solid fa-arrow-right text-lg p-5 bg-slate-50 rounded-lg m-2"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
