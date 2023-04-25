import React, { useState } from 'react';

const CreateDurationExercise = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [duration, setDuration] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic, e.g., make API request
    const exercise = { name, duration };
    onSubmit(exercise);
    // Clear input fields after submission
    setName('');
    setDuration('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create New Duration Exercise</h2>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Duration (in minutes):
        <input
          type="number"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CreateDurationExercise;
