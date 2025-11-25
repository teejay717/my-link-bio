import './App.css';
import LinkButton from './LinkButton';

function Profile() {
  return (
    <div className="profile">
      <img src="https://via.placeholder.com/150" alt="avatar" />
      <h1>teejay.dev</h1>
      <p>Full-stack developer in training</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Profile />
      <LinkButton title="GitHub" url="https://github.com/teejay717" />
      <LinkButton title="LinkedIn" url="https://linkedin.com/in/yourusername" />
      <LinkButton title="Portfolio" url="https://yourportfolio.com" />
    </div>
  );
}

export default App;