import React, { useEffect, useState } from 'react';
import RiddleList from '../components/RiddleList';

function Riddles() {
  const [riddles, setRiddles] = useState([]);

  useEffect(() => {
    fetch('/api/riddles')
      .then(res => res.json())
      .then(data => setRiddles(data));
  }, []);

  return <RiddleList riddles={riddles} />;
}

export default Riddles;
