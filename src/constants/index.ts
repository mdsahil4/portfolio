import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  carrent,
  jobit,
  tripguide,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Full Stack Developer",
    icon: web,
  },

  {
    title: "React Developer",
    icon: mobile,
  },

  {
    title: "Backend Developer",
    icon: backend,
  },

  {
    title: "Problem Solver",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "TypeScript",
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
    name: "Docker",
    icon: docker,
  },

  {
    name: "Git",
    icon: git,
  },
];

const experiences: TExperience[] = [];

const testimonials: TTestimonial[] = [];

const projects: TProject[] = [
  {
    name: "AI-Based Humanoid Robot",

    description:
      "Built modular software components using Python and OOP principles for hardware interaction and real-time decision making using Raspberry Pi and sensors.",

    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },

      {
        name: "raspberrypi",
        color: "green-text-gradient",
      },

      {
        name: "oop",
        color: "pink-text-gradient",
      },
    ],

    image: carrent,

    sourceCodeLink: "https://github.com/mdsahil4",
  },

  {
    name: "IT Ticket Tracking System",

    description:
      "Developed a full-stack ticket management system with priority handling, REST APIs, MongoDB integration, and status tracking.",

    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },

      {
        name: "mongodb",
        color: "green-text-gradient",
      },

      {
        name: "express",
        color: "pink-text-gradient",
      },
    ],

    image: jobit,

    sourceCodeLink: "https://github.com/mdsahil4",
  },

  {
    name: "YOLOv5 Object Detection System",

    description:
      "Created a real-time object detection platform using YOLOv5, FastAPI, PyTorch, React, and OpenCV with high accuracy detection.",

    tags: [
      {
        name: "yolov5",
        color: "blue-text-gradient",
      },

      {
        name: "fastapi",
        color: "green-text-gradient",
      },

      {
        name: "react",
        color: "pink-text-gradient",
      },
    ],

    image: tripguide,

    sourceCodeLink: "https://github.com/mdsahil4",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
};