import React from 'react'
import Note from './components/Note'
import Create from './components/Create';
import Edit from './components/Edit';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Sidebar from './components/Sidebar';

function App() {
  return <>
  <div className='container-fluid d-flex min-vh-100'>
    <BrowserRouter>
      <Sidebar/>
        <Routes>
            <Route path='/' element={
           <div className='main mx-3 my-3 py-5 px-5'>
           <Create/>
           <Note/>  
       </div>     }/>
            
            <Route path='/edit/:id' element={<Edit/>}/>
        </Routes>
    </BrowserRouter>
  </div>
</>
}

export default App