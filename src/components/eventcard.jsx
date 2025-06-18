import React from 'react';
import styled from 'styled-components';

// Card Component
const Card = ({ title, description, date, venue }) => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="card2">
          <div className="content">
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="details">
              <p><strong>Date:</strong> {date}</p>
              <p><strong>Venue:</strong> {venue}</p>
            </div>
          </div>
          <button className="register-btn">Register</button>
        </div>
      </div>
    </StyledWrapper>
  );
};

// Styled Components
const StyledWrapper = styled.div`
  .card {
    width: 100%;
    max-width: 320px;
    height: 100%;
    background-image: linear-gradient(163deg, #dfaa05 0%, #4d208d 100%);
    border-radius: 20px;
    transition: all 0.3s;
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }

  .card2 {
    min-width: 300px ;
    border: 2px solid #dfaa05;
    min-height: 300px; /* ✅ Equal height based on tallest content */
    background-color: #4d208d;
    border-radius: 15px;
    padding: 12px;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: all 0.2s;
  }

  .card2:hover {
    transform: scale(0.98);
    border-radius: 20px;
  }

  .card:hover {
    box-shadow: 0px 0px 30px 1px #dfaa05;
  }

  .content h3 {
    margin: 0;
    font-size: 1.1rem;
    color: #dfaa05;
  }

  .content p {
    font-size: 0.85rem;
    margin-top: 0.5rem;
    color: #ccc;
  }

  .details {
    font-size: 0.75rem;
    margin-top: 0.5rem;
    color: #999;
  }

  .register-btn {
    background-color: #dfaa05;
    color: #1a1a1a;
    border: none;
    border-radius: 8px;
    padding: 7px 10px;
    font-size: 0.8rem;
    font-weight: bold;
    cursor: pointer;
    margin-top: 10px;
    transition: background-color 0.2s;
  }

  .register-btn:hover {
    background-color: #ffffff;
  }
`;

// CardsRow Component
const StyledCardsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
  justify-items: center;
  align-items: stretch; /* ✅ Makes card heights equal */
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;

  @media (max-width: 768px) {
    gap: 16px;
    padding: 16px;
  }
`;

export const CardsRow = ({ cards }) => (
  <StyledCardsRow>
    {cards.map((card, idx) => (
      <Card
        key={idx}
        title={card.title}
        description={card.description}
        date={card.date}
        venue={card.venue}
      />
    ))}
  </StyledCardsRow>
);

export default Card;
