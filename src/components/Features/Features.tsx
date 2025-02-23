import React, { useState } from 'react';
import './Features.css';
import Modal from '../Modal/Modal';
import notsure from './images/notsure.jpg';
import diabetes from './images/diabetes.jpg'
import healthy from './images/healthy.jpg'

const UserCategories: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode>(null);

  const handleCategoryClick = (category: string) => {
    let content;
    switch (category) {
      case 'have-diabetes':
        content = (
          <div>
            <h2>I Have Diabetes</h2>
            <ul>
              <li>Glucose Level Tracking</li>
              <li>Diet Management</li>
              <li>Personalized Insights</li>
              <li>Easy-to-Use Interface</li>
            </ul>
          </div>
        );
        break;
      case 'dont-have-diabetes':
        content = (
          <div>
            <h2>I Don't Have Diabetes</h2>
            <ul>
              <li>Healthy Living Tips</li>
              <li>Diet and Exercise Plans</li>
              <li>Preventive Measures</li>
              <li>Wellness Tracking</li>
            </ul>
          </div>
        );
        break;
      case 'not-sure':
        content = (
          <div>
            <h2>I'm Not Sure</h2>
            <p>Answer the following 10 symptoms to find out if you might have diabetes:</p>
            <ol>
              <li>Increased Thirst</li>
              <li>Frequent Urination</li>
              <li>Extreme Hunger</li>
              <li>Unexplained Weight Loss</li>
              <li>Fatigue</li>
              <li>Blurred Vision</li>
              <li>Slow-Healing Sores</li>
              <li>Frequent Infections</li>
              <li>Darkened Skin Areas</li>
              <li>Tingling or Numbness</li>
            </ol>
          </div>
        );
        break;
      default:
        content = null;
    }
    setModalContent(content);
    setModalIsOpen(true);
  };

  return (
    <section className="user-categories">
      <h2>Select Your Category</h2>
      <div className="categories">
        <div className="category" onClick={() => handleCategoryClick('have-diabetes')}>
          <img src={diabetes} alt="I Have Diabetes" className="category-image" />
          <h3>I Have Diabetes</h3>
        </div>
        <div className="category" onClick={() => handleCategoryClick('dont-have-diabetes')}>
          <img src={healthy} alt="I Don't Have Diabetes" className="category-image" />
          <h3>I Don't Have Diabetes</h3>
        </div>
        <div className="category" onClick={() => handleCategoryClick('not-sure')}>
          <img src={notsure} alt="I'm Not Sure" className="category-image" />
          <h3>I'm Not Sure</h3>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        content={modalContent}
      />
    </section>
  );
}

export default UserCategories;
