import './App.css';
import { Routes, Route } from 'react-router-dom';
import CreateCity from './CreateCity';
import Home from './Home';
import { useEffect, useState } from 'react';
import axios from 'axios';
import GetAllCity from './GetAllCity';
import CityDetails from './CityDetails';
import UpdateCity from './UpdateCity';


function App() {

const [cities, setCities] = useState([]);

  useEffect(() => {
    async function getAllCities() {
      try {
        const response = await axios.get('http://localhost:8080/city');
        console.log(response.data);
        setCities(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getAllCities();
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home cities={cities} />} />
        <Route path="createCity" element={<CreateCity />} />
        <Route path="getAllCity" element={<GetAllCity cities={cities} />} />
        <Route path="cityDetails/:id" element={<CityDetails />} />
        <Route path="updatecity/:id" element={<UpdateCity />} />
      </Routes>
    </div>
  );
}

export default App;
