import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

import Home from './components/Home';
import Resume from './components/Resume';
import Error from './components/Error';

import './App.css';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Tom Greenwald</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Helmet>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/resume" element={ <Resume /> } />
          <Route path="*" element={ <Error />} />
        </Routes>
      </BrowserRouter>
  </div>
  );
}

export default App;
