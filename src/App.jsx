import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './component/Header/Header'
import Sample from './component/Sample/Sample'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Sample/>}  />
      </Routes>
    </BrowserRouter>
  )
}

export default App
