import iconML from "../assets/image/ML.svg"
import linkedin from "../assets/image/linkedin.svg"
import binary from "../assets/image/binary.svg"
import avatarmy from "../assets/image/my-avatar.png"
import resumeLogo from "../assets/image/resumelogo.svg"
import {
  iconDesign,
  iconDev,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  project7,
  project8,
  email,
  calendar,
  location,
  github,
  send,
  framework1,
  framework2,
  framework3,
  framework4,
  framework5,
  framework6,
  lang1,
  lang2,
  lang3,
  lang4,
  lang5,
  lang6,
  db1,
  tool1,
  tool2,
  tool3,
  tool4,
  tool5,
} from "../assets/image";

export const avatar = avatarmy;
export const name = "Vishal Verma";
export const title = "Software developer";

export const contacts = [
  {
    type: "Email",
    icon: email,
    value: "vishalverma41889@gmail.com",
    link: "vishalverma41889@gmail.com",
  },
  {
    type: "Birthday",
    icon: calendar,
    value: "February 10, 2003",
    datetime: "2001-01-01",
  },
  {
    type: "Location",
    icon: location,
    value: "Delhi, INDIA",
  },
];

export const social = [
  {
    platform: "LinkedIn",
    icon: linkedin,
    link: "https://www.linkedin.com/in/vishal-verma-2775b9197/",
  },
  {
    platform: "Github",
    icon: github,
    link: "https://www.linkedin.com/in/vishal-verma-2775b9197/",
  },
];

// main content

// nav

export const navItems = [
  { id: 1, text: "About", isActive: false, section: "About" },
  { id: 2, text: "Resume", isActive: false, section: "Resume" },
  { id: 3, text: "Projects", isActive: false, section: "Portfolio" },
  // { id: 4, text: "Blog", isActive: false, section: "Blog" },
  { id: 4, text: "Contact", isActive: false, section: "Contact" },
];

// aboutus

export const pages = [
  {
    id: "about",
    title: "About me",
    content: (
      <>
        <p>
          I'm a dynamic tech enthusiast from New Delhi, India, currently
          pursuing a B.Tech in Information Technology with a focus on Machine
          Learning at GGSIPU. With a CGPA of 8.14, I have a strong academic
          foundation complemented by hands-on experience in cutting-edge
          projects.
        </p>
        <br />
        <p>
          My work is to develop innovative software solutions that are not only
          functional and efficient but also engaging and user-friendly. From crafting a structured platform like
          TeachScript for diverse text-based tutorials to designing a dynamic
          WhatsApp Chat Analyzer, I strive to deliver projects that enhance user
          experience and bring your vision to life. I’ve had the opportunity to
          work on significant projects and lead initiatives that highlight my
          technical and leadership skills, ensuring that each product is unique,
          insightful, and impactful.
        </p>
      </>
    ),
  },
  // Add more pages data here if needed
];

// about services?

export const services = [
  {
    id: 1,
    title: "Web design",
    text: "The most modern and high-quality design made at a professional level.",
    icon: iconDesign,
    alt: "design icon",
  },
  {
    id: 2,
    title: "Web development",
    text: "High-quality development of sites at the professional level.",
    icon: iconDev,
    alt: "Web development icon",
  },
  {
    id: 3,
    title: "Machine Learning",
    text: "Development of machine learning models with high precision and accuracy.",
    icon: iconML,
    alt: "mobile app icon",
  },
  {
    id: 4,
    title: "Competitive Programming",
    text: "I focus on developing efficient algorithms and data structures to solve complex problems.",
    icon: binary,
    alt: "camera icon",
  },
];

