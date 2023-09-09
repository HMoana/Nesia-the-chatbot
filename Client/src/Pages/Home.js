import React from 'react'
import Hero from '../Components/Hero/Hero';
import CallUps from '../Components/CallUps/CallUps';
import About from '../Components/About/About';
import Footer from '../Components/Footer/Footer';
import NesiaChatBot from '../Components/NesiaChatBot/NesiaChatBot';

const Home = () => {
  return (
    <div>
      <Hero />
      <CallUps />
      <About />
      <Footer />
      <NesiaChatBot />
    </div>
  )
}

export default Home
