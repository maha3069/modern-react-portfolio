import React from 'react';
import { useNavigate } from 'react-router-dom';
import { flashcardCategories } from '../data/flashcards';
import './LearningHub.css';

const LearningHub: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="learning-hub">
      <div className="learning-hub__hero">
        <div className="learning-hub__hero-bg">
          <div className="learning-hub__hero-gradient"></div>
          <div className="learning-hub__hero-pattern"></div>
        </div>
        <div className="learning-hub__hero-content">
          <p className="learning-hub__greeting">Bienvenue</p>
          <h1 className="learning-hub__title">AI & Data Science</h1>
          <p className="learning-hub__subtitle">Interview Preparation Flashcards</p>
          <p className="learning-hub__description">
            7 topics, 62 flashcards couvrant les fondamentaux du Machine Learning,
            Deep Learning et IA Generative.
          </p>
        </div>
      </div>

      <div className="learning-hub__container">
        <div className="learning-hub__grid">
          {flashcardCategories.map((category) => (
            <div
              key={category.slug}
              className="learning-hub__card"
              onClick={() => navigate(`/learning/${category.slug}`)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  navigate(`/learning/${category.slug}`);
                }
              }}
            >
              <div className="learning-hub__card-header">
                <h3 className="learning-hub__card-title">{category.title}</h3>
                <span className="learning-hub__card-badge">
                  {category.items.length} cartes
                </span>
              </div>
              <p className="learning-hub__card-preview">
                {category.items[0].question}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LearningHub;
