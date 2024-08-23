import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.jpeg";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.jpeg";
import project6 from "../assets/projects/project-6.jpeg";
import project7 from "../assets/projects/project-7.jpeg";
import project8 from "../assets/projects/project-8.jpeg";
import project9 from "../assets/projects/project-9.png";
import project10 from "../assets/projects/project10.png";
import project11 from "../assets/projects/uiux_1.png";
import project12 from "../assets/projects/uiux_2.png";

export const HERO_CONTENT = `I have been passionate about web programming for almost two years. Although I do not have an IT degree, my journey began during college when I started learning web programming through self-study. I have developed skills in front-end technologies including Tailwind CSS, Sass, and React js. On the back end, I am skilled in Laravel, Codeigniter, Firebase, and MySQL Database. My goal is I can improve my skills to fulfilled industry requirements. I hope to be always enthusiastic to learn this skills so in the future I can be a professional web developer.`;

export const ABOUT_TEXT = `I pursued website programming because of my own interest. Actually, I have learned java programming in 2022 and only lasted a month. This is because I find it difficult to understand the concept. In early 2023, I started learning programming again, but with easier website programming for beginners. I started learning HTML, CSS and Javascript. At that time, I also learned to make small projects to improve my skills. However, these skills are not enough to become a great website developer. So I decided to learn further which includes CSS Frameworks (Bootstrap, Sass, and Tailwind), PHP Language and Frameworks (Laravel and Codeigniter), JavaScript Libraries (React), Firebase and MySQL Databases, Git and Github, Rest API, UI UX with Figma, and everything related to website programming. I have had several experiences and projects to support my skills. Currently, I am still continuing to learn, such as learning Next Js and other technologies that are needed today.`;

export const EXPERIENCES = [
  {
    year: "2024 - (April - Mei)",
    role: "Freelance Web Developer",
    company: "Jababeka Tbk (By the relation of an intern)",
    description: `Helping develop the psychological test website together with an intern at Jababeka Tbk. Website development is carried out by inserting questions on sheets of paper into the website display and then providing logic according to the form of multiple choice questions. There is one correct answer and then the user's answer results will be calculated when all questions have been answered. Apart from that, this website also provides CSS to make it more attractive. In this project, I only worked on the CFIT question section.`,
    technologies: ["PHP Native", "CSS", "MySQL", "Javascript"],
  },
  {
    year: "2024 - (Juni - Juli)",
    role: "IT Web Developer Intern",
    company: "Invaite.id",
    description: `Helping slicing website designs into lines of code so that it can become an interactive online invitation website that customers want. The online invitation website is equipped with features for sending messages and impressions as well as confirming attendance which is connected to a database in real time. This website has been hosted and received by customers.`,
    technologies: ["HTML", "CSS", "JavaScript", "CI", "Firebase"],
  },
  {
    year: "2024 - (Agustus)",
    role: "Freelance Web Developer",
    company: "UPT SPF SMP NEGERI 3 MAKASSAR ",
    description: `Helping create a bullying complaint website at school. On this website, there is a complaint feature by embedding links in the form of social media and also Google forms. There is also various information regarding bullying complaints. This website has also been hosted so it can be used immediately.`,
    technologies: ["HTML", "CSS", "JavaScript", "Github"],
  },
];

