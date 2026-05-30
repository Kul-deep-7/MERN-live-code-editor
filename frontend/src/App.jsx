import React from 'react'
import Home from './component/Home'
import EditorPage from './component/EditorPage'
import { Toaster } from 'react-hot-toast';
import { Routes, Route } from "react-router-dom";


function App() {
  return (
<>
    <div>
      <Toaster  position='top-center'></Toaster>
    </div>
    <Routes>
     <Route path='/' element={ <Home /> } />
     <Route path='/editor/:roomId' element={ <EditorPage /> } />
    </Routes>
    </>
  )
}

export default App
