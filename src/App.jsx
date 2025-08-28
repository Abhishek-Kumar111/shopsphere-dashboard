import React, { useState } from 'react'
import Header from './component/Header'
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from 'react-router'
import Sidebar from './component/Sidebar'
import Dashboard from './page/Dashboard'
import { createContext } from 'react'
import Login from './page/Login'
import SignUp from './page/Sign-Up'
import Product from './page/Product'
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { IoMdClose } from "react-icons/io";
import Slide from '@mui/material/Slide';

import AddProduct from './page/Product/AddProduct.jsx'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const MyContext = createContext();

function App() {
  
  const [isOpenSidebar, setIsOpenSidebar] = useState(true);
  const [isLogin, setIsLogin] = useState(true);
  const [isOpenUploadPage, setIsOpenUploadPage] = useState({
    open: false,
    model:''
  }); // we do (model:'')this to work for different models like product, listing etc


  const value = {
    isOpenSidebar,
    setIsOpenSidebar,
    isLogin,
    setIsLogin,
    isOpenUploadPage,
    setIsOpenUploadPage,
  }
 
  const router = createBrowserRouter([
    {
      path:'/',
      exact:true,
      element:(
        <>
          <section className='main'>
            <Header />
            <div className='contentMain flex'>
              <div className = {`sidebarWrapper overflow-hidden ${isOpenSidebar ? 'w-[20%]' : 'w-[0px] opacity-0'}`}>
                <Sidebar />
              </div>
              <div className={`contentRight py-4 px-5 ${isOpenSidebar ? 'w-[80%]' : 'w-[100%]'}`} transition-all duration-300>
                <Dashboard />
              </div>
            </div>
          </section>
        </>
      ),
    },
    {
      path:'/login',
      exact:true,
      element:(
        <Login />
      )
    },
    {
      path:'/sign-up',
      exact:true,
      element:(
        <SignUp />
      )
    },
     {
      path:'/product',
      exact:true,
      element:(
        <>
          <section className='main'>
            <Header />
            <div className='contentMain flex'>
              <div className = {`sidebarWrapper overflow-hidden ${isOpenSidebar ? 'w-[20%]' : 'w-[0px] opacity-0'}`}>
                <Sidebar />
              </div>
              <div className={`contentRight py-4 px-5 ${isOpenSidebar ? 'w-[80%]' : 'w-[100%]'}`} transition-all duration-300>
                <Product />
              </div>
            </div>
          </section>
        </>
      ),
    },
  ]);


  
  return (
    <MyContext.Provider value={value}>
      <RouterProvider router={router} />
       <Dialog
        fullScreen
        open={ isOpenUploadPage.open}
        onClose={() => setIsOpenUploadPage({ open: false, model: '' })}
        slots={{
          transition: Transition,
        }}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={() => setIsOpenUploadPage({ open: false, model: '' })}
              aria-label="close"
            >
              <IoMdClose className='text-gray-700'/>
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 ,color: "black"}} variant="h6" component="div">
              {isOpenUploadPage?.model}
            </Typography>
            
          </Toolbar>
        </AppBar>
              {isOpenUploadPage?.model === "Upload Product" &&  <AddProduct />}
      </Dialog>

    </MyContext.Provider>
  )
}

export default App;
export { MyContext };