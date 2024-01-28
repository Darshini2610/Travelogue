import ExperienceForm from "./components/ExperienceForm";
import ExperienceCard from "./components/ExperienceCard";
import {Route, Routes, BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div className="App text-center">
      <BrowserRouter>
      <Routes>
        <Route path = '/' Component={ExperienceCard} />
        <Route path = '/AddCard' Component={ExperienceForm} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
