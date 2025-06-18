import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <button onClick={() => navigate('/')}>
        <span>Back</span>
        <span className="arrow">←</span>
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  z-index: 999;
  top: 1.5rem;
  left: 4rem;

  @media (max-width: 600px) {
    top: 0.8rem;
    left: 50%;
    transform: translateX(-50%);
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 0.6em 1.2em;
    font-size: 1rem;
    background: #dfaa05;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
    transition: all 0.2s ease-in-out;
    position: relative;
  }

  .arrow {
    opacity: 0;
    transform: translateX(-5px);
    transition: opacity 0.3s ease, transform 0.3s ease;
  }

  button:hover {
    background: #4d208d;
    color: #dfaa05;
    .arrow{
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

export default BackButton;
