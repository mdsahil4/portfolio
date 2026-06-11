type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Mohd Sahil | Portfolio",
    fullName: "Mohd Sahil",
    email: "mohdsahil.job@gmail.com",
  },

  hero: {
  name: "Mohd Sahil",
  p: [
    "Software Engineer, AI Enthusiast",
    "and Full Stack Developer",
  ],
},

  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },

      email: {
        span: "Your Email",
        placeholder: "What's your email?",
      },

      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },

  sections: {
    about: {
      p: "Introduction",
      h2: "Overview",
      content: `I'm a Software Engineering student with a strong foundation in full-stack development, problem solving, and core computer science concepts. I enjoy building scalable web applications, AI-powered systems, and modern user interfaces using React, Node.js, Python, and MongoDB.`,
    },

    experience: {
      p: "What I have achieved",
      h2: "Achievements.",
    },

    feedbacks: {
      p: "My Certifications",
      h2: "Certifications.",
    },

    works: {
  p: "PROJECTS",
  h2: "My Projects",
  content:
    "A collection of projects showcasing my expertise in Full Stack Development, AI, Backend Engineering, and Modern Web Technologies.",
},
  },
};