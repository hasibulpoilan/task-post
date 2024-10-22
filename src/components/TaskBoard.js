import React, { useState } from 'react';
import {
  PlusIcon,
  CheckCircleIcon,
  ClipboardListIcon,
  UserIcon,
} from '@heroicons/react/solid'; 
import logo from '../assets/logo.png'; 


const TaskBoard = () => {
 
  const [boards, setBoards] = useState(['Board 1', 'Board 2', 'Board 3']);
  const [newBoardName, setNewBoardName] = useState('');
  const [progress, setProgress] = useState({ taskProgress: 50, eventParticipation: 30 });
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Task 1', completed: false },
    { id: 2, name: 'Task 2', completed: false },
    { id: 3, name: 'Task 3', completed: false },
  ]);

  // Handle adding a new board
  const handleNewBoard = () => {
    if (newBoardName.trim() !== '') {
      setBoards([...boards, newBoardName]);
      setNewBoardName('');
    }
  };

  // Handle progress update
  const updateProgress = (type, value) => {
    setProgress(prevProgress => ({
      ...prevProgress,
      [type]: value,
    }));
  };

  // Handle task completion
  const handleTaskChange = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="w-1/4 bg-white p-4 h-screen rounded-lg border border-gray-300 overflow-y-auto overflow-x-hidden ">
    
      <div className="flex items-center mb-8">
        <img
          src={logo} alt="Logo"
          className="w-10 h-10 mr-2 "
        />
        <h1 className="text-xl font-bold text-blue-600">Your App Name</h1>
      </div>

      {/* Boards Section */}
      <div className="mb-8">
        <h2 className="font-bold text-lg mb-2 text-blue-600 flex items-center">
          <ClipboardListIcon className="w-5 h-5 mr-2 text-blue-600" />
          Boards
        </h2>
        <ul>
          {boards.map((board, index) => (
            <li key={index} className="mb-2 text-blue-500 cursor-pointer hover:underline flex items-center">
              <CheckCircleIcon className="w-4 h-4 mr-2 text-green-500" />
              {board}
            </li>
          ))}
        </ul>
        <div className="items-center flex-wrap mb-2 ">
          <input
            type="text"
            className="border text-sm border-gray-300 p-1 flex-wrap rounded-l mb-2      flex items-center justify-between mt-4 "
            value={newBoardName}
            onChange={(e) => setNewBoardName(e.target.value)}
            placeholder="New Board"
          />
          <button
            onClick={handleNewBoard}
            className="text-sm flex text-white bg-blue-600 px-4 py-1 rounded-r hover:bg-blue-500"
          >
            <PlusIcon className="w-4 h-4 mr-1" />
            Add Board
          </button>
        </div>
      </div>

      {/* Personal Progress Section */}
      <div className="mb-8">
        <h2 className="font-bold text-lg mb-2 text-blue-600 flex items-center">
          <UserIcon className="w-5 h-5 mr-2 text-blue-600" />
          Personal Progress
        </h2>
        <div className="flex items-center justify-between mb-2">
          <span>Task Progress</span>
          <span>{progress.taskProgress}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
          <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: `${progress.taskProgress}%` }}></div>
        </div>
        <div className="flex items-center justify-between mb-2">
          <span>Event Participation</span>
          <span>{progress.eventParticipation}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div className="bg-green-500 h-2.5 rounded-full" style={{ width: `${progress.eventParticipation}%` }}></div>
        </div>
        <div className="flex items-center justify-between mt-4 flex-wrap">
          <button
            onClick={() => updateProgress('taskProgress', progress.taskProgress + 10)}
            className="text-sm text-white bg-blue-600 px-4 py-1 rounded mt-2 hover:bg-blue-500"
          >
            Increase Task Progress
          </button>
          <button
            onClick={() => updateProgress('eventParticipation', progress.eventParticipation + 10)}
            className="text-sm text-white bg-green-600 px-4 py-1 rounded mt-2 hover:bg-green-500"
          >
            Increase Event Participation
          </button>
        </div>
      </div>

      {/* Tasks Section */}
      <div className='overflow-y-auto'>
        <h2 className="font-bold text-lg mb-2 text-blue-600 flex flex-wrap items-center">
          <ClipboardListIcon className="w-5 h-5 mr-2 text-blue-600" />
          Tasks
        </h2>
        <ul className="space-y-2 max-h-40 overflow-y-auto">
          {tasks.map((task) => (
            <li key={task.id} className="flex justify-between items-center bg-gray-100 p-2 rounded-md">
              <span className={`text-gray-800 ${task.completed ? 'line-through' : ''}`}>
                {task.name}
              </span>
              <input
                type="checkbox"
                className="w-4 h-4"
                checked={task.completed}
                onChange={() => handleTaskChange(task.id)}
              />
            </li>
          ))}
        </ul>
        <button
    onClick={() => setTasks([...tasks, { id: tasks.length + 1, name: 'New Task', completed: false }])}
    className="text-sm text-white bg-blue-600 px-4 py-1 rounded mt-4 flex items-center hover:bg-blue-500"
  >
    <PlusIcon className="w-4 h-4 mr-1" />
    Add Task
  </button>
      </div>
    </div>
  );
};

export default TaskBoard;
