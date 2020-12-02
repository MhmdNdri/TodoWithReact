import '../styles/App.scss';
import React, { useState } from 'react';
import Profile from "./Profile"
import TaskManager from './TaskManager';
import Header from './Header';
import Calendar from 'react-calendar'

function App() {

  const [date, setDate] = useState(new Date());

  return (
    <div className="container">
      <div className="left-column">
        <Profile />
        <TaskManager />
      </div>
      <div className="right-column">
        <Header />
        <Calendar value={date} onClickDay={setDate} className="react-calendar" />
      </div>
    </div>
  );
}

export default App;
