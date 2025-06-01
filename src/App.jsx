import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'

import Homepage  from './components/homepage';



function App() {
  // const [count, setCount] = useState(0)

  return (

     <Router>
      <Routes>
        <Route path="/web3salespage" element={<Homepage />} />
       
      </Routes>
    </Router>
  
  )
}

export default App
