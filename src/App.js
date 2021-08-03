import React from 'react'
import './App.css';
import Header from "./r1-Header/Header";
import Home from "./r2-Home/Home";
import Skills from "./r3-Skills/Skills";
import Projects from "./r4-Projects/Projects";
import HomeWork from "./r5-HomeWork/HomeWork";
import Contacts from "./r6-Contacts/Contacts";
import Profile from "./r7-Profile/Profile";

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
