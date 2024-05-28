import { Link } from "react-scroll";
import { FiSun, FiMoon } from "react-icons/fi";

function Header() {
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="flex justify-between items-center p-2 px-5 fixed top-0 left-0 w-full z-50 shadow-md transition-colors duration-500 ease-in-out bg-white dark:bg-gray-800 text-primary">
      <div className="flex space-x-4 md:space-x-5">
        {["home", "about", "skills", "projects", "extra", "contact"].map(
          (item) => (
            <Link
              key={item}
              className="cursor-pointer transition-colors duration-300 ease-in-out font-semibold hover:text-blue-600 dark:hover:text-blue-400 text-gray-800 dark:text-white"
              to={item}
              spy={true}
              smooth={true}
              duration={500}
              offset={-50}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          )
        )}
      </div>

      <button
        onClick={toggleDarkMode}
        className="flex items-center justify-center w-10 h-10 rounded-full focus:outline-none focus:ring transition duration-500 ease-in-out bg-gray-300 dark:bg-gray-700"
      >
        <FiMoon className="text-blue-600 dark:hidden" size={24} />
        <FiSun className="text-yellow-500 hidden dark:inline" size={24} />
      </button>
    </div>
  );
}

export default Header;
