import MyResume from "../assets/Julian_Rodriguez_Resume.pdf";

function AboutMe() {
  return (
    <div
      id="about"
      className="about-section relative flex flex-col items-center py-16 text-center transition-colors duration-200 h-screen dark:bg-gray-900 dark:text-gray-100 bg-blue-200 text-gray-800"
    >
      <h2 className="text-4xl text-center font-bold mb-12">About Me</h2>
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="flex flex-col items-center md:items-start">
          <p className="mt-4 px-6">
            Hello, my name is Julian and I am pursuing a degree in Computer
            Science with Business Applications at University of California -
            Riverside. My passion is web development with a focus on both the
            frontend and the backend.
          </p>
          <p className="mt-4 px-6">
            Here is what I achieved so far and what I hope to achieve in the
            future:
            <ul className="list-disc list-inside mt-2">
              <li>
                Currently developing several personal projects such as a meal
                planning website, a Discord bot, and a mock e-commerce website.
              </li>
              <li>Participated in hackathons such as Citrushack</li>
              <li>Aiming to achieve an internship at a tech company</li>
            </ul>
          </p>
          <p className="mt-4 px-6">
            <strong>Academic History:</strong>
            <ul className="list-disc list-inside mt-2">
              <li>
                Bachelor of Science in Computer Science with Business
                Applications, University of California Riverside, expected
                graduation in May 2025.
              </li>
              <li>High School Diploma, Centennial High School, May 2021.</li>
              <li>
                Relevant Coursework: Data Structures and Algorithms, Web
                Development, Database Management, and Software Engineering,
                Computer Security.
              </li>
            </ul>
          </p>
          <div className="flex justify-center w-full mt-4">
            <a
              href={MyResume}
              className="px-6 py-3 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 transition-colors duration-300"
            >
              View My Resume
            </a>
          </div>
        </div>
      </div>
      <div className="gradient-bottom absolute bottom-0 left-0 w-full h-20 bg-gradient-to-b from-transparent to-blue-300 dark:to-gray-800"></div>
    </div>
  );
}

export default AboutMe;
