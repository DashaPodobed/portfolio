import React from 'react'
import './App.css';
import Header from "./Header/Header";
import Home from "./Home/Home";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import HomeWork from "./HomeWork/HomeWork";
import Contacts from "./Contacts/Contacts";
import Profile from "./Profile/Profile";

function App() {
    return (
        <div className="App">
            <Header/>
            <Home/>
            <Skills/>
            <Projects/>
            <HomeWork/>
            <Contacts/>
            <Profile/>
        </div>
    );
}

export default App;
