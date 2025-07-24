import React from 'react';
import { experiences } from '../../data/experience';
import { Card } from '../ui';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './Experience.css';

const Experience: React.FC = () => {
  const { elementRef: experienceRef, isVisible: experienceVisible } = useScrollAnimation();

  const formatDateRange = (startDate: string, endDate: string) => {
    return `${startDate} - ${endDate}`;
  };

  const renderTechnologyTags = (technologies: string[]) => {
    return technologies.map((tech) => (
      <span key={tech} className="tech-tag">
        {tech}
      </span>
    ));
  };

  const renderAchievements = (achievements: string[]) => {
    return achievements.map((achievement, index) => (
      <li key={index} className="achievement-item">
        <span className="achievement-icon">🚀</span>
        <span className="achievement-text">{achievement}</span>
      </li>
    ));
  };

  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">
        <div className="section-header">
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">
            Building expertise through hands-on experience in AI and software development
          </p>
        </div>

        <div 
          ref={experienceRef}
          className={`experience-timeline ${experienceVisible ? 'scroll-animate animate-in' : 'scroll-animate'}`}
        >
          {experiences.map((experience, index) => (
            <div 
              key={experience.id} 
              className={`experience-card ${experienceVisible ? 'animate-fade-in-up' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="timeline-marker">
                <div className="timeline-dot hover-scale"></div>
                {index < experiences.length - 1 && <div className="timeline-line"></div>}
              </div>
              
              <Card 
                variant="elevated" 
                hover={true} 
                className="experience-content hover-lift"
              >
                <div className="experience-header">
                  <div className="experience-title-group">
                    <h3 className="experience-position">{experience.position}</h3>
                    <h4 className="experience-company">{experience.company}</h4>
                  </div>
                  <div className="experience-meta">
                    <span className="experience-date">
                      {formatDateRange(experience.startDate, experience.endDate)}
                    </span>
                    <span className="experience-location">{experience.location}</span>
                  </div>
                </div>

                <div className="experience-description">
                  <p>{experience.description}</p>
                </div>

                {experience.achievements.length > 0 && (
                  <div className="experience-achievements">
                    <h5 className="achievements-title">Key Achievements</h5>
                    <ul className="achievements-list">
                      {renderAchievements(experience.achievements)}
                    </ul>
                  </div>
                )}

                {experience.technologies.length > 0 && (
                  <div className="experience-technologies">
                    <h5 className="technologies-title">Technologies Used</h5>
                    <div className="technologies-list">
                      {renderTechnologyTags(experience.technologies)}
                    </div>
                  </div>
                )}
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;