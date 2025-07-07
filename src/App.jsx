import React from 'react'
import { Routes, Route } from 'react-router-dom'
// import AudioPlayer from './components/AudioPlayer';


import Home from './pages/Home'
import Result from './pages/Result'
import BuyCredit from './pages/BuyCredit'
import Navebar from './components/Navebar'
import Footer from './components/Footer'

const App = () => {
  return (

    <div className='px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b frm-teal-50 to-orange-50'>
      {/* <h1 style={{color: 'red'}}>Test Render</h1> */}
      <Navebar/> 
      <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="/result" element={<Result />} />
        {/* <Route path="/buy" element={<BuyCredit />} /> */}
      </Routes>
      <Footer/>
    </div>
    
  )
}

export default App