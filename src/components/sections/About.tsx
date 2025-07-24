import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './About.css';

const About: React.FC = () => {
  const { elementRef: aboutRef, isVisible: aboutVisible } = useScrollAnimation();

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


      </div>
    </section>
  );
};

export default About;