// known technologies
export const technologies = {
  frameworks : [
    {
      title: "django",
      image : framework1,
    },
    {
      title: "react",
      image : framework2,
    },
    {
      title: "tailwind",
      image : framework3,
    },
    {
      title: "firebase",
      image : framework4,
    },
    {
      title: "scikitlearn",
      image : framework5,
    },
    {
      title: "streamlit",
      image : framework6,
    },
  ],
  languages : [
    {
      title: "cpp",
      image: lang1,
    },
    {
      title: "python",
      image: lang2,
    },
    {
      title: "html",
      image: lang4,
    },
    {
      title: "css",
      image: lang6,
    },
    {
      title: "javascript",
      image: lang3,
    },
    {
      title: "postgresql",
      image: db1,
    },
    {
      title: "sql",
      image: lang5,
    },
  ],
  databases : [

  ],
  tools : [
    {
      title: "github",
      image: tool1,
    },
    {
      title: "vscode",
      image: tool2,
    },
    {
      title: "googlecolab",
      image: tool3,
    },
    {
      title: "pycharm",
      image: tool4,
    },
    {
      title: "figma",
      image: tool5,
    },
  ],
};


// testimonial

// export  const testimonialsData = [
//   {
//     id: 1,
//     name: "Daniel lewis",
//     avatar: avatar1,
//     date: "2021-06-14",
//     text: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.",
//   },
//   {
//     id: 2,
//     name: "Jessica miller",
//     avatar: avatar2,
//     date: "2021-06-14",
//     text: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.",
//   },
//   {
//     id: 3,
//     name: "Emily evans",
//     avatar: avatar3,
//     date: "2021-06-14",
//     text: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.",
//   },
//   {
//     id: 4,
//     name: "Henry william",
//     avatar: avatar4,
//     date: "2021-06-14",
//     text: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.",
//   },
// ];

// client

// export const clients = [
//   {
//     href: "#",
//     imgSrc: logo1Color,
//     alt: "client logo 1",
//   },
//   {
//     href: "#",
//     imgSrc: logo2Color,
//     alt: "client logo 2",
//   },
//   {
//     href: "#",
//     imgSrc: logo3Color,
//     alt: "client logo 3",
//   },
//   {
//     href: "#",
//     imgSrc: logo4Color,
//     alt: "client logo 4",
//   },
//   {
//     href: "#",
//     imgSrc: logo5Color,
//     alt: "client logo 5",
//   },
//   {
//     href: "#",
//     imgSrc: logo6Color,
//     alt: "client logo 6",
//   },
// ];

// Resume

export const resumeData = {
  resumeIcon: resumeLogo,
  education: [
    {
      course: "Bachelor of Technology in Information Technology",
      school: "University School of Information, Communication and Technology",
      date: "2021 — 2025",
      description:
        "Minor Specialization in Machine Learning with Aggregate CGPA - 8.14",
    },
    {
      course: "Class XII",
      school: "Kendriya Vidyalaya Sainik Vihar",
      date: "2019 — 2020",
      description:
        "Stream - Non Medical, Aggregate Percentage - 87%",
    },
    {
      course: "Class X",
      school: "Kendriya Vidyalaya Sainik Vihar",
      date: "20017 — 2018",
      description:
        "Aggregate Percentage - 77%",
    },
  ],
  experience: [
    {
      title: "Utkrisht Research Internship",
      date: "August 2023 — September 2023",
      description: [
        "Implemented a system that combines underwater image enhancement techniques with state-of-the-art object detection using YOLOv5.",
        "Proficiently trained this object detection model using an extensive dataset comprising over 2000 labeled underwater images, resulting in enhanced model accuracy of 84%.",
      ],
    },
  ],
  por: [
    {
      title: "Technical Team Lead IEEE GGSIPU",
      date: "September 2023 — Present",
      description: [
        "Organized impactful IEEE Week event, promoting tech innovation and networking within the college community.",
        "Presented a session on Redis technology, including data caching, messaging, and geo spatial use cases.",
      ],
    },
    {
      title: "Technical Team Member IEEE GGSIPU",
      date: "June 2022 — September 2023",
      description: [
        "Organized impactful IEEE Week event, promoting tech innovation and networking within the college community.",
      ],
    },
  ],
};

// skills

export const skills = [
  {
    name: "Web design",
    value: 80,
  },
  {
    name: "Web Development",
    value: 70,
  },
  {
    name: "Machine Learning",
    value: 80,
  },
  {
    name: "Competitive Programming",
    value: 75,
  },
];

// --------Projects

