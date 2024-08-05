import { useState } from "react";

const openMenu: string =
  "flex flex-col translate-y-ful absolute top-10 left-0 right-0 bg-gray-800/90";
const closeMenu: string = "hidden translate-y-0";

const HeaderComponents: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      id="home"
      className="bg-slate-700 text-white p-2 relative md:static"
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold cursor-default">MT</div>

        <button onClick={toggleMenu} className="md:hidden text-2xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        <nav
          className={`md:flex md:static md:flex-row ${
            isMenuOpen ? openMenu : closeMenu
          } md:space-x-4`}
        >
          <a href="#home" className="block py-2 px-4 hover:bg-slate-600">
            Home
          </a>
          <a href="#portfolio" className="block py-2 px-4 hover:bg-slate-600">
            Portfolio
          </a>
          <a href="#contact" className="block py-2 px-4 hover:bg-slate-600">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default HeaderComponents;
