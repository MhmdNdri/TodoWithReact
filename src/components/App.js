import '../styles/App.scss';
import React, { useState } from 'react';
import Profile from "./Profile"
import TaskManager from './TaskManager';
import Header from './Header';
import Calendar from 'react-calendar';
import Modal from './Modal';


function App() {

  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false)
  const [clicked, isClicked] = useState(false)

  return (
    <div>
      <Modal closeValue={clicked} onCloseClick={isClicked} show={show} />
      <div className="container">
        <div className="left-column">
          <Profile />
          <TaskManager setShow={setShow} />
        </div>
        <div className="right-column">
          <Header />
          <Calendar value={date} onClickDay={setDate} className="react-calendar" />
        </div>
      </div>
    </div>

  );
}

export default App;
