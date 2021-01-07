import React from 'react'
import '../../App.css';
import HeroSection from '../Hero/HeroSection';
import Profile from '../Profile/Profile';
import style from '../Hero/Hero.module.css';
import styles from '../Profile/Profile.module.css';
function Home() {
    return(
        <>
       
        <HeroSection />
        <Profile />



        </>
    )
}

export default Home;