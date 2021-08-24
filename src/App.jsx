import './App.css';
import Banner from './components/Banner';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="sections">
        <Banner />
      </div>
    </div>
  );
}

export default App;
