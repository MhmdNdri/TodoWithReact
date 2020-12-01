import '../styles/App.scss';
import Profile from "./Profile"
import TaskManager from './TaskManager';
import Header from './Header';

function App() {
  return (
    <div className="container">
      <div className="left-column">
        <Profile />
        <TaskManager />
      </div>
      <div className="right-column">
        <Header />
      </div>
    </div>
  );
}

export default App;
