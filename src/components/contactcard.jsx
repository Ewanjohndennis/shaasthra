import React from 'react';
import styled from 'styled-components';
import Contact from '../pages/contact';

const ContactCard = () => {
  return (
    <StyledWrapper>
      <div className="gold-form-container">
        <form className="gold-form">
          <div className="gold-form-group">
            <label className="gold-form-label" htmlFor="name">Full Name</label>
            <input className="gold-form-input" type="text" required />
          </div>
          <div className="gold-form-group">
            <label className="gold-form-label" htmlFor="email">Email</label>
            <input className="gold-form-input" type="email" id="email" required />
          </div>
          <div className="gold-form-group">
            <label className="gold-form-label" htmlFor="message">Message</label>
            <textarea className="gold-form-textarea" id="message" required defaultValue={""} />
          </div>
          <button className="gold-form-button" type="submit">Submit</button>
        </form>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .gold-form-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .gold-form {
    width: 400px;
    height: 400px;
    padding: 25px;
    background: linear-gradient(135deg, #ffd700, #daa520, #b8860b);
    border-radius: 20px;
    box-shadow:
      10px 10px 20px rgba(139, 90, 43, 0.6),
      -10px -10px 20px rgba(204, 173, 2, 0.126),
      inset 2px 2px 5px rgba(237, 201, 0, 0.5),
      inset -2px -2px 5px rgba(139, 90, 43, 0.5);
    background-image: radial-gradient(
        circle,
        rgba(255, 215, 0, 0.25) 1px,
        transparent 1px
      ),
      radial-gradient(circle, rgba(255, 193, 7, 0.15) 1px, transparent 1px);
    background-size: 20px 20px;
    background-position:
      0 0,
      10px 10px;
  }

  .gold-form-group {
    position: relative;
    margin-bottom: 14px;
  }

  .gold-form-label {
    display: block;
    color: hsl(44, 100%, 67%); /* Light gold color */
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 8px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    transition: color 0.3s cubic-bezier(0.5, 0, 0.1, 1);
  }

  .gold-form-input,
  .gold-form-textarea {
    width: 100%;
    padding: 14px 16px;
    border: none;
    background: linear-gradient(135deg, #daa520, #b8860b);
    border-radius: 12px;
    font-weight: bold;
    box-shadow:
      6px 6px 12px rgba(139, 90, 43, 0.6),
      -6px -6px 12px rgba(255, 215, 0, 0.4),
      inset 2px 2px 4px rgba(139, 90, 43, 0.5),
      inset -2px -2px 4px rgba(255, 215, 0, 0.5);
    font-size: 16px;
    color: hsl(44, 100%, 84%);
    transition:
      box-shadow 0.4s cubic-bezier(0.5, 0, 0.1, 1),
      background 0.4s cubic-bezier(0.5, 0, 0.1, 1),
      border-color 0.4s cubic-bezier(0.5, 0, 0.1, 1);
  }

  .gold-form-textarea {
    height: 90px;
    resize: none;
  }

  .gold-form-input:focus,
  .gold-form-textarea:focus {
    outline: none;
    background: linear-gradient(135deg, #daa520, #b8860b);
    border-color: #ffcc00;
    box-shadow:
      4px 4px 8px rgba(139, 90, 43, 0.7),
      -4px -4px 8px rgba(255, 215, 0, 0.5),
      inset 4px 4px 8px rgba(139, 90, 43, 0.6),
      inset -4px -4px 8px rgba(255, 215, 0, 0.6);
  }

  .gold-form-input:focus + .gold-form-label,
  .gold-form-textarea:focus + .gold-form-label {
    color: #ffcc00;
  }

  .gold-form-button {
    width: 100%;
    padding: 10px;
    background: linear-gradient(135deg, #f0cd07, #ffc32d, #f5ba26);
    border: 0px solid rgba(255, 217, 0, 0);
    border-radius: 12px;
    color: #3d2f1a;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.8px;
    margin-top: .2 px;
    text-transform: uppercase;
    cursor: pointer;
    box-shadow:
      10px 10px 20px rgba(139, 90, 43, 0.6),
      -10px -10px 20px rgba(255, 215, 0, 0.4),
      inset 2px 2px 5px rgba(255, 215, 0, 0.5),
      inset -2px -2px 5px rgba(139, 90, 43, 0.5);
    transition:
      transform 0.3s cubic-bezier(0.5, 0, 0.1, 1),
      box-shadow 0.3s cubic-bezier(0.5, 0, 0.1, 1),
      background 0.4s cubic-bezier(0.5, 0, 0.1, 1);
  }

  .gold-form-button:hover {
    background: linear-gradient(135deg, #f0cd07, #ffc32d, #f5ba26);
    box-shadow:
      10px 10px 20px rgba(139, 90, 43, 0.6),
      -10px -10px 20px rgba(255, 215, 0, 0.4),
      inset 2px 2px 5px rgba(255, 215, 0, 0.5),
      inset -2px -2px 5px rgba(139, 90, 43, 0.5);
    transform: translateY(-2px);
  }

  .gold-form-button:active {
    background: linear-gradient(135deg, #f0cd07, #ffc32d, #f5ba26);
    box-shadow:
      10px 10px 20px rgba(139, 90, 43, 0.6),
      -10px -10px 20px rgba(255, 215, 0, 0.4),
      inset 2px 2px 5px rgba(255, 215, 0, 0.5),
      inset -2px -2px 5px rgba(139, 90, 43, 0.5);
    transform: translateY(1px);
  }`;

export default ContactCard;
