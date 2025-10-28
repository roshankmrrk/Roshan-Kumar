import project1 from "../assets/projects/image.png";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/StudyNotion.jpg";

export const HERO_CONTENT = `I’m a passionate Full Stack Developer specializing in the MERN stack and Next.js. I love crafting robust, scalable, and high-performance web applications that deliver seamless user experiences. With hands-on experience in React.js, Next.js, Node.js, and MongoDB, I focus on building clean, efficient, and production-ready solutions that combine performance with creativity and drive real business impact.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const PROJECTS = [
  
{
    title: "Portfolio Website",
    image: project1,
    description:
      "Built a responsive personal portfolio using React.js and Tailwind CSS to showcase projects, skills, and experience. Integrated EmailJS for contact and deployed on Vercel with a custom domain.",
    keyFeatures: [
      "Smooth animations (Framer Motion)",
      "Contact form (EmailJS)",
      "Modern & responsive UI",
    ],
    technologies: ["React.js", "Tailwind CSS", "EmailJS", "Framer Motion"],
    github: "https://github.com/roshankmrrk/Roshan-Kumar",
    live: "https://roshan-kumar.vercel.app/",
  },
  {
    title: "Study Notion (Working On)",
    image: project3,
    description:
      "Developing a full-stack learning platform using the MERN stack where users can create, sell, and learn courses with secure authentication and payment integration.",
    keyFeatures: [
      "Auth & role-based access",
      "Course creation & purchase",
      "Scalable backend",
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Figma"],
    github: "#",
    live: "#",
  },
  {
    title: "AI Image Generator (Working On)",
    image: project2,
    description:
      "Creating an AI-powered web app using MERN & OpenAI API to generate images from text prompts with a responsive and secure UI.",
    keyFeatures: [
      "Text-to-image generation",
      "Secure backend",
      "Cloud database",
    ],
    technologies: ["MERN Stack", "OpenAI API", "Tailwind CSS"],
    github: "#",
    live: "#",
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