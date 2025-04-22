import React from 'react' 
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Users from './Components/Users'
import CreateUser from './Components/CreateUser'
import UpdateUser from './Components/UpdateUser'

function App() { 

  return (
    <>
        {/* <h1 className='text-2xl text-red-500 animate-bounce text-center underline mt-5'>Testing the tailwind css</h1> */}
        <div>
          <BrowserRouter>
          <Routes>
              <Route path='/' element={<Users/>}></Route>
              <Route path='/create' element={<CreateUser/>}></Route>
              <Route path='/update/:id' element={<UpdateUser/>}></Route>
          </Routes>
          </BrowserRouter>
        </div>
    </>
  )
}

export default App
