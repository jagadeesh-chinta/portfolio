import profileImage from '../assets/profile.png';
import resumePdf from '../assets/resume.pdf';

export const personalInfo = {
  name: 'Jagadeesh Chinta',
  firstName: 'Jagadeesh',
  title: 'Software Engineer • Full Stack Developer',
  badge: 'AI & ML • Full Stack • Software Engineering',
  email: 'jagadeeshchinta6@gmail.com',
  phone: '+91 93468 69157',
  location: 'Rajam, India',
  linkedin: 'https://www.linkedin.com/in/jagadeesh-chinta-408b7b347/',
  github: 'https://github.com/jagadeesh-chinta',
  profileImage,
  resumePdf,
  description:
    'B.Tech Computer Science student specializing in AI & Machine Learning with hands-on experience in full-stack development and cloud services. I build practical, scalable applications using modern web technologies and write clean, maintainable code grounded in strong DSA and OOP fundamentals.',
  aboutDescription:
    'I\'m a Computer Science undergraduate at GMR Institute of Technology, specializing in Artificial Intelligence and Machine Learning. My core strengths lie in full-stack web development — building production-grade applications with React, Node.js, Express, and MongoDB — complemented by a solid foundation in Data Structures & Algorithms, Object-Oriented Programming, and cloud infrastructure through AWS. I won Smart India Hackathon 2024, where I developed a gamified constitutional learning platform in a competitive national-level setting. I\'m driven by building software that solves real problems, and I\'m always pushing to sharpen my engineering skills through hands-on projects and continuous learning.',
};

export const socialLinks = {
  linkedin: 'https://www.linkedin.com/in/jagadeesh-chinta-408b7b347/',
  // TODO: Add your GitHub URL when available
  // github: 'https://github.com/your-username',
};

export const quickFacts = [
  { label: 'Education', value: 'B.Tech CSE (AI & ML)' },
  { label: 'CGPA', value: '8.7' },
  { label: 'Location', value: 'Rajam, India' },
  { label: 'Experience', value: 'AWS Intern' },
  { label: 'Achievement', value: 'SIH 2024 Winner' },
];

export const skills = [
  {
    category: 'Programming',
    items: [
      { name: 'Java', icon: '☕' },
      { name: 'Python', icon: '🐍' },
      { name: 'C', icon: '⚙️' },
    ],
  },
  {
    category: 'Frontend',
    items: [
      { name: 'React', icon: '⚛️' },
      { name: 'HTML5', icon: '🌐' },
      { name: 'CSS3', icon: '🎨' },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', icon: '🟢' },
      { name: 'Express.js', icon: '🚂' },
    ],
  },
  {
    category: 'Databases',
    items: [
      { name: 'MongoDB', icon: '🍃' },
      { name: 'MySQL', icon: '🐬' },
    ],
  },
  {
    category: 'Core Concepts',
    items: [
      { name: 'DSA', icon: '🧮' },
      { name: 'OOP', icon: '🏗️' },
      { name: 'DBMS', icon: '🗄️' },
      { name: 'Operating Systems', icon: '💻' },
    ],
  },
  {
    category: 'Cloud & AWS',
    items: [
      { name: 'AWS', icon: '☁️' },
      { name: 'EC2', icon: '🖥️' },
      { name: 'S3', icon: '📦' },
      { name: 'IAM', icon: '🔐' },
      { name: 'Lambda', icon: '⚡' },
    ],
  },
  {
    category: 'Tools',
    items: [
      { name: 'GitHub', icon: '🐙' },
      { name: 'VS Code', icon: '📝' },
    ],
  },
  {
    category: 'Languages',
    items: [
      { name: 'English (Fluent)', icon: '🗣️' },
      { name: 'Telugu (Native)', icon: '🇮🇳' },
    ],
  },
];

export const experience = [
  {
    title: 'AWS Intern',
    company: 'Hashtek Solutions',
    type: 'Internship',
    location: 'Visakhapatnam',
    mode: 'On-site',
    startDate: 'Jun 2025',
    endDate: 'Jul 2025',
    description:
      'Completed a focused internship on Amazon Web Services, gaining hands-on experience with core cloud infrastructure and serverless computing services.',
    highlights: [
      'Worked with EC2 instances for scalable cloud computing',
      'Managed storage and data workflows using S3',
      'Configured IAM policies for secure access management',
      'Explored serverless architecture with AWS Lambda',
    ],
    technologies: ['AWS', 'EC2', 'S3', 'IAM', 'Lambda'],
  },
];

