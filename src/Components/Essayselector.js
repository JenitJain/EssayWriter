import React from 'react';

function Essayselector({ topics, onSelect }) {
  function handleChange(event) {
    onSelect(event.target.value);
  }

  return (
    <select onChange={handleChange}>
      <option value="">Select a Topic</option>
      {topics.map((topic, index) => (
        <option key={index} value={topic}>
          {topic}
        </option>
      ))}
    </select>
  );
}

export default Essayselector;
