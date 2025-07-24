import React from 'react';
import { Card } from '../ui';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './About.css';

interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'ai-ml'| 'librariesAndFrameworks';
  level: 'beginner' | 'intermediate' | 'advanced';
}

const About: React.FC = () => {
  const { elementRef: aboutRef, isVisible: aboutVisible } = useScrollAnimation();
  const { elementRef: skillsRef, isVisible: skillsVisible } = useScrollAnimation();

  const skills: Skill[] = [
    // AI & Machine Learning
    { name: 'Machine Learning', category: 'ai-ml', level: 'intermediate' },
    { name: 'Deep Learning', category: 'ai-ml', level: 'intermediate' },
    { name: 'Generative AI', category: 'ai-ml', level: 'intermediate' },
    { name: 'Python', category: 'ai-ml', level: 'intermediate' },
    
    // AI & Machine Learning Libraries & Frameworks
    { name: 'TensorFlow',category: 'librariesAndFrameworks', level: 'intermediate' },
    { name: 'PyTorch',category: 'librariesAndFrameworks', level: 'intermediate' },
    { name: 'Keras', category: 'librariesAndFrameworks', level: 'beginner' },
    { name: 'Scikit-learn',category: 'librariesAndFrameworks', level: 'beginner' },
    { name: 'OpenCV', category: 'librariesAndFrameworks', level: 'intermediate' },
    { name: 'spaCy', category: 'librariesAndFrameworks', level: 'intermediate' },
    { name: 'Transformers',category: 'librariesAndFrameworks', level: 'intermediate' },
    { name: 'LangChain', category: 'librariesAndFrameworks', level: 'intermediate' },
    { name: 'LangGraph', category: 'librariesAndFrameworks' ,level: 'intermediate' },
    { name: 'CrewAI', category: 'librariesAndFrameworks', level: 'intermediate' },


    // Frontend Skills
    { name: 'React', category: 'frontend', level: 'advanced' },
    { name: 'JavaScript', category: 'frontend', level: 'advanced' },
    { name: 'HTML/CSS', category: 'frontend', level: 'advanced' },

    // Backend & Database
    { name: 'MongoDb.', category: 'backend', level: 'intermediate' },
    { name: 'MySQL', category: 'backend', level: 'intermediate' },
    { name: 'REST APIs', category: 'backend', level: 'intermediate' },
    
    // Tools & Technologies
    { name: 'Git', category: 'tools', level: 'advanced' },
    { name: 'Docker', category: 'tools', level: 'intermediate' },
    { name: 'VS Code', category: 'tools', level: 'advanced' },
    
    
  ];

  const skillCategories = {
    'ai-ml': 'AI & Machine Learning',
    'librariesAndFrameworks': 'libraries And Frameworks',
    backend: 'Backend & Database',
    frontend: 'Frontend Development',
    tools: 'Tools & Technologies',
  };

  const getSkillsByCategory = (category: Skill['category']) => {
    return skills.filter(skill => skill.category === category);
  };

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div 
          ref={aboutRef}
          className={`about-content ${aboutVisible ? 'scroll-animate animate-in' : 'scroll-animate'}`}
        >
          <div className="about-text">
            <h2 className="about-title">About Me</h2>
            <div className="about-summary">
              <p>
                I'm a passionate about Data and IA with a strong foundation in modern web technologies 
                and a growing expertise in artificial intelligence. 
                I have gained hands-on experience on data analysis, data visualization,
                machine learning and Generative IA .
              </p>
              <p>
              In addition to my technical skills, I am a proactive learner who is always looking for
               ways to improve and grow. I am excited to continue my journey in data science and see
                where it takes me. If you are looking for a driven and dedicated individual with a 
                passion for data science, please do not hesitate to reach out
              </p>
            </div>
          </div>
          
          <div className="about-photo">
            <div className="photo-container hover-scale">
              <img 
                src="/api/placeholder/300/400" 
                alt="Professional headshot" 
                className="profile-image"
                loading="lazy"
              />
              <div className="photo-overlay"></div>
            </div>
          </div>
        </div>

        <div 
          ref={skillsRef}
          className={`skills-section ${skillsVisible ? 'scroll-animate animate-in' : 'scroll-animate'}`}
        >
          <h3 className="skills-title">Technical Skills</h3>
          <div className="skills-grid">
            {Object.entries(skillCategories).map(([category, title], index) => (
              <Card 
                key={category} 
                variant="elevated" 
                hover={true} 
                className={`skill-category hover-lift ${skillsVisible ? 'animate-fade-in-up' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h4 className="category-title">{title}</h4>
                <div className="skills-list">
                  {getSkillsByCategory(category as Skill['category']).map((skill) => (
                    <div key={skill.name} className={`skill-tag skill-${skill.level} hover-scale`}>
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;