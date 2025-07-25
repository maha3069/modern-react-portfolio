import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Predictive Maintenance System',
    description: 'A project focused on predicting equipment failures to enable timely maintenance and reduce unexpected downtime.',
    longDescription:
      'The Predictive Maintenance System analyzes data to identify patterns indicating potential equipment breakdowns. By leveraging data-driven insights, this project aims to anticipate when maintenance activities should be performed, minimizing unplanned outages and optimizing machinery lifecycle.',
    technologies: ['Python', 'Machine Learning', 'Data Analysis'],
    imageUrl: `${import.meta.env.BASE_URL}images/projects/predictive-maintenance.jpg`,
    githubUrl: 'https://github.com/mahahajmeftah/Predictive-Maintenance-System',
    featured: true,
    category: 'project'
  },
  {
    id: '2',
    title: 'Clothes Classification using Deep Learning',
    description: 'A deep learning-based approach for automatic classification of various clothing items.',
    longDescription:
      'This project implements a deep learning model trained to classify clothes into multiple categories. Utilizing modern neural network architectures, it processes images of clothing and assigns them to their correct labels, supporting advancements in fashion tech and automated inventory management.',
    technologies: ['Python', 'Deep Learning', 'TensorFlow', 'Computer Vision'],
    imageUrl: `${import.meta.env.BASE_URL}images/projects/clothes-classification.jpg`,
    githubUrl: 'https://github.com/mahahajmeftah/clothes-Calssification',
    featured: false,
    category: 'project'
  },
  {
    id: '3',
    title: 'Lead Scoring with Logistic Regression',
    description: 'Building a logistic regression model to score and prioritize leads for conversion likelihood.',
    longDescription:
      'This project develops a machine learning model using logistic regression to assign scores to incoming leads. The scoring system enables businesses to focus resources on leads most likely to convert, improving marketing efficiency and sales outcomes.',
    technologies: ['Python', 'Logistic Regression', 'Pandas', 'Scikit-learn'],
    imageUrl: `${import.meta.env.BASE_URL}images/projects/lead-scoring.jpg`,
    githubUrl: 'https://github.com/mahahajmeftah/Lead-Scoring-With-Logistic-Regression',
    featured: false,
    category: 'project'
  },
  {
    id: '4',
    title: 'Data Analysis and Visualisations on Prosper Loan Dataset',
    description: 'Comprehensive data analysis and visualization on the Prosper Loan dataset.',
    longDescription:
      'This project explores the Prosper Loan dataset by conducting detailed data analysis and creating a variety of visualizations. It uncovers patterns and insights related to borrower characteristics, loan performance, and risk factors, supporting data-driven decision-making in finance.',
    technologies: ['Python', 'Data Analysis', 'Pandas', 'Matplotlib', 'Jupyter'],
    imageUrl: `${import.meta.env.BASE_URL}images/projects/prosper-loan-analysis.jpg`,
    githubUrl: 'https://nbviewer.org/github/mahahajmeftah/Exploratory-data-analysis-of-Prosper-Loan-data/blob/main/exploratory-data%20analysis.ipynb',
    featured: false,
    category: 'project'
  }
];
