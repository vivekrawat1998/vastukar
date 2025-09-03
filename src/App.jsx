
import React from 'react'
import './App.css'
import './index.css';
import { Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout';
import Homepage from './pages/Homepage';



function App() {

  return (
    <>
      <div className=' '>




        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App
