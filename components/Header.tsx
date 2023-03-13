import Burger from "@/components/Burger";

const Header = () => {
  return (
    <div className="flex justify-between">
      <div className="justify-center items-center">
        <a href="/">
          <h1 className="text-4xl font-epilogue font-bold">
            Instituto Leyer's
          </h1>
        </a>
      </div>
      <div className="flex md:hidden justify-center items-center">
        <Burger />
      </div>
      <div className="hidden justify-center items-center md:flex">
        <a
          className="text-md mr-6 text-[#1e1e1e] hover:text-white hover:bg-[#EE2E31] rounded-md p-2 shadow-sm"
          target="_blank"
          href="https://www.google.com/maps/dir//INSTITUTO+DE+REHABILITACI%C3%93N+PARA+CIEGOS+LEYER%27S+DE/data=!4m8!4m7!1m0!1m5!1m1!1s0x85cfc0eb827491f7:0x21e85ac66ee26827!2m2!1d-98.1933754!2d19.0347305"
        >
          <i className="fa-regular fa-compass text-md m-1 pr-2 shadow-sm"></i>
          Cómo llegar
        </a>
        <a
          className="text-md text-[#1e1e1e] hover:text-white mr-6 hover:bg-[#EE2E31] rounded-md p-2 shadow-sm"
          href="tel:+52-222-274-2075"
        >
          <i className="fa-solid fa-phone text-md m-1 pr-2 shadow-sm"></i>Llamar
          ahora
        </a>
        <a
          className="text-md m-1 bg-[#EE2E31] text-white rounded-md p-2 shadow-sm"
          href="/contact"
        >
          <i className="fa-solid fa-file-lines m-1 pr-2 shadow-sm"></i>Contacto
        </a>
      </div>
    </div>
  );
};

export default Header;
