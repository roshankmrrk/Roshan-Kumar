import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `I’m a passionate Full Stack Developer specializing in the MERN stack and Next.js. I love crafting robust, scalable, and high-performance web applications that deliver seamless user experiences. With hands-on experience in React.js, Next.js, Node.js, and MongoDB, I focus on building clean, efficient, and production-ready solutions that combine performance with creativity and drive real business impact.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const PROJECTS = [
  
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "Developed a responsive personal 3D portfolio website using React.js and Tailwind CSS to showcase Work Experience, projects and skills. Integrated a contact form with EmailJS for Job and client inquiries, optimized site performance, and deployed it on Vercel with Custom Domain for scalability. Added smooth animations and a modern UI to enhance user engagement.",
    technologies: ["HTML", "CSS", "React", "tailwind","EmailJs","Motion"],
  },
  {
    title: "Study Notion : Working on",
    image: project1,
    description:
      "Study Notion is a full-stack learning platform built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It allows users to create, sell, and access online courses with smooth authentication, payments, and an intuitive UI.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB","Express.js","Figma"],
  },
  {
    title: "AI Image Generator : Working on",
    image: project2,
    description:
      "Developed an AI-powered image generation web app using the MERN stack and OpenAI API, enabling users to create unique images from text prompts. Built a secure backend with Node.js and Express.js, and a responsive React + Tailwind CSS frontend integrated with MongoDB Atlas for scalable performance.",
    technologies: ["MERN Stack","OpenAi API", "Tailwind CSS"],
  },
];

export const CONTACT = {
  address: "Shakur Pur Delhi 110034 ",
  phoneNo: "+91 6307102297 ",
  email: "roshankumarrauniyarstudent@gmail.com",
};

// service id of emailjs->gmail:- service_lx88kz9
//Template ID:template_9ees3ur
// public key N9Wlq0Al8WnUc6b5y