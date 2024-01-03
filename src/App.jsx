// import { useState } from 'react'
import { Home } from './Pages/Home'
import Favorites from './Pages/Favorites'
import Order from './Pages/Order'
import Cart from './Pages/Cart'

// react router dom
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements, Outlet, Route
} from 'react-router-dom'
// Sidebar
import Sidebar from './Components/Sidebar'

function App() {
  const router = createBrowserRouter(
    // Helps create root object from Elements
    createRoutesFromElements(
      <Route path='/' element={<Root/>}>
        <Route index element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/favs' element={<Favorites/>}/>
        <Route path='/orders' element={<Order/>}/>
      </Route>
    )
  )
  return (
    <div className='App'>
      <RouterProvider router={router}/>
    </div> 
  )
}

export default App
const Root = ()=> {
  return(
    <>
    <div>
      <Sidebar/>
    </div>
    <div>
      <Outlet/>
    </div>
    </>
  )
}