export const projects = [
  {
    id: 'bb84-chat',
    title: 'Real-Time Chat Application Using BB84 Protocol',
    subtitle: 'Quantum-Secured Messaging Platform',
    overview:
      'A real-time messaging application that integrates a simulated BB84 Quantum Key Distribution protocol to provide future-resistant secure communication.',
    problem:
      'Traditional encryption methods face potential vulnerabilities from advances in quantum computing. There is a need for communication systems that incorporate quantum-safe key distribution mechanisms.',
    solution:
      'Built a full-stack chat application with secure authentication and real-time messaging, layered with a simulated BB84 Quantum Key Distribution mechanism to demonstrate future-proof encryption concepts.',
    features: [
      'Real-time bidirectional messaging',
      'Secure user authentication',
      'Simulated BB84 Quantum Key Distribution',
      'Responsive React-based interface',
      'RESTful API backend',
      'Restore specific user chat',
      'Text to audio and audio to text translation',
      'Scheduling message',
      'Screenshot protection',
    ],
    contribution:
      'Designed and developed the full application — including the React frontend, Express/Node.js backend, MongoDB database integration, and the BB84 protocol simulation layer.',
    technologies: ['React', 'Express', 'Node.js', 'MongoDB', 'BB84 Protocol'],
    github: 'https://github.com/jagadeesh-chinta/SafeConnect',
    liveDemo: 'https://safeconnect-frontend-r2fz.onrender.com',
  },
  {
    id: 'sansthaein-samvidhan',
    title: 'Sansthaein Aur Samvidhan',
    subtitle: 'Gamified Constitutional Learning Platform',
    overview:
      'An interactive web platform designed to improve constitutional literacy through gamified learning experiences, making civic education engaging and accessible.',
    problem:
      'Constitutional and civic education is often presented in dry, text-heavy formats that fail to engage learners, particularly younger audiences.',
    solution:
      'Developed a gamified web platform with interactive learning modules, responsive UI, and progress-driven engagement to make constitutional education approachable and enjoyable.',
    features: [
      'Gamified learning modules',
      'Interactive quizzes and challenges',
      'Responsive and user-friendly interface',
      'Self-paced learning progression',
      'Engaging visual design',
    ],
    contribution:
      'Served as the Frontend Developer in this group project. I designed and developed the responsive user interface and interactive gamified learning modules using React and Tailwind CSS. Our team\'s collaborative effort won the Smart India Hackathon 2024.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    // TODO: Add actual URLs when available
    github: '',
    liveDemo: '',
  },
  {
    id: 'portfolio',
    title: 'Portfolio',
    subtitle: 'Interactive Web Developer Portfolio',
    overview:
      'A modern, highly responsive personal portfolio website built with React and Vite. Features interactive animations, sleek styling, and dynamic components to showcase my skills and projects.',
    problem: '',
    solution: '',
    features: [],
    contribution: '',
    technologies: ['React', 'CSS3', 'Vite', 'Framer Motion'],
    github: 'https://github.com/jagadeesh-chinta/portfolio',
    liveDemo: 'https://portfolio-3t5d.onrender.com/',
    disableModal: true,
  },
];

export const education = [
  {
    institution: 'GMR Institute of Technology',
    degree: 'Bachelor of Technology (B.Tech)',
    location: 'Rajam, India',
    startDate: '2023',
    endDate: '2027',
    status: 'Currently Pursuing',
    grade: 'CGPA: 8.87',
    description: 'Artificial Intelligence & Machine Learning specialization coursework, hands-on programming labs, and robust foundation in computer science.',
  },
  {
    institution: 'Gayatri Junior College',
    degree: 'Intermediate Education',
    location: 'Rajam, India',
    startDate: '2021',
    endDate: '2023',
    status: 'Completed',
    grade: '98.3%',
    description: 'Rigorous academic training with strong emphasis on Mathematics, Physics, and Chemistry.',
  },
  {
    institution: 'Viswasanthi Vidyalayam',
    degree: 'Secondary School Certificate (SSC)',
    location: 'Rajam, India',
    startDate: '2020',
    endDate: '2021',
    status: 'Completed',
    grade: '95%',
    description: 'Graduated with top academic standing with broad foundational excellence.',
  },
];

export const achievements = [
  {
    title: 'Smart India Hackathon 2024',
    subtitle: 'Winner',
    description:
      'Won the national-level Smart India Hackathon 2024 by developing Sansthaein Aur Samvidhan — a gamified constitutional learning platform built with a full-stack approach.',
    icon: '🏆',
    primary: true,
  },
  {
    title: 'Mathematics Club Competition',
    subtitle: 'First Prize',
    description:
      'Secured First Prize in the Mathematics Club Competition for excellence in mathematical problem-solving.',
    icon: '🥇',
    primary: false,
  },
];

export const certifications = [
  {
    title: 'The Joy of Computing Python',
    issuer: 'NPTEL',
  },
  {
    title: 'Software Engineering',
    issuer: 'NPTEL',
  },
  {
    title: 'Full Stack Web Development Bootcamp',
    issuer: 'L&T EduTech',
  },
];

export const heroBadges = ['Java', 'Python', 'React', 'AWS', 'MongoDB'];
