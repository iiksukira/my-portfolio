import type { TNavLink, TService, TTechnology, TExperience, TProject } from '../types';

import {
  iik,
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  ppa,
  mp,
  industrixtodo,
  rumahsehat,
  cbgprofile,
  dimminprofile,
  misyesinviteu,
  nytarticlesearch,
  datavisualizationapp,
  threejs,
  aka,
} from '../assets';

export const navLinks: TNavLink[] = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services: TService[] = [
  { title: 'Iik Sukira', icon: iik },
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'Next JS Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'React JS Developer',
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: 'Sales Officer',
    companyName: 'PT. Anugrah Karya Abadi | PT. PERMATA BANK Tbk',
    icon: aka,
    iconBg: '#383E56',
    date: 'September 2021 - December 2023',
    points: [
      'Promoted and provided information about banking products to potential customers.',
      'Offered digital account opening services for merchants through Permata Mobile X and Permata QR.',
      'Assisted customers with account opening, QRIS registration, and provided solutions to customer complaints.',
      'Prepared regular sales reports and ensured compliance with company administrative procedures.',
    ],
  },
  {
    title: 'Customer Experience Leader',
    companyName: 'PT. Pesta Pora Abadi | Mie Gacoan',
    icon: ppa,
    iconBg: '#E6DEDD',
    date: 'Mei 2024 - September 2025',
    points: [
      'Coordinated preparation and availability of ingredients, seasonings, and toppings to support smooth kitchen operations.',
      'Managed food preparation in line with company standards, ensuring consistency, quality, and timely service.',
      'Supervised cleanliness and hygiene of kitchen equipment and work areas to comply with health and safety standards.',
      'Monitored and controlled raw material inventory, reducing waste and ensuring cost efficiency.',
      'Maintained accurate product administration reports and supported operational decision-making.',
      'Collaborated with team members to deliver a seamless dining experience, addressing customer needs and feedback effectively.',
    ],
  },
  {
    title: 'Full Stack Web Developer',
    companyName: 'MISYES Project | Freelance',
    icon: mp,
    iconBg: '#E6DEDD',
    date: 'Jan 2024 - Present',
    points: [
      'Develop and maintain responsive websites and web applications using React. JS, Vite, Node. JS and TailwindCSS.',
      'Collaborate with clients (UMKM, F&B, and personal projects) to design and deliver customized digital solutions.',
      'Integrate modern tools, APIs, and payment gateways to support business needs.',
      'Ensure performance optimization, scalability, and mobile responsiveness across projects.',
    ],
  },
];
const projects: TProject[] = [
  {
    name: 'Industrix Todo App',
    description:
      'A full-stack todo list web application built for the Industrix Full Stack Engineer Intern Coding Challenge. It features todo and category management, pagination, search, and a clean responsive UI using React and Ant Design.',
    tags: [
      {
        name: 'reactJS',
        color: 'blue-text-gradient',
      },
      {
        name: 'ant design',
        color: 'green-text-gradient',
      },
      {
        name: 'expressJS',
        color: 'pink-text-gradient',
      },
      { name: 'postgresql', color: 'green-text-gradient' },
    ],
    image: industrixtodo,
    sourceCodeLink: 'https://github.com/iiksukira/industrix-todo-app',
    ViewProjectLink: 'https://industrix-todo-app.vercel.app/',
  },
  {
    name: 'Rumah Sehat',
    description:
      'The Rumah Sehat website is a health clinic profile site developed using WordPress and exported as a statistical version using the Simply Static plugin. This project aims to display general information about the clinic`s services, doctor profiles, locations, and a contact form for appointments in a professional and user-friendly manner.',
    tags: [
      {
        name: 'wordpress',
        color: 'blue-text-gradient',
      },
      {
        name: 'elementor',
        color: 'green-text-gradient',
      },
      {
        name: 'rechaptcha',
        color: 'pink-text-gradient',
      },
    ],
    image: rumahsehat,
    sourceCodeLink: 'https://github.com/iiksukira/rumah-sehat',
    ViewProjectLink: 'https://rumah-sehat.vercel.app/',
  },
  {
    name: 'Wedding Catalog',
    description:
      'Web-based platform that allows users to search, book, and manage wedding services from various providers, providing a convenient and efficient solution for wedding planning needs.',
    tags: [
      {
        name: 'html',
        color: 'blue-text-gradient',
      },
      {
        name: 'css',
        color: 'green-text-gradient',
      },
      {
        name: 'javascript',
        color: 'pink-text-gradient',
      },
    ],
    image: misyesinviteu,
    sourceCodeLink: 'https://github.com/iiksukira/misyesinviteu',
    ViewProjectLink: 'https://misyesinviteu.vercel.app/',
  },
  {
    name: 'Dimsum Mini By.Jose',
    description:
      'The company profile website for Dimsum Mini By.jose displays a dimsum product catalog, company history, photo gallery, contact information, and outlet locations. Visitors can view product details, prices, and place orders via WhatsApp.',
    tags: [
      {
        name: 'html',
        color: 'blue-text-gradient',
      },
      {
        name: 'css',
        color: 'green-text-gradient',
      },
      {
        name: 'javascript',
        color: 'pink-text-gradient',
      },
    ],
    image: dimminprofile,
    sourceCodeLink: 'https://github.com/iiksukira/DimMin_ComPro',
    ViewProjectLink: 'https://dim-min-com-pro.vercel.app/',
  },
  {
    name: 'Cimol Bawang Garut AA Ayang',
    description:
      'Cimol Bawang Garut AA Ayang`s business profile website displays the cimol bawang product description, advantages, customer testimonials, photo gallery, as well as ordering information and WhatsApp contact for resellers and direct buyers.',
    tags: [
      {
        name: 'html',
        color: 'blue-text-gradient',
      },
      {
        name: 'css',
        color: 'green-text-gradient',
      },
      {
        name: 'javascript',
        color: 'pink-text-gradient',
      },
    ],
    image: cbgprofile,
    sourceCodeLink: 'https://github.com/iiksukira/Cimol-Bawang-Garut-AA-Ayang',
    ViewProjectLink: 'https://cbg-profile.vercel.app/',
  },
  {
    name: 'New York Times Search',
    description:
      'A New York Times article search application built for a technical test frontend engineer. Features include keyword search, date filtering, displaying article results with title, summary, and link to the original source, and pagination for navigating results.',
    tags: [
      {
        name: 'reactjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwindcss',
        color: 'green-text-gradient',
      },
      {
        name: 'restapi',
        color: 'pink-text-gradient',
      },
    ],
    image: nytarticlesearch,
    sourceCodeLink: 'https://github.com/iiksukira/nytimes-search',
    ViewProjectLink: 'https://nytimes-search.vercel.app/',
  },
  {
    name: 'Data Visualization App',
    description:
      'A modern fullstack web application for managing and visualizing sales data. This app provides an interactive dashboard with CRUD functionality, insightful charts, and quick statistics to help businesses analyze their sales performance.',
    tags: [
      {
        name: 'reactjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwindcss',
        color: 'green-text-gradient',
      },
      {
        name: 'chartjs',
        color: 'pink-text-gradient',
      },
      {
        name: 'reactrouter',
        color: 'green-text-gradient',
      },
      {
        name: 'restapi',
        color: 'blue-text-gradient',
      },
    ],
    image: datavisualizationapp,
    sourceCodeLink: 'https://github.com/iiksukira/data-visualization-app',
    ViewProjectLink: 'https://data-visualization-app.vercel.app/',
  },
];

export { services, technologies, experiences, projects };
