import React from 'react';
import { Card } from '../ui';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './Skills.css';

interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'ai-ml'| 'librariesAndFrameworks';
  level: 'beginner' | 'intermediate' | 'advanced';
}

const Skills: React.FC = () => {
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

export default Skills;