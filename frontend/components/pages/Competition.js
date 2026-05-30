import React, { useEffect, useState } from 'react';
import CompetitionBoard from '../components/CompetitionBoard';

function Competition() {
  const [competitions, setCompetitions] = useState([]);

  useEffect(() => {
    fetch('/api/competition')
      .then(res => res.json())
      .then(data => setCompetitions(data));
  }, []);

  return <CompetitionBoard competitions={competitions} />;
}

export default Competition;
