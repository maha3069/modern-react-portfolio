import type { Experience } from '../types';

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'Apside',
    position: 'AI Engineer',
    location: 'Le Mans, France',
    startDate: 'December 2024',
    endDate: 'Present',
    description: 'Developing innovative AI solutions for automatic reverse documentation and intelligent chatbot systems. Leading the implementation of AI agents for software traceability improvement and technical documentation generation using cutting-edge generative AI technologies.',
    achievements: [
      'Developed automatic reverse documentation solution using AI agents (LangGraph, LangChain, CrewAI)',
      'Improved software traceability through AI-powered documentation generation',
      'Generated and qualified technical and functional documentation with Generative AI for 50K+ lines of code',
      'Designed and implemented insurance chatbot POC with advanced conversational capabilities',
      'Built robust chatbot backend architecture with modern Python stack'
    ],
    technologies: [
      'LangGraph',
      'LangChain',
      'CrewAI',
      'Generative AI',
      'FastAPI',
      'PostgreSQL',
      'SQLAlchemy',
      'Python',
      'AI Agents',
      'Natural Language Processing',
      'Machine Learning',
      'Backend Development'
    ]
  },
  {
    id: '2',
    company: 'STMicroelectronics',
    position: 'AI Apprentice',
    location: 'Le Mans, France',
    startDate: 'October 2023',
    endDate: 'September 2024',
    description: 'Completed a comprehensive AI apprenticeship program focused on machine learning applications and process optimization. Worked on cutting-edge projects involving data analysis, algorithm development, and system optimization to improve manufacturing processes and operational efficiency.',
    achievements: [
      '70% reduction in processing time through ML algorithm optimization',
      'Developed automated data pipeline reducing manual processing by 85%',
      'Implemented containerized solution improving deployment efficiency',
      'Collaborated with cross-functional teams on AI-driven quality control systems',
      'Presented findings to senior management and technical stakeholders'
    ],
    technologies: [
      'Machine Learning',
      'Python',
      'MySQL',
      'Docker',
      'Git',
      'Linux',
      'Data Analysis',
      'Pandas',
      'NumPy',
    ]
  },
  {
    id: '3',
    company: 'Limagrain- VilmorinMikado',
    position: 'R&D Deep Learning Intern',
    location: 'Angers, France',
    startDate: 'May 2023',
    endDate: 'September 2023',
    description: 'Reduced annual working time by 44 days through process automation.Developed an intelligent seed image sorting system using deep learning technologies. Focused on computer vision applications for agricultural technology.',
    achievements: [
      'Developed high-performance intelligent seed image sorting system with 97% accuracy',
      'Implemented two specialized deep learning models for segmentation and classification',
      'Experimented with and trained various deep learning architectures for optimal performance',
      'Deployed models with graphical user interface using PyQt and Docker containerization',
      'Reduced annual working time by 44 days through process automation'
    ],
    technologies: [
      'TensorFlow',
      'Keras',
      'Python',
      'CNN',
      'Computer Vision',
      'PyQt',
      'Docker',
      'Deep Learning',
      'Image Processing',
      'Neural Networks'
    ]
  }
];