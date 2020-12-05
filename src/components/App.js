import '../styles/App.scss';
import React, { useState } from 'react';
import Profile from "./Profile"
import TaskManager from './TaskManager';
import Header from './Header';
import Calendar from 'react-calendar';
import Modal from './Modal';


function App() {

  const [date, setDate] = useState(new Date());
  const [modal, setModal] = useState(false)


  console.log(modal)

  return (
    <div>
      <Modal closeModal={modal} onCloseModal={setModal} showModal={modal} />
      <div className="container">
        <div className="left-column">
          <Profile />
          <TaskManager intialShow={modal} setShowModal={setModal} />
        </div>
        <div className="right-column">
          <Header />
          <Calendar value={date} onClickDay={setDate} />
        </div>
      </div>
    </div>

  );
}

export default App;
