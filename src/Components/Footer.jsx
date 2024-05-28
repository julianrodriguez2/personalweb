/* eslint-disable react/no-unescaped-entities */
function Footer() {
  return (
    <div className="footer bg-white text-gray-800 dark:bg-gray-900 dark:text-white p-5 text-center text-sm border-t border-gray-300 dark:border-gray-700 relative transition-colors duration-2000">
      <button
        className="top-button bg-blue-600 dark:bg-blue-700 text-white px-4 py-2 rounded cursor-pointer mx-auto mb-5 transition-colors duration-300 hover:bg-blue-500 dark:hover:bg-blue-600"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        Back to Top
      </button>

      <div className="footer-content mt-5">
        Copyright © 2023 Created by Julian Rodriguez | Github:
        <a
          href="https://github.com/julianrodriguez2"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-1 hover:text-gray-600 dark:hover:text-gray-400 underline transition-colors duration-200"
        >
          julianrodriguez2
        </a>{" "}
        | Code for this project:
        <a
          href="https://github.com/julianrodriguez2/personalweb"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-1 hover:text-gray-600 dark:hover:text-gray-400 underline transition-colors duration-200"
        >
          This website's Github repo
        </a>
      </div>
    </div>
  );
}

export default Footer;
