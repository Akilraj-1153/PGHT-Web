import React from 'react'
import ImageContext from './HandleData/ImageContext'
import Logoimg from './Assets/logo.png'
import Intro from './Components/1 Intro/Intro'
import SignUp from './Components/2 Auth/SignUp'
import LogIn from './Components/2 Auth/LogIn'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { LoginState } from './HandleData/atoms'
import { useEffect } from 'react'
import MainApp from './Components/3 MainApp/MainApp'

function App() {
  const navigation =useNavigate()
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(LoginState);
  const [logo]=useState(Logoimg)

  useEffect(() => {
   
    const user = JSON.parse(localStorage.getItem('user'));
    setIsLoggedIn(!!user); 
  }, []);

  return (
      <ImageContext.Provider value={logo}>
      <div className='h-screen w-screen  bg-black text-white'>
        <Routes>
          <Route path='/' element={ <Intro Logoimg={Logoimg}></Intro>}></Route>
          <Route path='/signup' element={<SignUp Logoimg={Logoimg}></SignUp>}></Route>
          <Route path='/login' element={!isLoggedIn &&  <LogIn Logoimg={Logoimg}></LogIn>}></Route>
          <Route path='/mainApp/*' element={isLoggedIn && <MainApp Logoimg={Logoimg}></MainApp>}></Route>
        </Routes>
        </div>
    </ImageContext.Provider>
  )
}

export default App