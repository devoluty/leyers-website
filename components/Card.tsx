export const Card = () => {
  return (
    <div className="max-w-screen-lg mx-auto my-10 px-4">
      <div className="relative">
        <div className="bg-gray-100 p-4 rounded-md shadow-md">
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
      </div>
      <div className="flex justify-center mt-4">
        <button
          className="mr-2 rounded-full bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4"
          onClick={handlePrev}
        >
          Prev
        </button>
        <button
          className="rounded-full bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};
