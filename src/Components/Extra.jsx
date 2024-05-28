function Extra() {
  return (
    <div
      id="extra"
      className="extracurriculars-container relative py-16 bg-blue-200 min-h-screen transition-colors duration-300 dark:bg-gray-900 dark:text-gray-300 flex flex-col items-center w-full"
    >
      <h2 className="text-4xl text-center font-bold mb-12">
        Extracurriculars and Misc.
      </h2>
      <div className="extracurriculars-content flex flex-col md:flex-row justify-center items-center gap-10 w-full max-w-4xl px-4">
        <div className="extracurriculars-info flex-1 space-y-3">
          <p>
            <strong>Hackathons:</strong> Participated in multiple hackathons
            such as Citrushack and Cutiehack
          </p>
          <p>
            <strong>Coding Clubs:</strong>
            <ul>
              <li>Joined the CareerCipher club at UCR.</li>
              <li>Joined the coding club in high school.</li>
            </ul>
          </p>
          <p>
            <strong>Awards:</strong>
            <ul>
              <li>
                Seal of Biliteracy awarded for Spanish on high school diploma by
                the state of California
              </li>
              <li>
                AP Scholar with Distinction awarded for scoring a 3 or more on
                at least 5 AP tests
              </li>
            </ul>
          </p>
          <p>
            <strong>Employment History:</strong> Worked at Shogun as a food prep
            from July 2021 to February 2023. Responsibilites included keeping
            the kitchen clean, preparing orders for the teppanyaki chefs to use,
            and preparing food such as vegetables and noodles for the chefs.
          </p>
        </div>
      </div>
      <div className="gradient-bottom absolute bottom-0 left-0 w-full h-20 bg-gradient-to-b from-transparent to-blue-100 dark:to-blue-900"></div>
    </div>
  );
}

export default Extra;
