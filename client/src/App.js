import './App.css';
// import Head from './components/Head';
// import Footer from './components/Footer';
import Main from './components/Main';
// import { userContext } from './context/userContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;
