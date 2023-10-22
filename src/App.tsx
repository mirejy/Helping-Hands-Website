import React from 'react';
import Header from './components/Header';
import GeneralSection from './components/GeneralSection';
import AboutUs from './components/About us';
import BlockVolunteer from './components/BlockVolunteer';
import NeedHelp from './components/NeedHelp';

function App() {
  return (
    <div className="App">
      <Header />
      <GeneralSection />
      <AboutUs />
      <BlockVolunteer />
      <NeedHelp />
    </div>
  );
}

export default App;
