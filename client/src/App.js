import './App.css';
// import Head from './components/Head';
// import Footer from './components/Footer';
import Main from './components/Main';
// import { userContext } from './context/userContext';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </div >
  );
}

export default App;
