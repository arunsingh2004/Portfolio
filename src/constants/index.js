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
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  logo,
  hackbrezze,
  inotebook,
  dsatracker,
  ecommerce,
  agricult,
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

// const services = [
//   {
//     title: "Web Developer",
//     icon: web,
//   },
//   {
//     title: "React Native Developer",
//     icon: mobile,
//   },
//   {
//     title: "Backend Developer",
//     icon: backend,
//   },
//   {
//     title: "Content Creator",
//     icon: creator,
//   },
// ];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Fronted Website",
    company_name: "Agricult",
    icon: logo,
    iconBg: "#383E56",
    date: " April 2023",
    points: [
      "Developing  web applications using React.js and other related technologies.",
      "Collaborating as a team to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other team member.",
    ],
  },
  {
    title: "DSA PRACTICE WEBAPP",
    company_name: "DSA tracker",
    icon: logo,
    iconBg: "#E6DEDD",
    date: "June 2021 - Present",
    points: [
      "Developing and maintaining web applications using React.js .",
      "450 DSA Sheet helps you build your confidence in solving any coding related question and helps you prepare for your placements",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "E-Commerce",
    company_name: "CoderWear",
    icon: shopify,
    iconBg: "#383E56",
    date: "July 2023 - August 2023",
    points: [
      "Developing and maintaining web applications using Nextjs ,TailwindCSS,MongoDB,Byscript,OAth,Integrate Payment Gateway",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Our website offers a seamless shopping experience powered by server-side rendering. ",
    ],
  },
  {
    title: "Full Stack WebApp",
    company_name: "INotebook",
    icon: mobile,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js ,Node.js and MongoDB,JWT,Byscript.",
      "So we made a online web platform where you can create,edit, upload,delete your notes/information privately and securely without any disturbancee,you can also access your notes anywhere in your world,at anytime time",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "AgriCult",
    description:
      "(AgriCult is Web based Application where Farmers can sell directly to consumers through this app that can help them bypass the intermediates and get a better place for their products.we also help them by connecting of farmers through a single platform so that they can set a particular market without getting manipulated )",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "BootStrap",
        color: "blue-text-gradient",
      },
    ],
    image: agricult,
    source_code_link: "https://github.com/arunsingh2004/AgriCult",
  },
  {
    name: "Hackbreeze",
    description:
      "(Hackbreeze is Next.js Web Application where hackathons events held where people come together to explore challenges, design solutions and build solutions )",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: hackbrezze,
    source_code_link: "https://github.com/arunsingh2004/Hackbreeze/tree/main",
  },

  {
    name: "INotebook",
    description:
      "(An online web platform where you can create, edit, upload, delete your notes/information privately and securely without anydisturbance. )",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongoDB",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "ByScript",
        color: "green-text-gradient",
      },
      {
        name: "JWT",
        color: "blue-text-gradient",
      },
    ],
    image: inotebook,
    source_code_link: "https://github.com/arunsingh2004/Cloud-Notebook",
  },
  {
    name: "DSA trcaker",
    description:
      "(An online web platform where you can Track your DSA progress and make note on particular question )",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "localDatabase",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: dsatracker,
    source_code_link: "https://github.com/arunsingh2004/dsaPracticeWebApp.git",
  },
  {
    name: "Real-Time-Ecommerce",
    description:
      "(Our website offers a seamless shopping experience powered by server-side rendering. )",
    tags: [
      {
        name: "NextJs",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDb",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
      {
        name: "Payment Gateway",
        color: "blue-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link:
      "https://github.com/arunsingh2004/Real-Time-Ecommerce.git",
  },
];

export {
  //services,
  technologies,
  experiences,
  testimonials,
  projects,
};
