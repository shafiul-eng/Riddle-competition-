import React from 'react';

function CompetitionBoard({ competitions }) {
  return (
    <div>
      <h2>Competitions</h2>
      <ul>
        {competitions.map((c, i) => (
          <li key={i}>{c.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default CompetitionBoard;
