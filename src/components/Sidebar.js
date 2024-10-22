import React, { useState } from 'react';
import {
  CalendarIcon,
  UsersIcon,
  BriefcaseIcon,
  OfficeBuildingIcon,
  PhotographIcon,
} from '@heroicons/react/outline';

const Sidebar = () => {
  // State for different sections
  const [events, setEvents] = useState([
    'Youth Event',
    'Digital Inclusion',
    'Training Program',
  ]);
  const [contacts, setContacts] = useState(['Ali Frank', 'Adam Referral']);
  const [projects, setProjects] = useState(['A Training Project', 'B Training Project']);
  const [albums, setAlbums] = useState(['Art Exhibition', 'Photography Event']);
  const [organizations, setOrganizations] = useState(['Organization 1', 'Organization 2', 'Organization 3']);
  const [followers, setFollowers] = useState(['Follower 1', 'Follower 2']);
  const [peopleYouFollow, setPeopleYouFollow] = useState(['John Doe', 'Jane Smith']);

  // State for showing all in each section
  const [showAllEvents, setShowAllEvents] = useState(false);
  const [showAllContacts, setShowAllContacts] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllAlbums, setShowAllAlbums] = useState(false);
  const [showAllOrganizations, setShowAllOrganizations] = useState(false);
  const [showAllFollowers, setShowAllFollowers] = useState(false);
  const [showAllPeopleYouFollow, setShowAllPeopleYouFollow] = useState(false);

  // Function to add a new contact
  const addNewContact = () => {
    const newContact = prompt('Enter new contact name:');
    if (newContact) {
      setContacts([...contacts, newContact]);
    }
  };

  // Function to add a new project
  const addNewProject = () => {
    const newProject = prompt('Enter new project name:');
    if (newProject) {
      setProjects([...projects, newProject]);
    }
  };

  // Function to add a new album
  const addNewAlbum = () => {
    const newAlbum = prompt('Enter new album name:');
    if (newAlbum) {
      setAlbums([...albums, newAlbum]);
    }
  };

  // Function to add a new organization (similar approach for other sections)
  const addNewOrganization = () => {
    const newOrganization = prompt('Enter new organization name:');
    if (newOrganization) {
      setOrganizations([...organizations, newOrganization]);
    }
  };

  // Function to handle "Show All" actions
  const toggleShowAll = (section) => {
    switch (section) {
      case 'events':
        setShowAllEvents(!showAllEvents);
        break;
      case 'contacts':
        setShowAllContacts(!showAllContacts);
        break;
      case 'projects':
        setShowAllProjects(!showAllProjects);
        break;
      case 'albums':
        setShowAllAlbums(!showAllAlbums);
        break;
      case 'organizations':
        setShowAllOrganizations(!showAllOrganizations);
        break;
      case 'followers':
        setShowAllFollowers(!showAllFollowers);
        break;
      case 'peopleYouFollow':
        setShowAllPeopleYouFollow(!showAllPeopleYouFollow);
        break;
      default:
        break;
    }
  };

  return (
    <div className="w-72 bg-white shadow-lg p-6 h-screen overflow-y-auto">
      {/* Logo Section */}
      <div className="flex items-center mb-8">
        <img src="/path/to/logo.png" alt="Logo" className="w-12 h-12 mr-3" />
        <h1 className="text-2xl font-bold text-gray-800">Your Brand</h1>
      </div>

      {/* Events Section */}
      <div className="mb-6">
        <h2 className="font-semibold text-lg mb-4 flex items-center text-gray-700">
          <CalendarIcon className="w-6 h-6 mr-3 text-blue-500" /> Events
        </h2>
        <ul className="space-y-3">
          {(showAllEvents ? events : events.slice(0, 2)).map((event, index) => (
            <li key={index} className="text-blue-500 cursor-pointer hover:underline">
              {event}
            </li>
          ))}
        </ul>
        <button 
          className="mt-3 text-sm text-blue-500 hover:underline"
          onClick={() => toggleShowAll('events')}
        >
          {showAllEvents ? 'Show Less' : 'Show All'}
        </button>
      </div>

      {/* Contacts Section */}
      <div className="mb-6">
        <h2 className="font-semibold text-lg mb-4 flex items-center text-gray-700">
          <UsersIcon className="w-6 h-6 mr-3 text-green-500" /> Contacts
        </h2>
        <ul className="space-y-3">
          {(showAllContacts ? contacts : contacts.slice(0, 2)).map((contact, index) => (
            <li key={index} className="text-gray-700 cursor-pointer hover:underline">
              {contact}
            </li>
          ))}
        </ul>
        <button 
          className="mt-3 text-sm text-blue-500 hover:underline"
          onClick={() => toggleShowAll('contacts')}
        >
          {showAllContacts ? 'Show Less' : 'Show All'}
        </button>
        <button 
          className="mt-3 text-sm text-blue-500 hover:underline"
          onClick={addNewContact}
        >
          + New Contact
        </button>
      </div>

      {/* Projects Section */}
      <div className="mb-6">
        <h2 className="font-semibold text-lg mb-4 flex items-center text-gray-700">
          <BriefcaseIcon className="w-6 h-6 mr-3 text-purple-500" /> Projects
        </h2>
        <ul className="space-y-3">
          {(showAllProjects ? projects : projects.slice(0, 2)).map((project, index) => (
            <li key={index} className="text-gray-700 cursor-pointer hover:underline">
              {project}
            </li>
          ))}
        </ul>
        <button 
          className="mt-3 text-sm text-blue-500 hover:underline"
          onClick={() => toggleShowAll('projects')}
        >
          {showAllProjects ? 'Show Less' : 'Show All'}
        </button>
        <button 
          className="mt-3 text-sm text-blue-500 hover:underline"
          onClick={addNewProject}
        >
          + New Project
        </button>
      </div>

      {/* Albums Section */}
      <div className="mb-6">
        <h2 className="font-semibold text-lg mb-4 flex items-center text-gray-700">
          <PhotographIcon className="w-6 h-6 mr-3 text-orange-500" /> Albums
        </h2>
        <ul className="space-y-3">
          {(showAllAlbums ? albums : albums.slice(0, 2)).map((album, index) => (
            <li key={index} className="text-gray-700 cursor-pointer hover:underline">
              {album}
            </li>
          ))}
        </ul>
        <button 
          className="mt-3 text-sm text-blue-500 hover:underline"
          onClick={() => toggleShowAll('albums')}
        >
          {showAllAlbums ? 'Show Less' : 'Show All'}
        </button>
        <button 
          className="mt-3 text-sm text-blue-500 hover:underline"
          onClick={addNewAlbum}
        >
          + New Album
        </button>
      </div>

      {/* Organizations Section */}
      <div className="mb-6">
        <h2 className="font-semibold text-lg mb-4 flex items-center text-gray-700">
          <OfficeBuildingIcon className="w-6 h-6 mr-3 text-teal-500" /> Organizations
        </h2>
        <ul className="space-y-3">
          {(showAllOrganizations ? organizations : organizations.slice(0, 2)).map((organization, index) => (
            <li key={index} className="text-gray-700 cursor-pointer hover:underline">
              {organization}
            </li>
          ))}
        </ul>
        <button 
          className="mt-3 text-sm text-blue-500 hover:underline"
          onClick={() => toggleShowAll('organizations')}
        >
          {showAllOrganizations ? 'Show Less' : 'Show All'}
        </button>
        <button 
          className="mt-3 text-sm text-blue-500 hover:underline"
          onClick={addNewOrganization}
        >
          + New Organization
        </button>
      </div>

      {/* Followers Section */}
      <div className="mb-6">
        <h2 className="font-semibold text-lg mb-4 flex items-center text-gray-700">
          <UsersIcon className="w-6 h-6 mr-3 text-gray-500" /> Followers
        </h2>
        <ul className="space-y-3">
          {(showAllFollowers ? followers : followers.slice(0, 2)).map((follower, index) => (
            <li key={index} className="text-gray-700 cursor-pointer hover:underline">
              {follower}
            </li>
          ))}
        </ul>
        <button 
          className="mt-3 text-sm text-blue-500 hover:underline"
          onClick={() => toggleShowAll('followers')}
        >
          {showAllFollowers ? 'Show Less' : 'Show All'}
        </button>
      </div>

      {/* People You Follow Section */}
      <div className="mb-6">
        <h2 className="font-semibold text-lg mb-4 flex items-center text-gray-700">
          <UsersIcon className="w-6 h-6 mr-3 text-indigo-500" /> People You Follow
        </h2>
        <ul className="space-y-3">
          {(showAllPeopleYouFollow ? peopleYouFollow : peopleYouFollow.slice(0, 2)).map((person, index) => (
            <li key={index} className="text-gray-700 cursor-pointer hover:underline">
              {person}
            </li>
          ))}
        </ul>
        <button 
          className="mt-3 text-sm text-blue-500 hover:underline"
          onClick={() => toggleShowAll('peopleYouFollow')}
        >
          {showAllPeopleYouFollow ? 'Show Less' : 'Show All'}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
