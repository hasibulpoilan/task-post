import React, { useState } from 'react';
import { PencilAltIcon, UserCircleIcon, TrashIcon } from '@heroicons/react/outline';
// import './app.css';

const MainFeed = () => {
  const [story, setStory] = useState('');
  const [error, setError] = useState('');
  const [stories, setStories] = useState([]); 
  const [expandedStoryId, setExpandedStoryId] = useState(null); 

  const handlePost = () => {
    if (story.length < 3) {
      setError('Story must be at least 3 characters long.');
      return;
    }
    setError('');
    const newStory = {
      id: Date.now(),
      content: story,
      author: 'Yael Adamson-Brown',
      timestamp: new Date().toLocaleString(),
    };
    setStories([newStory, ...stories]); 
    setStory(''); 
    alert('Story posted successfully!');
  };

  const toggleExpand = (id) => {
    setExpandedStoryId(expandedStoryId === id ? null : id);
  };

  const handleDelete = (id) => {
    const confirmed = window.confirm('Are you sure you want to delete this story?');
    if (confirmed) {
      setStories(stories.filter((story) => story.id !== id)); 
      alert('Story deleted successfully!');
    }
  };

  return (
    <div className="flex-grow p-6">
      {/* Logo Section */}
      <div className="flex items-center mb-6">
        <img src="/path/to/logo.png" alt="Logo" className="w-10 h-10 mr-3" />
        <h1 className="text-2xl font-bold text-gray-800">Your Brand</h1>
      </div>

      {/* Story Input Section */}
      <div className="bg-white p-4 rounded shadow mt-4">
        {error && <p className="text-red-500 mb-2">{error}</p>}
        <textarea
          value={story}
          onChange={(e) => setStory(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Write your story..."
        />
        <button
          onClick={handlePost}
          className="bg-blue-500 text-white px-4 py-2 mt-2 rounded flex items-center"
        >
          <PencilAltIcon className="w-5 h-5 mr-2" />
          Post
        </button>
      </div>

      {/* Posted Stories Section */}
      {stories.length > 0 ? (
        stories.map((story) => (
          <div key={story.id} className="bg-white p-4 rounded shadow mb-4 mt-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <UserCircleIcon className="w-8 h-8 text-gray-400 mr-3" />
                <div>
                  <h3 className="font-bold text-gray-800">{story.author}</h3>
                  <p className="text-sm text-gray-500">
                    Posted at {story.timestamp}
                  </p>
                </div>
              </div>
              <button
                onClick={() => handleDelete(story.id)}
                className="text-red-500 hover:text-red-700 flex items-center"
                aria-label="Delete Story"
              >
                <TrashIcon className="w-5 h-5" />
              </button>
            </div>
            <p className="mt-2">
              {expandedStoryId === story.id ? story.content : `${story.content.substring(0, 100)}...`}
            </p>
            <button
              onClick={() => toggleExpand(story.id)}
              className="text-blue-500 mt-2"
            >
              {expandedStoryId === story.id ? 'Collapse Story' : 'Expand Story'}
            </button>
          </div>
        ))
      ) : (
        <p className="text-gray-500 mt-4">No stories posted yet.</p>
      )}
    </div>
  );
};

export default MainFeed;
