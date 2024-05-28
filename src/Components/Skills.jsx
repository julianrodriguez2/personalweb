/* eslint-disable react/prop-types */
import SKILLS_DATA from "./SkillsData";

function Skills() {
  return (
    <div
      id="skills"
      className="skills-container relative py-16 bg-blue-300 h-screen transition-colors duration-300 dark:bg-gray-800 dark:text-gray-300"
    >
      <h2 className="text-4xl text-center font-bold mb-12">Skills</h2>
      <div className="skills-section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-5">
        {Object.entries(SKILLS_DATA).map(([title, items], index) => (
          <SkillBox key={index} title={title} items={items} />
        ))}
      </div>
      <div className="gradient-bottom absolute bottom-0 left-0 w-full h-20 bg-gradient-to-b from-transparent to-blue-100 dark:to-blue-900"></div>
    </div>
  );
}

function SkillBox({ title, items }) {
  return (
    <div className="skill-box bg-white dark:bg-gray-600 rounded-lg shadow-lg p-6">
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <div className="skills-grid grid grid-cols-3 gap-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="skill-item flex flex-col items-center justify-center border border-gray-300 dark:border-gray-700 rounded-lg p-4 hover:scale-105 hover:shadow-md transition-transform duration-300"
          >
            {item.logo ? (
              <img
                src={item.logo}
                alt={`${item.name} Logo`}
                className="w-16 h-16 object-contain mb-3"
              />
            ) : (
              <div className="w-16 h-16 flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded-full mb-3">
                <span className="text-lg font-medium text-gray-800 dark:text-gray-300">
                  ?
                </span>
              </div>
            )}
            <div className="skill-title text-sm font-medium text-center">
              {item.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
