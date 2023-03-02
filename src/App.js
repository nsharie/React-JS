import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText = "AboutUtils"/>
      {/*<Navbar/>*/}
      <div className="container my-3">
      <TextForm heading = "Enter your text for convertion"/>
      </div>    
    </>
  );
}

export default App;
