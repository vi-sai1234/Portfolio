
import { Experience, Project, SkillCategory } from './types';

export const PERSONAL_INFO = {
  name: 'Chukkala Bala Venkata Sai Vinay',
  title: 'Full-Stack Developer',
  email: 'saichukkala15@gmail.com',
  phone: '+916303194268',
  github: 'https://github.com/vi-sai1234',
  about: "I am a passionate Full-Stack Developer with a strong foundation in building dynamic and responsive web applications. My expertise lies in the MERN stack (MongoDB, Express.js, React.js, Node.js), and I excel at creating seamless user experiences from the ground up. During my internship, I engineered high-performance tools that led to a 30% increase in website traffic. My project work demonstrates my ability to implement secure authentication, design efficient RESTful APIs, and optimize application performance. I am driven by the challenge of solving complex problems and committed to writing clean, scalable, and maintainable code."
};

export const EDUCATION = {
  degree: 'BTECH, Computer Science and Engineering',
  college: 'Sir C R Reddy College of Engineering',
  duration: '2019 - 2023',
  cgpa: '6.75 / 10'
};

export const EXPERIENCES: Experience[] = [
  {
    role: 'Web Development/Design Intern',
    company: 'The Sparks Foundation',
    duration: 'May 2023 - Sep 2023',
    location: 'Remote',
    description: [
      'Developed interactive and responsive user interfaces using HTML, CSS, JavaScript, React.js, and Bootstrap.',
      'Engineered a high-performance landing page, portfolio, and temperature conversion tool, leading to a 30% increase in website traffic.',
      'Collaborated with cross-functional teams, including designers and backend developers, to optimize UI/UX.',
      'Gained expertise in website deployment, hosting, and maintenance on GitHub Pages and cloud platforms.'
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: 'Full-stack Hotel Booking Web Application',
    description: [
      'Developed a full-stack hotel booking website using React.js for the frontend, Express.js for the backend, and MongoDB for data storage.',
      'Implemented user authentication with JWT and crypt, enabling secure login and protected booking routes.',
      'Created RESTful APIs to handle hotel search, user registration/login, and booking submissions.',
      'Used React Hook Form for form handling and validation, and Axios to communicate between frontend and backend services.',
      'Designed MongoDB schemas using Mongoose to manage users, hotels, and bookings.'
    ],
    technologies: ['React.js', 'Express.js', 'MongoDB', 'JWT', 'Axios', 'Mongoose']
  },
  {
    title: 'Flight Booking Website',
    description: [
      'Built a responsive frontend using React.js and Tailwind CSS, seamlessly connected to a Node.js/Express.js backend via RESTful APIs.',
      'Developed a robust backend with Express.js and MongoDB using Mongoose for schema-based data modeling and secure data management with JWT.',
      'Designed reusable React components with React Router for smooth navigation.',
      'Implemented asynchronous API calls to the Express.js server, reducing latency by 30%.'
    ],
    technologies: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'React Router']
  }
];

export const SKILLS: SkillCategory[] = [
    {
        title: 'Languages',
        skills: ['JavaScript']
    },
    {
        title: 'Web Development',
        skills: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'HTML', 'CSS', 'Tailwind CSS', 'Bootstrap']
    },
    {
        title: 'Tools',
        skills: ['Figma', 'Canva', 'MS Excel', 'Git', 'GitHub']
    }
];
