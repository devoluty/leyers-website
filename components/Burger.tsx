import { use, useState } from "react";

export default function Burger() {
  const [open, setOpen] = useState(false);
  if (open) {
    return (
      <div className="flex justify-end flex-col">
        <div>
          <i
            className="fa-solid fa-xmark text-lg cursor-pointer"
            onClick={() => setOpen(false)}
          ></i>
        </div>
        <div>
          <ul>
            <li className="cursor-pointer">
              <a href="/contact">Contacto</a>
            </li>
            <li className="cursor-pointer">
              <a href="/contact">Llamar Ahora</a>
            </li>
            <li className="cursor-pointer">
              <a href="/contact">Cómo llegar</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <>
      <i
        className="fa-solid fa-bars text-lg cursor-pointer"
        onClick={() => setOpen(true)}
      ></i>
    </>
  );
}