export const projectData = {
  categories: ["All", "Web design" , "Machine Learning", "Web development"],
  projects: [
    {
      title: "TeachScript",
      category: "Web development",
      image: project1,
      alt: "teachscript",
      link: "https://mysite-ewkp.onrender.com/"
    },
    {
      title: "WhatsApp Chat Analyzer",
      category: "Machine Learning",
      image: project2,
      alt: "teachscript",
      link: "https://whatsapp-chat-analyzer-86az.onrender.com/"
    },
    {
      title: "Express Resume",
      category: "Web development",
      image: project3,
      alt: "expressresume",
      link: "https://resume-builder-lemon.vercel.app/"
    },
    {
      title: "Delhi House Price Prdictor",
      category: "Machine Learning",
      image: project4,
      alt: "delhihousepricepredictor",
      link: "https://delhi-house-price-predictor-psi.vercel.app/"
    },
    {
      title: "Markdown Flow",
      category: "Web development",
      image: project5,
      alt: "mardownflow",
      link: "https://markdown-editor-app-xi.vercel.app/"
    },
    {
      title: "Calculator using React",
      category: "Web development",
      image: project6,
      alt: "reactcalculator",
      link: "https://calculator-using-reactjs.vercel.app/"
    },
    {
      title: "Tic-Tac-Toe Game",
      category: "Web development",
      image: project7,
      alt: "tictactoe",
      link: "https://itsvishy321.github.io/Tic-Tac-Toe-Game/"
    },
    {
      title: "Omnifood",
      category: "Web design",
      image: project8,
      alt: "omnifood",
      link: "https://omnifood-vishal-verma.netlify.app/"
    },
  ],
};

// export const blogPosts = [
//   {
//     id: 1,
//     imgSrc: blog1,
//     imgAlt: "Design conferences in 2022",
//     category: "Design",
//     date: "2022-02-23",
//     title: "Design conferences in 2022",
//     text: "Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.",
//   },
//   {
//     id: 2,
//     imgSrc: blog2,
//     imgAlt: "Best fonts every designer",
//     category: "Design",
//     date: "2022-02-23",
//     title: "Best fonts every designer",
//     text: "Sed ut perspiciatis, nam libero tempore, cum soluta nobis est eligendi.",
//   },
//   {
//     id: 3,
//     imgSrc: blog3,
//     imgAlt: "Design digest #80",
//     category: "Design",
//     date: "2022-02-23",
//     title: "Design digest #80",
//     text: "Excepteur sint occaecat cupidatat no proident, quis nostrum exercitationem ullam corporis suscipit.",
//   },
//   {
//     id: 4,
//     imgSrc: blog4,
//     imgAlt: "UI interactions of the week",
//     category: "Design",
//     date: "2022-02-23",
//     title: "UI interactions of the week",
//     text: "Enim ad minim veniam, consectetur adipiscing elit, quis nostrud exercitation ullamco laboris nisi.",
//   },
//   {
//     id: 5,
//     imgSrc: blog5,
//     imgAlt: "The forgotten art of spacing",
//     category: "Design",
//     date: "2022-02-23",
//     title: "The forgotten art of spacing",
//     text: "Maxime placeat, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
//   {
//     id: 6,
//     imgSrc: blog6,
//     imgAlt: "Design digest #79",
//     category: "Design",
//     date: "2022-02-23",
//     title: "Design digest #79",
//     text: "Optio cumque nihil impedit uo minus quod maxime placeat, velit esse cillum.",
//   },
// ];

// contact page -----------------------------------

export const contactData = {
  header: {
    title: "Contact",
  },
  map: {
    src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448196.5262708839!2d76.76358032820646!3d28.64368464077639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1723216649614!5m2!1sen!2sin", 
    width: "400",
    height: "300",
  },
  form: {
    title: "Contact Form",
    inputs: [
      {
        type: "text",
        name: "fullname",
        placeholder: "Full name",
        required: true,
      },
      {
        type: "email",
        name: "email",
        placeholder: "Email address",
        required: true,
      },
    ],
    textarea: {
      name: "message",
      placeholder: "Your Message",
      required: true,
    },
    button: {
      text: "Send Message",
      icon: send,
    },
  },
};
