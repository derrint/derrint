import { calculateAge, calculateYearsOfExperience } from '@/utils/helper';

// Birth date: Adjust this to the actual birth date
const birthDate = new Date(1994, 7, 10);

const aboutData = {
  banner: '/assets/img/slider/IMG_9390.jpg',
  name: 'Lorensio Derrint',
  role: 'Software Engineer',
  description: [
    `Hi, I'm Lorensio Derrint, a Senior Software Engineer and creative problem-solver with 13+ years of success in delivering robust, user-centric solutions.`,

    `I specialize in high-performance Front-End and Mobile Development, leveraging a deep tech stack including JavaScript / TypeScript, React / React Native, HTML / CSS, PHP, and MySQL.`,

    `My seniority spans the entire development lifecycle, having successfully designed, developed, and maintained over 50 web and mobile applications for diverse sectors. I have driven impact across a wide range of critical industries, including Health-Care, Education-Tech, Automotive, Marketplace, NFT & Blockchain, Broadcasting, Finance, Travel & Tourism, and Hospitality`,
  ],
  info: [
    {
      label: 'Age',
      value: calculateAge(birthDate),
    },

    {
      label: 'Address',
      value: 'Malang, East Java, Indonesia',
    },
    {
      label: 'Email',
      value: 'lorensioderrint@gmail.com',
      isURL: true,
      action: 'mailto:lorensioderrint@gmail.com',
    },
    {
      label: 'Phone',
      value: '+62 812 3224 5315',
      isURL: true,
      action: 'tel:+62 812 3224 5315',
    },
    {
      label: 'Nationality',
      value: 'Indonesian',
    },
    {
      label: 'Study',
      value: 'STMIK Pradnya Paramita',
    },
    {
      label: 'Degree',
      value: 'Bachelor of Computer Science',
    },
    {
      label: 'Interest',
      value: 'Driving, Travelling, Wandering Around',
    },
  ],
  cv: {
    label: 'Download CV',
    value: '/assets/doc/cv-lorensioderrint.pdf',
  },
  skills: {
    title: 'Coding Skills',
    items: [
      {
        label: 'JavaScript, TypeScript, React, React Native, Next.js',
        value: calculateYearsOfExperience(2020),
      },
      {
        label: 'Redux, Zustand, RESTful API',
        value: calculateYearsOfExperience(2021),
      },
      {
        label: 'HTML5, CSS3, Responsive UI',
        value: calculateYearsOfExperience(2012),
      },
      {
        label: 'Bootstrap, Tailwind, ChakraUI, PostCSS',
        value: calculateYearsOfExperience(2019),
      },
      {
        label: 'Jest, RTL, Enzyme',
        value: calculateYearsOfExperience(2022),
      },
      {
        label: 'Git, GitFlow, ESLint',
        value: calculateYearsOfExperience(2019),
      },
    ],
  },
  language: {
    title: 'Language Skills',
    items: [
      {
        label: 'Indonesian',
        value: 'Native',
      },
      {
        label: 'English',
        value: 'Proficient',
      },
      {
        label: 'Spanish',
        value: 'Beginner',
      },
    ],
  },
  knowledge: {
    title: 'Knowledge',
    items: [
      'React ecosystem and modern frontend architecture',
      'Design systems & component-based architecture',
      'UI/UX principles and accessibility standards',
      'Responsive design principles',
      'Agile / Scrum development processes',
      'App Store & Play Store Publishing',
    ],
  },
  softSkills: {
    title: 'Soft Skills',
    items: [
      'Ability to work autonomously',
      'Creative',
      'High attention to detail',
      'Cross-functional collaboration with Designers, BE, PM',
      'Thriving in fast-paced, collaborative environments',
      'Strong ownership mindset in delivering seamless UX',
    ],
  },
  education: {
    title: 'Education',
    items: [
      {
        label: '2014 - 2018',
        value: 'STMIK Pradnya Paramita, Malang',
        description: 'Bachelor of Computer Science',
      },
      {
        label: '2009 - 2012',
        value: 'SMK Telkom, Malang',
        description: 'Vocational High School',
      },
    ],
  },
  experience: {
    title: 'Experience',
    items: [
      {
        label: '2024 - Present',
        value: 'Kangaroo Health Inc.',
        description: 'Senior Software Engineer',
      },
      {
        label: '2022 - 2024',
        value: 'PT Quipper Edukasi Indonesia',
        description: 'Senior Software Engineer',
      },
      {
        label: '2021 - 2022',
        value: 'PT Qlip Qlop Qlap',
        description: 'Senior Front-End Engineer',
      },
      {
        label: '2019 - 2022',
        value: 'PT Kano Teknologi Utama',
        description: 'Software Engineer',
      },
      // {
      //   label: '2016 - 2018',
      //   value: 'PT WeSolve Solusi Indonesia',
      //   description: 'Full Stack Developer',
      // },
    ],
  },
  testimonials: {
    title: 'Testimonials',
    items: [
      {
        label: 'Servina Lutfi Guntary',
        value:
          'Derrint has a humble personality and always tries to throw jokes when we work together. He is responsible for improving our UI website development project, I think he has "magical hand" when it comes to beautify our website. He always willing to learning and adapting well in all our project drama.',
        description: 'Software Engineer',
        image:
          'https://media.licdn.com/dms/image/C5603AQFbKsrcYBGmDQ/profile-displayphoto-shrink_100_100/0/1635681339998?e=1681344000&v=beta&t=3jyL_1kl-N2Xogn4z2j1c76OkzFjudftOck39yWb_qA',
      },
    ],
  },
};

export default aboutData;
