import user from './components/Profile/user.json';
import data from './components/Statistics/data.json';
import Profile from './components/Profile/Profile';
import {Statistics} from './components/Statistics/Statistics';
import './App.css';

function App() {
  return (
    <div className="App">      
        <Profile user={user} />
        <Statistics title="Upload stats" stats={data} />  
        <Statistics  stats={data} />      
    </div>
  );
}

export default App;
