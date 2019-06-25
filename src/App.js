import React from 'react';
import './App.css';
import resumeData from './resumeData';

import Header from './components/header';
import About from './components/about';
import Resume from './components/resume';
import Portfolio from './components/portfolio';
import Footer from './components/footer';


function App() {
  return (
    <div className="App">
        <Header resumeData={resumeData}/>
        <About resumeData={resumeData}/>
        <Resume resumeData={resumeData}/>
        <Portfolio resumeData={resumeData} />
        <Footer resumeData={resumeData} />
    </div>
  );
}

export default App;
