export interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
}

export const projects = [
  {
    slug: "talentflow-lms",
    title: "TalentFlow LMS",
    category: "Web Application",
    description: "A modern learning management system.",
    longDescription:
      "TalentFlow is a modern learning management system designed to help organizations manage learners, courses, educational content, and learning activities through an intuitive digital platform.",
    image: "/images/talentflow.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
    ],
    liveUrl: "https://talentflow-eight-weld.vercel.app/",
    githubUrl: "https://github.com/rillygulma/talentflow",
  },
  {
    slug: "fubk-lms",
    title: "Fubk LMS",
    category: "Web Application",
    description: "A modern library management system.",
    longDescription:
      "Fubk is a modern library management system designed to help organizations manage books, patrons, and library operations through an intuitive digital platform.",
    image: "/images/fubk-library.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
    ],
    liveUrl: "https://library-fubk.vercel.app/",
    githubUrl: "https://github.com/rillygulma/Library-fubk",
  },
    {
    slug: "shop-management",
    title: "Shop Management",
    category: "Web Application",
    description: "A modern e-commerce management system.",
    longDescription:
      "Shop Management is a modern e-commerce management system designed to help organizations manage products, orders, and customers through an intuitive digital platform.",
    image: "/images/shop-management.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
    ],
    liveUrl: "https://shop-manager-sable.vercel.app/",
    githubUrl: "https://github.com/rillygulma/Shop-Manager",
  },
  {
    slug: "hotel-management-system",
    title: "Hotel Management System",
    category: "Web Application",
    description: "A modern hotel management system.",
    longDescription:
      "Hotel Management System is a modern hotel management system designed to help organizations manage rooms, guests, and hotel operations through an intuitive digital platform.",
    image: "/images/hotel-management.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
    ],
    liveUrl: "https://el-caaz-hotel-management-system.vercel.app/",
    githubUrl: "https://github.com/rillygulma//El-caaz-hotel-management-system",
  },
    {
    slug: "food-ordering-system",
    title: "Food Ordering System",
    category: "Web Application",
    description: "A modern food ordering system.",
    longDescription:
      "Food Ordering System is a modern food ordering system designed to help organizations manage menu items, orders, and customers through an intuitive digital platform.",
    image: "/images/food-ordering.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
    ],
    liveUrl: "https://chuks-kitchen-food-ordering.netlify.app/",
    githubUrl: "https://github.com/rillygulma//Chuks-Kitchen-Food-Ordering-App",
  },
];