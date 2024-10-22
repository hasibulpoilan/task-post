import React, { useState } from 'react';
import { FaSearch, FaPlus, FaEllipsisH } from 'react-icons/fa';
import { FiHome, FiCompass } from 'react-icons/fi';
import logo from '../assets/logo.png'; 

const contacts = [
  { id: 1, name: 'Alice Johnson' },
  { id: 2, name: 'Bob Smith' },
  { id: 3, name: 'Charlie Davis' },
];

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredContacts, setFilteredContacts] = useState(contacts);
  const [showModal, setShowModal] = useState(false);

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query) {
      const filtered = contacts.filter((contact) =>
        contact.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredContacts(filtered);
    } else {
      setFilteredContacts(contacts);
    }
  };

  const handleCreate = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <div className="bg-white shadow-md p-4 flex flex-col md:flex-row justify-between items-center md:space-y-0 space-y-4">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        <img src={logo} alt="Logo" className="w-8 h-8" />
        <div className="text-2xl font-bold text-blue-600">My Apps</div>
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-6 text-gray-600 text-lg hidden md:flex">
        <a href="#" className="flex items-center hover:text-blue-600 transition">
          <FiHome className="mr-1" /> Home
        </a>
        <a href="#" className="flex items-center hover:text-blue-600 transition">
          <FiCompass className="mr-1" /> Explore
        </a>
        <a href="#" className="flex items-center hover:text-blue-600 transition">
          <FaSearch className="mr-1" /> Search
        </a>
      </div>

      {/* Search Bar */}
      <div className="flex-grow mx-4">
        <input
          type="text"
          placeholder="Search for contacts and projects"
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* User and Action Buttons */}
      <div className="flex items-center space-x-4">
        <span className="text-gray-700 hidden md:block">Yael Adamson Brown</span>
        <button
          onClick={handleCreate}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition flex items-center"
        >
          <FaPlus className="mr-2 hidden md:block" />
          Create
        </button>
        <button className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition">
          <FaEllipsisH />
        </button>
      </div>

      {/* Search Results */}
      {searchQuery && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 bg-white shadow-lg p-4 rounded-lg w-80">
          <h3 className="text-lg font-semibold mb-2">Search Results</h3>
          {filteredContacts.length > 0 ? (
            filteredContacts.map((contact) => (
              <div key={contact.id} className="p-2 hover:bg-gray-100 rounded-md">
                {contact.name}
              </div>
            ))
          ) : (
            <div className="text-gray-500">No contacts found</div>
          )}
        </div>
      )}

      {/* Modal for Create */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-xl font-bold mb-4">Create New Project/Contact</h2>
            <input
              type="text"
              placeholder="Project/Contact Name"
              className="w-full p-2 border border-gray-300 rounded-lg mb-4"
            />
            <div className="flex justify-end space-x-2">
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded-lg"
                onClick={handleModalClose}
              >
                Cancel
              </button>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                onClick={handleModalClose}
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
