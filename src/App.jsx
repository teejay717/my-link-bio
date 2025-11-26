import './App.css';
import LinkButton from './LinkButton';

function Profile() {
  return (
    <div className="text-center p-8">
      <img src="/img/profile-pic.jpg" alt="avatar" className='w-40 h-40 rounded-full mx-auto mb-4'/>
      <h1 className=" font-bold text-3xl text-gray-200">teejay.dev</h1>
      <p className="text-gray-400">Full-stack developer in training</p>
    </div>
  );
}

function App() {
  return (
    <div className="App min-h-screen bg-gray-900 flex flex-col items-center justify-center p-8">
      <Profile />
      <LinkButton title="GitHub" url="https://github.com/teejay717" />
      <LinkButton title="LinkedIn" url="https://linkedin.com/in/yourusername" />
      <LinkButton title="Portfolio" url="https://yourportfolio.com" />
    </div>
  );
}

export default App;