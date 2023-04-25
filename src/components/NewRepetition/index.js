import React, { useState } from 'react';

const CreateRepetitionExercise = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [repetitions, setRepetitions] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic, e.g., make API request
    const exercise = { name, repetitions };
    onSubmit(exercise);
    // Clear input fields after submission
    setName('');
    setRepetitions('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create New Repetition Exercise</h2>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Repetitions:
        <input
          type="number"
          value={repetitions}
          onChange={(e) => setRepetitions(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CreateRepetitionExercise;
