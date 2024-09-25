import React, { useState, useEffect } from 'react';
import Essayselector from './Essayselector';
import essaysData from '../Data/essay.json';
import './Essayeditor.css';

function Essayeditor() {
  const [selectedTopic, setSelectedTopic] = useState('');
  const [essayContent, setEssayContent] = useState('');
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  function handleSelect(topic) {
    const selectedEssay = essaysData.find(e => e.topic === topic);
    if (selectedEssay) {
      setSelectedTopic(topic);
      setEssayContent(selectedEssay.content);
      setDisplayedText('');
      setIsTyping(true);
    } else {
      setSelectedTopic('');
      setEssayContent('');
      setDisplayedText('');
      setIsTyping(false);
    }
  }

  function handleKeyPress(event) {
    if (isTyping) {
      const nextCharacter = essayContent[displayedText.length];
      if (nextCharacter) {
        setDisplayedText(displayedText + nextCharacter);
      } else {
        setIsTyping(false);
      }
    }
  }

  return (
    <div className="Essayeditor" tabIndex="0" onKeyDown={handleKeyPress}>
      {!selectedTopic ? (
        <div style={{display:'flex', flexDirection:'column'}}>
          <h1>I would like to write an essay about TOPIC:</h1>
          <Essayselector topics={essaysData.map(e => e.topic)} onSelect={handleSelect} />
        </div>
      ) : (
        <div className="essay-container">
          <h2>{selectedTopic}</h2>
          <p>{displayedText}<span className="cursor">|</span></p> {}
        </div>
      )}
    </div>
  );
}

export default Essayeditor;
