import React, { useState } from 'react';
import './About.css';

function About() {
  const facts = ["madam is madam reversed.", "cats can run faster than dogs.", "a dog is a man's best friend.",
    "a cat is a woman's best friend.", "a man is a woman's best friend.", "a dog is a man's best friend.",
    "a cat is a man's best friend.", "a woman is a man's best friend",
  ];
  const [fact, setFact] = useState("");

  const showRandomFact = () => {
    setFact(facts[Math.floor(Math.random() * facts.length)]);
  };

  return (
    <div>
      <h2>About This App</h2>
      <p>This app offers fun games and utilities for users.</p>
      <button onClick={showRandomFact}>Show Fun Fact</button>
      <p>{fact}</p>
    </div>
  );
}

export default About;
