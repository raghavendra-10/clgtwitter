import React, { useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

const EventForm = ({ onEventCreated }) => {
  const [title, setTitle] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const startDate = new Date(start);
    const endDate = new Date(end);

    try {
      const eventRef = await addDoc(collection(db, 'events'), {
        title,
        start: startDate,
        end: endDate,
      });

      setTitle('');
      setStart('');
      setEnd('');

      onEventCreated(eventRef.id);
    } catch (error) {
      console.error('Error adding event:', error);
    }
  };

  return (
    <div className="event-form bg-white p-6 rounded-md shadow-md">
      <h2 className="text-lg font-semibold mb-4">Create Event</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Event Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Start Date & Time:</label>
          <input
            type="datetime-local"
            value={start}
            onChange={(e) => setStart(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">End Date & Time:</label>
          <input
            type="datetime-local"
            value={end}
            onChange={(e) => setEnd(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Create Event
        </button>
      </form>
    </div>
  );
};

export default EventForm;
