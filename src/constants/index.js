import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  skillop,
  dp,
  eythor,
  solidity,
  metamask,
  ethereum,
  threejs,
  sk,
  dpcertificate,
  et,
  weather,
  zeesh,
  defake,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Blockchain Developer",
    icon: mobile,
  },
  {
    title: "Software Developer",
    icon: creator,
  },
];

const technologies = [
 
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "typescript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "solidity",
    icon: solidity,
  },
  {
   name: "metamask",
   icon: metamask,
  },
  {
    name: "ethereum",
    icon: ethereum,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "SkillOp",
    icon: skillop,  // Replaced starbucks with skillop
    iconBg: "#383E56",
    date: "December 2023 - February 2024",
    points: [
      "Worked as a Frontend Developer with React.js in the college society, SkillOp, contributing to the development and maintenance of the website.",
      "Focused on making the website fully responsive, ensuring an optimal experience across all devices.",
      "Updated the website’s CSS to enhance visual appeal and improve user experience.",
      "Collaborated with the team to implement new features and create dynamic, reusable React components for improved site performance and maintainability.",
    ],
  }
  ,
  {
    title: "Junior Backend Developer",
    company_name: "Delhi Police",
    icon: dp,
    iconBg: "#E6DEDD",
    date: "March 2024 - August 2024",
    points: [
      "Authentication Implementation: Developed and maintained secure user authentication mechanisms, ensuring the safe management of sensitive data and smooth user access across various services.",
      "API Development & Integration: Designed and optimized RESTful APIs for seamless data communication between the backend and frontend, enhancing application functionality and performance.",
      "Data Security & Compliance: Ensured adherence to industry best practices and legal requirements for data privacy and security, particularly related to government services",
      "Collaboration & Support: Worked closely with cross-functional teams to support the integration of backend systems, resolving technical issues, and ensuring consistent service delivery.",
    ],
  },
  {
    title: "Backend Developer",
    company_name: "Eythor",
    icon: eythor,
    iconBg: "#383E56",
    date: "Nov 2024 - Jan 2025",
    points: [
      "Authentication & User Management: Implemented secure authentication protocols to ensure authorized access and protect user data within the Eythor platform.",
      "API Development & Integration: Designed and maintained efficient APIs to facilitate smooth communication between the backend and various system components, including robot data fetching.",
      "Data Fetching & Processing: Developed backend systems to collect and process real-time data from robots, ensuring accurate and timely information retrieval.",
      "Data Visualization: Collaborated with the frontend team to transform raw robot data into visually engaging pie charts, providing users with intuitive and actionable insights.",
    ],
  },
  
];

const certificates = [
  {
    title: "Certified Web Developer",
    image: sk,
  },
  {
    title: "Delhi Police Internship Certification",
    image: dpcertificate,
  },
  // {
  //   title: "Smart India Hackathon Internal Round Certification",
  //   image: skillop,
  // },
  {
    title: "Software Developer Internship Offer - Eythor Technologies",
    image: et,
  }
];


const projects = [
  {
    name: "Weather2.0",
    description:"Weather2.0 is a sleek and user-friendly weather application built with React. It provides real-time weather updates, including temperature, humidity, wind speed, and a 5-day forecast. Designed with a responsive interface and intuitive navigation, WeatherScope offers accurate, location-based weather data, helping users stay prepared for any conditions.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "axios",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: weather,
    source_code_link: "https://github.com/NAME-ASHWANIYADAV/weather2.0",
  },
  {
    name: "Zeesh",
    description:
      "Zeesh is a sleek and modern restaurant reservation app crafted with React, designed to simplify dining experiences. With Zeesh, users can effortlessly discover restaurants, browse menus, and secure their reservations in just a few clicks. The app combines intuitive navigation with real-time booking updates, ensuring a seamless and delightful experience for food enthusiasts and restaurant owners alike.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Axios",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: zeesh,
    source_code_link: "https://github.com/NAME-ASHWANIYADAV/restaurantreservationfrontend",
  },
  {
    name: "Defake.ai",
    description:
      "DeFake.ai analyzes videos to identify deepfake manipulations by detecting inconsistencies in both visual and audio patterns. It performs real-time analysis, providing users with a confidence score indicating the likelihood of deepfake content. The tool helps users and organizations verify content authenticity, making it a valuable resource against misinformation.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "solidity",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: defake,
    source_code_link: "https://github.com/NAME-ASHWANIYADAV/fakifyfrontend",
  },
];

export { services, technologies, experiences, certificates, projects };
