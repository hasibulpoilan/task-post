import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainFeed from './components/MainFeed';
import TaskBoard from './components/TaskBoard';


function App() {
  return (
    <div className="flex flex-col h-screen">
     
      <Header />

     
      <div className="flex flex-grow">
        <Sidebar />
        <MainFeed />
        <TaskBoard />
      </div>
    </div>
  );
}

export default App;
