import React from 'react';

function RiddleList({ riddles }) {
  return (
    <div>
      <h2>Riddles</h2>
      <ul>
        {riddles.map((r, i) => (
          <li key={i}>{r.question}</li>
        ))}
      </ul>
    </div>
  );
}

export default RiddleList;
