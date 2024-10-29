import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import auxitaImage from "@/public/auxita-desktop-mockup.png";
import futureGolfImg from "@/public/fg-smart-handicap.png";
import convoseImg from "@/public/convose.png"


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Full-Stack Developer",
    location: "Brisbane/Remote",
    description:
      "Developed and maintained scalable healthcare applications using MongoDB, Node.js, and React, improving patient data management and reporting functionality.",
    icon: React.createElement(LuGraduationCap),
    date: "Jan 2023 - Oct 2024",
  },
  {
    title: "Freelancer Full-Stack Developer",
    location: "Remote",
    description:
      "Contributed to front-end website architecture and backend API design, focusing on creating responsive and user-friendly interfaces.",
    icon: React.createElement(CgWorkAlt),
    date: "Dec 2021 - Dec 2022",
  },
  {
    title: "Front-End Developer",
    location: "Hobart/Remote",
    description:
      "Developed new frontend features for a social media platform using React.js and React Native for mobile apps.",
    icon: React.createElement(FaReact),
    date: "Sep 2020 - Jul 2021",
  },
] as const;

export const projectsData = [
  {
    title: "Auxita",
    description:
      "Auxita’s digital platform seamlessly and securely connects physicians, patients, and patient support programs together – reducing administrative burdens and empowering medical practices to deliver care faster and more efficiently to patients.",
    tags: ["React", "Express.js", "MongoDB", "Material-UI"],
    imageUrl: auxitaImage,
  },
  {
    title: "FutreGolf",
    description:
      "This is an e-commerce project. Future Golf has a website and a mobile app to serve its clients. The whole system allows clients to book golf rounds and staff to manage customer information.",
    tags: ["React", "TypeScript", "React Native", "Php", "WordPress"],
    imageUrl: futureGolfImg,
  },
  {
    title: "Convose",
    description:
      "This is a social media platform. It provides users with interest matching and allows users to start instant conversations with a web application and mobile app.",
    tags: ["React", "React Native", "Redux", "Agora SDK"],
    imageUrl: convoseImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Php",
  "C#",
  "React",
  "Node.js",
  "Git",
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
  "AWS",
  "Agile"
] as const;
