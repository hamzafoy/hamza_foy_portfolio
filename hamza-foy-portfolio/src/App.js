import './App.css';
import Timeline from './Timeline/Timeline';
import Works from './Works/Works'
import Resume from './Resume/Resume'
//import Footer from './Footer/Footer'

function App() {
  return (
    <div className="App">
      <Resume/>
      <Timeline/>
      <Works/>
    </div>
  );
}

export default App;