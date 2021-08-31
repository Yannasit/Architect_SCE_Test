import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import PageContent from './components/PageContent';
import ProjectSection from './components/ProjectSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
function App(){
    return (
        <div>
            <Navbar/>
            <Header/>
            <PageContent/>
            <ProjectSection/>
            <AboutSection/>
            <ContactSection/>
            <Footer/>
        </div>
    );
}
export default App;