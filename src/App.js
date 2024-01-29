import ExperienceForm from "./components/ExperienceForm";
import ExperienceCard from "./components/ExperienceCard";
import UpdateExperienceForm from './components/UpdateExperienceForm';
import {Route, Routes, BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div className="App text-center">
      <BrowserRouter>
      <Routes>
        <Route path = '/' Component={ExperienceCard} />
        <Route path = '/AddCard' Component={ExperienceForm} />
        <Route path='/UpdateCard/:id' element={<UpdateExperienceForm />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
