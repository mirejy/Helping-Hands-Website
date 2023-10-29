import React from 'react';
import Header from './components/Header';
import GeneralSection from './components/GeneralSection';
import AboutUs from './components/About us';
import BlockVolunteer from './components/BlockVolunteer';
import NeedHelp from './components/NeedHelp';
import Mission from './components/Mission';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <GeneralSection />
      <AboutUs id="AboutUs" />
      <BlockVolunteer />
      <NeedHelp />
      <Mission />
      <Footer id="Contacts" />
    </div>
  );
}

export default App;
