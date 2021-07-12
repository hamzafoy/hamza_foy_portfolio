import './App.css';
import Timeline from './Timeline/Timeline';
import Works from './Works/Works'
import Resume from './Resume/Resume'
import Footer from './Footer/Footer'

function App() {
  return (
    <div className="App">
      <Timeline/>
      <Works/>
      <Resume/>
      <Footer/>
    </div>
  );
}

export default App;