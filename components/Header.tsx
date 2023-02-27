import Image from "next/image";

const Header = () => {
  return (
    <div className="lg:px-24 px-6 py-5 pb-2 flex justify-between font-epilogue">
      <div className="justify-center items-center">
        <a href="/">
          <h1 className="text-4xl font-epilogue">Instituto Leyer's</h1>
        </a>
      </div>
      <div className="hidden justify-center items-center sm:flex">
        <a
          className="text-md text-gray-900 mr-7 hover:text-gray-700"
          target="_blank"
          href="https://www.google.com/maps/dir//INSTITUTO+DE+REHABILITACI%C3%93N+PARA+CIEGOS+LEYER%27S+DE/data=!4m8!4m7!1m0!1m5!1m1!1s0x85cfc0eb827491f7:0x21e85ac66ee26827!2m2!1d-98.1933754!2d19.0347305"
        >
          <i className="fa-regular fa-compass text-md text-gray-900 m-1"></i>
          Cómo llegar
        </a>
        <a
          className="text-md text-gray-900 mr-7 hover:text-gray-700"
          href="tel:+52-222-274-2075"
        >
          <i className="fa-solid fa-phone text-md m-1"></i>Llamar ahora
        </a>
        <a
          className="text-md text-gray-900 hover:text-gray-700 m-1"
          href="/contact"
        >
          <i className="fa-solid fa-file-lines m-1"></i>Contacto
        </a>
      </div>
    </div>
  );
};

export default Header;
