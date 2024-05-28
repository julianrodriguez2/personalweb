import ReactLogo from "../assets/react-logo.png";
import JSLogo from "../assets/js-logo.png";
import MongoLogo from "../assets/mongo-logo.png";
import HTMLLogo from "../assets/html-logo.png";
import CSSLogo from "../assets/css-logo.png";
import CPPLogo from "../assets/cpp-logo.png";
import TailwindLogo from "../assets/tailwind-logo.png";
import GitLogo from "../assets/git-logo.png";
import ExcelLogo from "../assets/excel-logo.png";
import ReduxLogo from "../assets/redux-logo.png";
import NodeLogo from "../assets/node-js-logo.png";
import ExpressLogo from "../assets/express-js-logo.png";
import PostgresLogo from "../assets/postgres-logo.png";

const SKILLS_DATA = {
  "Front End": [
    { name: "React.js", logo: ReactLogo },
    { name: "Redux", logo: ReduxLogo },
    { name: "CSS", logo: CSSLogo },
    { name: "HTML", logo: HTMLLogo },
    { name: "Tailwind", logo: TailwindLogo },
  ],
  "Back End": [
    { name: "JavaScript", logo: JSLogo },
    { name: "C++", logo: CPPLogo },
    { name: "Node.js", logo: NodeLogo },
    { name: "Express.js", logo: ExpressLogo },
    { name: "MongoDB", logo: MongoLogo },
    { name: "PostgreSQL", logo: PostgresLogo },
  ],
  Miscellaneous: [
    { name: "Git", logo: GitLogo },
    { name: "Excel", logo: ExcelLogo },
  ],
};

export default SKILLS_DATA;
