import React, { useState, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { flashcardCategories } from '../data/flashcards';
import { Button } from '../components/ui';
import './Flashcard.css';

const Flashcard: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const category = flashcardCategories.find(c => c.slug === slug);

  if (!category) {
    return (
      <div className="flashcard-page">
        <div className="flashcard-page__empty">
          <h2>Topic not found</h2>
          <Button variant="primary" onClick={() => navigate('/learning')}>
            Back to Topics
          </Button>
        </div>
      </div>
    );
  }

  const item = category.items[currentIndex];
  const total = category.items.length;

  const handleFlip = useCallback(() => {
    setIsFlipped(prev => !prev);
  }, []);

  const handlePrev = useCallback(() => {
    setIsFlipped(false);
    setCurrentIndex(prev => Math.max(0, prev - 1));
  }, []);

  const handleNext = useCallback(() => {
    setIsFlipped(false);
    setCurrentIndex(prev => Math.min(total - 1, prev + 1));
  }, [total]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft' && currentIndex > 0) handlePrev();
    if (e.key === 'ArrowRight' && currentIndex < total - 1) handleNext();
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      handleFlip();
    }
  }, [currentIndex, total, handlePrev, handleNext, handleFlip]);

  return (
    <div className="flashcard-page" onKeyDown={handleKeyDown} tabIndex={-1}>
      <div className="flashcard-page__header">
        <button className="flashcard-page__back" onClick={() => navigate('/learning')}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to Topics
        </button>
        <div className="flashcard-page__info">
          <span className="flashcard-page__badge">{category.title}</span>
          <span className="flashcard-page__progress">
            {currentIndex + 1} / {total}
          </span>
        </div>
      </div>

      <div className="flashcard-page__progress-bar">
        <div
          className="flashcard-page__progress-fill"
          style={{ width: `${((currentIndex + 1) / total) * 100}%` }}
        />
      </div>

      <div className="flashcard-page__content">
        <div
          className={`flashcard-page__card ${isFlipped ? 'flashcard-page__card--flipped' : ''}`}
          onClick={handleFlip}
          role="button"
          tabIndex={0}
          aria-label={isFlipped ? 'Showing answer. Click to see question.' : 'Showing question. Click to reveal answer.'}
        >
          <div className="flashcard-page__card-inner">
            <div className="flashcard-page__card-front">
              <span className="flashcard-page__card-label">Question</span>
              <p className="flashcard-page__card-text">{item.question}</p>
              <span className="flashcard-page__card-hint">Click to reveal answer</span>
            </div>
            <div className="flashcard-page__card-back">
              <span className="flashcard-page__card-label">Answer</span>
              <p className="flashcard-page__card-text">{item.answer}</p>
              <span className="flashcard-page__card-hint">Click to see question</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flashcard-page__nav">
        <Button
          variant="outline"
          size="medium"
          disabled={currentIndex === 0}
          onClick={handlePrev}
          leftIcon={
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          }
        >
          Previous
        </Button>

        <div className="flashcard-page__counter">
          {category.items.map((_, i) => (
            <button
              key={i}
              className={`flashcard-page__dot ${i === currentIndex ? 'flashcard-page__dot--active' : ''}`}
              onClick={() => { setIsFlipped(false); setCurrentIndex(i); }}
              aria-label={`Go to card ${i + 1}`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="medium"
          disabled={currentIndex === total - 1}
          onClick={handleNext}
          rightIcon={
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          }
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Flashcard;
