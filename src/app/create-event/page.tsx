'use client';  // Ensure this is a client-side component

import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';  // Adjust path based on your structure

const CreateEvent = () => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    // Simple Supabase insert call
    const { error } = await supabase.from('events').insert({
      title,
      date,
      location,
      description,
    });

    if (error) {
      setError('Failed to create event. Please try again.');
    } else {
      setSuccess('Event created successfully!');
      setTitle('');  // Clear form fields
      setDate('');
      setLocation('');
      setDescription('');
    }

    setLoading(false);
  };

  return (
    <div className="max-w-2xl mx-auto py-20">
      <h1 className="text-4xl font-bold mb-8 text-center">Create an Event</h1>

      {/* Success/Error Messages */}
      {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
      {success && <p className="text-green-500 mb-4 text-center">{success}</p>}

      {/* Event Creation Form */}
      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-md">
        <div>
          <label htmlFor="title" className="block text-lg font-medium text-gray-700">Event Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full border border-gray-300 p-3 rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter event title"
            required
          />
        </div>

        <div>
          <label htmlFor="date" className="block text-lg font-medium text-gray-700">Event Date</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="mt-1 block w-full border border-gray-300 p-3 rounded-md focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="location" className="block text-lg font-medium text-gray-700">Event Location</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="mt-1 block w-full border border-gray-300 p-3 rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter event location"
            required
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-lg font-medium text-gray-700">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 block w-full border border-gray-300 p-3 rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="Describe your event"
            rows={4}
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full px-4 py-3 bg-blue-500 text-white font-bold rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-300"
          disabled={loading}
        >
          {loading ? 'Creating...' : 'Create Event'}
        </button>
      </form>
    </div>
  );
};

export default CreateEvent;
