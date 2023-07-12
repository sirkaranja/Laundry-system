import React from 'react';
import './newsletter.css';

const NewsletterTab = () => {
  const handleSubscribe = () => {
    console.log('Subscribed!');
  };

  return (
    <div className="newsletter-tab">
      <div>
        <p>Subscribe to our newsletter for the latest updates!</p>
      </div>
      <button onClick={handleSubscribe}>Subscribe Now</button>
    </div>
  );
};

export default NewsletterTab;
