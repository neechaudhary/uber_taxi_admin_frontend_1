import React from 'react';
import Body from './components/Body';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import "./App.css";
import Profile from './components/Profile';
import Dashboard from './components/Dashboard';
import Driver from './components/Driver';
import Riders from './components/Riders';
import Drivers_list from './components/Drivers_list';
import Manual_booking from './components/Manual_booking';


function App() {
  return (
    <div>
      {/* <Body /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path ="/driver" element={<Driver />} />
          <Route path ="/riders" element={<Riders />} />
          <Route path="driver-list" element={<Drivers_list/>}/>
          <Route path="/manual-booking" element={<Manual_booking/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