export const PROJECTS = [
  {
    title: "Rumah Impian",
    image: project1,
    description:
      "Development with HTML, CSS, and JavaScript resulting from slicing using Figma. A real estate trading website. However, there is no complex interactivity or database in its development, only on the front-end side.",
    technologies: ["HTML", "CSS", "JavaScript", "Github"],
    link: "https://rinsaf14.github.io/Property-Company-Profile/",
  },
  {
    title: "Store Management",
    image: project2,
    description:
      "Development with the Laravel PHP Framework and native CSS. Equipped with authentication for admin and user. There is a crud feature for goods in and out of the shop for admins and a feature for purchasing goods for users (users)",
    technologies: ["HTML", "CSS", "Laravel", "MySQL"],
    link: "/process.html",
  },
  {
    title: "Website for Reports about Bullying in SMP Negeri 3 Makassar",
    image: project3,
    description:
      "This website was created with the aim that all acts of bullying that occur can be immediately reported. There is some information regarding bullying complaints on the website which is accompanied by bullying education and the parties to contact to make reports",
    technologies: ["HTML", "CSS", "JavaScript", "Github"],
    link: "https://spentig3.github.io/pengaduanspentig/",
  },
  {
    title: "Psikotest Website",
    image: project4,
    description:
      "Website that displays questions for test takers which is equipped with a timer feature. Development with HTML, CSS and PHP. The CFIT questions have 4 question divisions where there is a feature to move questions accompanied by calculations of the user's answer results.",
    technologies: ["HTML", "CSS", "PHP", "MySQL"],
    link: "/jababeka.html",
  },
  {
    title: "Wedding Invitation Rizky and Putut by Invaite.id",
    image: project5,
    description:
      "Change the invitation design from designer into a responsive website. This website is equipped with motion, making it look more attractive. Apart from that, it is also equipped with real-time message sending and presence confirmation features so that other users can also see the messages entered.",
    technologies: ["HTML", "CSS", "JavaScript", "Codeigniter"],
    link: "https://invaite.id/RPWedding/?to=Fira",
  },
  {
    title: "Website Portfolio",
    image: project6,
    description:
      "Website portfolio using the React framework containing about myself, especially my skills and experience in website programming",
    technologies: ["HTML", "Tailwind", "JavaScript", "React"],
  },
  {
    title: "Website Portfolio",
    image: project7,
    description:
      "Website portfolio containing about myself, especially my skills and experience in website programming. With this portfolio, I can be accapted as an intern in Invaite.id",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://rinsaf14.github.io/MyPortoRirinSafitri/",
  },
  {
    title: "CRUD APP",
    image: project8,
    description:
      "Developing a CRUD system using PHP. The user can create, read, update and delete data.",
    technologies: ["HTML", "CSS", "PHP", "MySQL"],
    link: "/process.html",
  },
  {
    title: "HELLO CODERS",
    image: project9,
    description:
      "Developing a participant/student data website equipped with an authentication system using HTML, CSS, JavaScript and PHP. After the user registers or logs in, the user is directed to a page that displays a list of participants/students using the CRUD system.",
    technologies: ["HTML", "CSS", "PHP", "MySQL"],
    link: "/process.html",
  },
  {
    title: "Image Gallery",
    image: project10,
    description:
      "Website with simple HTML and CSS and use of Java script language for image search system using API. Each search will display several images as desired.",
    technologies: ["HTML", "CSS", "JavaScript", "API"],
    link: "https://rinsaf14.github.io/imagegallery/",
  },
  {
    title: "Rumah Impian UI UX",
    image: project11,
    description:
      "Create a website design using Figma which will serve as a guide in programming the website.",
    technologies: ["FIGMA"],
    link: "https://www.figma.com/design/i4T260lrh3X6ZVOXfcKwfe/Rumah-Impian?m=dev&node-id=0-1&t=PGPz5I0LgjcxInRQ-1",
  },
  {
    title: "Being Developer UI UX",
    image: project12,
    description: "Creation of Wireframes, Mockups and UI UX Design with figma",
    technologies: ["FIGMA"],
    link: "https://www.figma.com/design/embajn6ZUa17hmcReTgxjT/Project-2-(Copy)?m=dev&node-id=0-1&t=bLd9YlBMT6yKrxxP-1",
  },
];

export const CONTACT = {
  address:
    "Banrongnge Number 34 Bojo Baru, Mallusetasi District, Barru Regency, South Sulawesi, Indonesia",
  phoneNo: "+62 878-5333-9921",
  email: "ririnsaf14@gmail.com",
};
