import React from 'react';
import { Card } from '../ui';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './Skills.css';

interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'ai-ml'| 'librariesAndFrameworks';
}

const Skills: React.FC = () => {
  const { elementRef: skillsRef, isVisible: skillsVisible } = useScrollAnimation();

  const skills: Skill[] = [
    // AI & Machine Learning
    { name: 'Machine Learning', category: 'ai-ml' },
    { name: 'Deep Learning', category: 'ai-ml' },
    { name: 'Generative AI', category: 'ai-ml' },
    { name: 'Python', category: 'ai-ml' },
    
    // AI & Machine Learning Libraries & Frameworks
    { name: 'TensorFlow', category: 'librariesAndFrameworks' },
    { name: 'PyTorch', category: 'librariesAndFrameworks' },
    { name: 'Keras', category: 'librariesAndFrameworks' },
    { name: 'Scikit-learn', category: 'librariesAndFrameworks' },
    { name: 'OpenCV', category: 'librariesAndFrameworks' },
    { name: 'spaCy', category: 'librariesAndFrameworks' },
    { name: 'Transformers', category: 'librariesAndFrameworks' },
    { name: 'LangChain', category: 'librariesAndFrameworks' },
    { name: 'LangGraph', category: 'librariesAndFrameworks' },
    { name: 'CrewAI', category: 'librariesAndFrameworks' },

    // Frontend Skills
    { name: 'React', category: 'frontend' },
    { name: 'JavaScript', category: 'frontend' },
    { name: 'HTML/CSS', category: 'frontend' },

    // Backend & Database
    { name: 'MongoDB', category: 'backend' },
    { name: 'MySQL', category: 'backend' },
    { name: 'REST APIs', category: 'backend' },
    
    // Tools & Technologies
    { name: 'Git', category: 'tools' },
    { name: 'Docker', category: 'tools' },
    { name: 'VS Code', category: 'tools' },
  ];

  const skillCategories = {
    'ai-ml': 'AI & Machine Learning',
    'librariesAndFrameworks': 'Libraries & Frameworks',
    backend: 'Backend & Database',
    frontend: 'Frontend Development',
    tools: 'Tools & Technologies',
  };

  const getSkillsByCategory = (category: Skill['category']) => {
    return skills.filter(skill => skill.category === category);
  };

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <div 
          ref={skillsRef}
          className={`skills-content ${skillsVisible ? 'scroll-animate animate-in' : 'scroll-animate'}`}
        >
          <h2 className="skills-title">Technical Skills</h2>
          <p className="skills-description">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
          
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
                    <div key={skill.name} className="skill-tag hover-scale">
                      <span className="skill-name">{skill.name}</span>
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

export default Skills;