import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer className="p-4 rounded-lg shadow m-[5%]">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://flowbite.com/"
            className="flex items-center mb-4 sm:mb-0"
          >
            <Image src={"/logo.png"} width={220} height={150} alt="logo" />
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="/about" className="mr-4 hover:underline md:mr-6 ">
                Acerca de
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contacto
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          <a href="/" className="hover:underline">
            Instituo Leyer's
          </a>
        </span>
      </footer>
    </>
  );
};

export default Footer;
